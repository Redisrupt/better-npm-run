/* eslint-disable no-process-exit */
require('dotenv').config({ silent: true });
const logger = require('clix-logger/logger');
const minimist = require('minimist');

const spawn = require('child_process').spawn;
const objectAssign = require('object-assign');

const pretty = require('pretty-time');
const timeManager = {
  start() {
    const start = process.hrtime();
    return {
      stop() {
        const diff = process.hrtime(start);
        return diff[0] * 1e9 + diff[1];
      },
    };
  },
};

const getCommand = (script, argv, config) => {
  if (typeof script === 'string') return { result: script, type: 'string' };

  const commands = typeof script === 'function' ? script : script.cmd || script.command;

  if (typeof commands === 'function') {
    const p = commands.apply(null, [{ args: minimist(argv), rawArgs: argv, config }]);
    return Promise.resolve(p).then(res => {
      let theCommand;
      let theEnv;

      if (typeof res === 'string') {
        theCommand = res;
      }

      if (res && typeof res === 'object') {
        let cmd = res.cmd || res.command;
        theEnv = res.env;

        if (Array.isArray(cmd)) {
          cmd = cmd.join(' && ');
        }

        theCommand = cmd;
      }

      if (Array.isArray(res)) {
        theCommand = res.join(' && ');
      }

      return { type: 'function:result', result: theCommand, env: theEnv };
    });
  }

  if (Array.isArray(commands)) {
    // TODO: see how commands are concatenated in win32
    // for now this should work
    return { result: commands.join(' && '), type: 'array' };
  }

  return { result: commands };
};

module.exports = function exec(script, theCommand, config) {
  const argv = process.argv.splice(3);

  if (script && typeof script === 'object' && typeof script.task === 'function') {
    const fnTimer = timeManager.start();
    Promise.resolve(
      script.task({
        config,
        rawArgs: argv,
        args: minimist(argv),
      }),
    )
      .then(() => {
        const diff = fnTimer.stop();
        logger.subtle(theCommand, 'took:', pretty(diff, 'ms'));
      })
      .catch(err => {
        const diff = fnTimer.stop();
        logger.subtle(theCommand, 'took:', pretty(diff, 'ms'));
        logger.error('error executing task', err);
        process.exit(1); // fail with error
      });

    // no need to send nothing thru the shell, just execute the function directly
    return;
  }

  Promise.resolve(getCommand(script, argv, config)).then(res => {
    res = res || {};
    let command = res.result;

    if (!command) {
      if (res.type !== 'function:result') {
        logger.error(`No command or cmd key defined in "${theCommand}" entry`);
        process.exit(1);
      } else {
        logger.subtle('no command to execute in the provided function');
        logger.ok('All done!');
        process.exit(0);
      }
    }

    // in the case of function the extra parameters were passed to the function
    // so no need to also concatenate then to the command that is passed to exec
    command = res.type === 'function:result' ? command : `${command} ${argv.join(' ')}`;

    const env = objectAssign({}, process.env, script.env, res.env);

    let sh = 'sh';
    let shFlag = '-c';
    if (process.platform === 'win32') {
      sh = 'cmd';
      shFlag = '/c';
      command = `"${command.trim()}"`;
    }

    logger.subtle('to be executed:', command);

    const timer = timeManager.start();

    const cp = spawn(sh, [shFlag, command], {
      env,
      windowsVerbatimArguments: process.platform === 'win32',
      stdio: 'inherit',
    });

    cp.on('close', code => {
      const diff = timer.stop();
      const cmd = code === 0 ? 'ok' : 'error';
      logger[cmd](theCommand, 'took:', pretty(diff, 'ms'), '\n');
    });

    cp.on('exit', (code, signal) => {
      const diff = timer.stop();
      const cmd = code === 0 ? 'ok' : 'error';
      logger[cmd](theCommand, 'took:', pretty(diff, 'ms'), '\n');
      if (signal) {
        logger.error('Signal received: ', signal);
      }
      if (!code && !signal) process.exit(0);
      process.exit(code || 1);
    });

    cp.on('error', error => {
      const diff = timer.stop();
      logger.subtle(theCommand, 'took:', pretty(diff, 'ms'));
      logger.error('bnr error:', error);
    });
  });
};
