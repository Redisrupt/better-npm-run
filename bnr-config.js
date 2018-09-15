module.exports = () => ({
  eslint: {
    cmd(params) {
      const args = params.args;
      return `eslint lib/**/*.js test/**/*.js *.js ${args.fix ? '--fix' : ''}`;
    },
  },
  demo: {
    task(params) {
      const b = params.config.demo1.task();
      console.log('b is', b);
    },
  },
  demo1: {
    task() {
      return Math.random() * 1000;
    },
  },
  test(args) {
    return {
      cmd: './test-cmd.sh',
      env: {
        DEBUG: args.dbg,
      },
    };
  },
});
