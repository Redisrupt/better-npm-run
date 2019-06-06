#!/usr/bin/env node
/* eslint-disable global-require */
/* eslint-disable no-process-exit */

const cpExec = require('child_process').exec;
const logger = require('clix-logger/logger');
const assign = require('object-assign');

const path = require('path');
const exec = require('./lib/exec.js');
const join = path.join;

try {
  require('@babel/register')({
    extensions: ['.js', '.ts', '.json'],
  });
} catch (ex) {
  logger.subtle('babel-register not found... if ES6 syntax is needed please install `babel-register`');
}

const addNPMBinToPath = cb => {
  cpExec('npm bin', (error, stdout, stderr) => {
    if (error) {
      logger.error('received error', error);
      stderr && logger.error(stderr);
      return;
    }

    process.env.PATH += `${path.delimiter}${stdout.trim()}`;

    cb && cb();
  });
};

const doExec = (theCommand, commandName, config) => {
  logger.subtle(`Executing script: ${commandName}`);
  exec(theCommand, commandName, config);
};

const tryRequire = (pkgName, defaultValue) => {
  let ret;
  try {
    ret = require(pkgName);
  } catch (ex) {
    logger.warn('could not require:', pkgName);
    logger.subtle('error', ex);
    if (defaultValue) {
      ret = defaultValue;
    }
  }
  return ret;
};

const main = () => {
  logger.subtle('running bnr in', process.cwd());

  const fullPackagePath = join(process.cwd(), 'package.json');
  const pkg = require(fullPackagePath);

  let betterScriptsFromConfig;
  if (pkg.bnrConfig) {
    const pathToConfig = path.resolve(process.cwd(), pkg.bnrConfig);
    logger.subtle('loading bnrConfig', pathToConfig);
    let config = tryRequire(pathToConfig);
    if (config) {
      if (typeof config === 'function') {
        config = config();
      }
    }
    betterScriptsFromConfig = config;
  }

  let betterScripts = pkg.betterScripts;

  if (betterScriptsFromConfig) {
    betterScripts = assign({}, betterScripts, betterScriptsFromConfig);
  }

  const commandName = process.argv[2];

  if (!Object.keys(betterScripts).length === 0) {
    logger.error('ERROR: No betterScripts found!');
    process.exit(1);
  }
  if (!commandName) {
    logger.error('ERROR: No script name provided!');
    process.exit(1);
  }
  if (!betterScripts[commandName]) {
    logger.error(`ERROR: No betterScript with name "${commandName}" was found!`);
    process.exit(1);
  }

  const theCommand = betterScripts[commandName];

  doExec(theCommand, commandName, betterScripts);
};

addNPMBinToPath(main);
