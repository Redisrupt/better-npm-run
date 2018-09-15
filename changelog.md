
# @redisrupt/better-npm-run - Changelog
## v5.0.0
- **Refactoring**
  - upgrade changelogx to fix issue with tags without prefix - [61822e5]( https://github.com/Redisupt/better-npm-run/commit/61822e5 ), [Roy Riojas](https://github.com/Roy Riojas), 15/09/2018 13:25:00

    
## v3.0.0
- **Refactoring**
  - upgrade to support babel@7 - [d8457a5]( https://github.com/Redisupt/better-npm-run/commit/d8457a5 ), [Roy Riojas](https://github.com/Roy Riojas), 15/09/2018 02:57:49

    
  - upgrade eslint - [def31b8]( https://github.com/Redisupt/better-npm-run/commit/def31b8 ), [Roy Riojas](https://github.com/Roy Riojas), 15/09/2018 02:33:15

    
  - change from position parameters to named parameters - [abb7de9]( https://github.com/Redisupt/better-npm-run/commit/abb7de9 ), [Roy Riojas](https://github.com/Roy Riojas), 01/02/2017 14:54:04

    
  - allow setting the key value as function - [3cce464]( https://github.com/Redisupt/better-npm-run/commit/3cce464 ), [Roy Riojas](https://github.com/Roy Riojas), 24/01/2017 23:50:12

    
  - test setting env vars from the output function - [a0a9d38]( https://github.com/Redisupt/better-npm-run/commit/a0a9d38 ), [Roy Riojas](https://github.com/Roy Riojas), 24/01/2017 23:47:41

    
  - Allow to return descriptors from the functions - [c9746ef]( https://github.com/Redisupt/better-npm-run/commit/c9746ef ), [Roy Riojas](https://github.com/Roy Riojas), 24/01/2017 23:40:57

    
  - use ms instead of no unit - [82dff75]( https://github.com/Redisupt/better-npm-run/commit/82dff75 ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 19:11:30

    
- **Bug Fixes**
  - use @babel/register instead of babel-register - [c096c0a]( https://github.com/Redisupt/better-npm-run/commit/c096c0a ), [Roy Riojas](https://github.com/Roy Riojas), 15/09/2018 02:25:21

    
  - Add the concept of task, a function that does not execute any shell command - [bf3d6bb]( https://github.com/Redisupt/better-npm-run/commit/bf3d6bb ), [Roy Riojas](https://github.com/Roy Riojas), 31/01/2017 17:56:21

    
  - add missing message about why the config could not be imported - [6ca23fb]( https://github.com/Redisupt/better-npm-run/commit/6ca23fb ), [Roy Riojas](https://github.com/Roy Riojas), 28/01/2017 10:38:41

    
  - execute properly the commands when the return from function is an array - [10e4587]( https://github.com/Redisupt/better-npm-run/commit/10e4587 ), [Roy Riojas](https://github.com/Roy Riojas), 25/01/2017 21:24:02

    
  - in case of result type function don't append provided args - [d1c7315]( https://github.com/Redisupt/better-npm-run/commit/d1c7315 ), [Roy Riojas](https://github.com/Roy Riojas), 25/01/2017 02:05:14

    
  - Use the name of the task instead of the command on 'ok' log - [c240604]( https://github.com/Redisupt/better-npm-run/commit/c240604 ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 19:02:31

    
  - Move dep to devDependencies - [4ebaf7e]( https://github.com/Redisupt/better-npm-run/commit/4ebaf7e ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 18:28:52

    
- **Features**
  - attempt to require babel-register if installed - [ef6ebc2]( https://github.com/Redisupt/better-npm-run/commit/ef6ebc2 ), [Roy Riojas](https://github.com/Roy Riojas), 25/01/2017 22:48:18

    
  - functions as commands - [d09dc6a]( https://github.com/Redisupt/better-npm-run/commit/d09dc6a ), [Roy Riojas](https://github.com/Roy Riojas), 22/01/2017 00:29:24

    
  - Add bump scripts - [57dccaf]( https://github.com/Redisupt/better-npm-run/commit/57dccaf ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 18:30:34

    
  - Support external config - [de9b9b4]( https://github.com/Redisupt/better-npm-run/commit/de9b9b4 ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 18:04:45

    - ability to specify several commands to be executed in sequence
    - ability to specify an external file with the tasks config, exported as
      a function or as an object.
    - add `npm bin` output to the `process.env.PATH`
    
- **Other changes**
  - 0.0.13 - [cd69d87]( https://github.com/Redisupt/better-npm-run/commit/cd69d87 ), [Andrew Turner](https://github.com/Andrew Turner), 28/10/2016 13:06:28

    
  - environment variable precedence and behavior ([#58](https://github.com/Redisupt/better-npm-run/issues/58), reverts [#55](https://github.com/Redisupt/better-npm-run/issues/55)) - [82a1f0e]( https://github.com/Redisupt/better-npm-run/commit/82a1f0e ), [Andrew Turner](https://github.com/Andrew Turner), 28/10/2016 13:04:22

    
  - enforce consistent indentation with editorconfig - [8f37e8a]( https://github.com/Redisupt/better-npm-run/commit/8f37e8a ), [Andrew Turner](https://github.com/Andrew Turner), 26/10/2016 11:12:53

    
  - 0.0.12 - [239ceb8]( https://github.com/Redisupt/better-npm-run/commit/239ceb8 ), [Ben Orozco](https://github.com/Ben Orozco), 24/10/2016 22:48:35

    
  - specify configuration sources order - [6aabacd]( https://github.com/Redisupt/better-npm-run/commit/6aabacd ), [just-boris](https://github.com/just-boris), 24/10/2016 15:44:28

    
  - 0.0.11 - [04017dd]( https://github.com/Redisupt/better-npm-run/commit/04017dd ), [Ben Orozco](https://github.com/Ben Orozco), 18/08/2016 13:31:32

    
  - add support for command string, break out tests, update documentation - [5324bf7]( https://github.com/Redisupt/better-npm-run/commit/5324bf7 ), [Andrew Turner](https://github.com/Andrew Turner), 09/08/2016 09:58:45

    
  - 0.0.10 - [190abe2]( https://github.com/Redisupt/better-npm-run/commit/190abe2 ), [Ben Orozco](https://github.com/Ben Orozco), 23/07/2016 17:22:30

    
  - Switch to inheriting the stdin pipe as well as the stdout and stderr ones ([#46](https://github.com/Redisupt/better-npm-run/issues/46)) - [1732ad2]( https://github.com/Redisupt/better-npm-run/commit/1732ad2 ), [Tom Finlayson](https://github.com/Tom Finlayson), 23/07/2016 17:19:18

    
  - 0.0.9 - [9a82f79]( https://github.com/Redisupt/better-npm-run/commit/9a82f79 ), [Ben Orozco](https://github.com/Ben Orozco), 21/06/2016 19:32:22

    
  - fix [#42](https://github.com/Redisupt/better-npm-run/issues/42). Add shorter cli alias - [d0aaec1]( https://github.com/Redisupt/better-npm-run/commit/d0aaec1 ), [Roy Riojas](https://github.com/Roy Riojas), 19/06/2016 12:47:37

    
  - release 0.0.8 - [d4c8cf1]( https://github.com/Redisupt/better-npm-run/commit/d4c8cf1 ), [Ben Orozco](https://github.com/Ben Orozco), 01/03/2016 11:30:10

    
  - fix [#36](https://github.com/Redisupt/better-npm-run/issues/36) 'is not recognized as an internal or external command' - [60b37c2]( https://github.com/Redisupt/better-npm-run/commit/60b37c2 ), [Artur Dudnik](https://github.com/Artur Dudnik), 01/03/2016 11:23:00

    
  - release 0.0.7 - [5e9e28e]( https://github.com/Redisupt/better-npm-run/commit/5e9e28e ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 08/02/2016 11:36:06

    Changelog:
      - Use dot-env package
      - remove 'endofline' package
    
  - remove 'endofline' package - [9cc04a4]( https://github.com/Redisupt/better-npm-run/commit/9cc04a4 ), [Goran Gajic](https://github.com/Goran Gajic), 08/02/2016 11:22:26

    because it's not used anymore
    
  - Suppress warning when no .env file is present - [8fb0a7f]( https://github.com/Redisupt/better-npm-run/commit/8fb0a7f ), [Gilles Castel](https://github.com/Gilles Castel), 08/02/2016 10:19:07

    
  - Use dot-env package - [47b0e3a]( https://github.com/Redisupt/better-npm-run/commit/47b0e3a ), [Gilles Castel](https://github.com/Gilles Castel), 08/02/2016 08:49:02

    
  - 0.0.6 release - [a998458]( https://github.com/Redisupt/better-npm-run/commit/a998458 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 02/02/2016 11:04:12

    CHANGELOG:
    
      - remove \r if found when reading .env
    
  - remove \r if found - [1b05e08]( https://github.com/Redisupt/better-npm-run/commit/1b05e08 ), [Goran Gajic](https://github.com/Goran Gajic), 31/01/2016 18:44:12

    
  - add cross-env - [7b302bc]( https://github.com/Redisupt/better-npm-run/commit/7b302bc ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 24/01/2016 01:41:40

    
  - Add Gitter badge - [8526fb8]( https://github.com/Redisupt/better-npm-run/commit/8526fb8 ), [The Gitter Badger](https://github.com/The Gitter Badger), 05/01/2016 13:52:40

    
  - Remove "build" betterScript from README.md - [ded0a3a]( https://github.com/Redisupt/better-npm-run/commit/ded0a3a ), [Chris Arnesen](https://github.com/Chris Arnesen), 21/12/2015 13:28:50

    That feature hasn't been implemented yet.
    
    https://github.com/benoror/better-npm-run/issues/18
  - 0.0.5 release - [7776f4c]( https://github.com/Redisupt/better-npm-run/commit/7776f4c ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 10/12/2015 17:15:02

    - Improve README.md via 2dafaf (<a target="_blank" class="info-link" href="https://github.com/Redisupt/better-npm-run/issues/25"><span>#25</span></a>)
    - Pipe stdout, stderr via e349d4 (<a target="_blank" class="info-link" href="https://github.com/Redisupt/better-npm-run/issues/24"><span>#24</span></a>)
    - Support colors via 2e15ab
    
  - Add unix (sh -c) and win32 (cmd /c) to command head - [2e15ab2]( https://github.com/Redisupt/better-npm-run/commit/2e15ab2 ), [Jhen](https://github.com/Jhen), 10/12/2015 15:20:26

    
  - Update README.md - [2dafaff]( https://github.com/Redisupt/better-npm-run/commit/2dafaff ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 09/12/2015 12:02:28

    Fixes https://github.com/benoror/better-npm-run/issues/25
  - Pipe stdout, stderr - [e349d41]( https://github.com/Redisupt/better-npm-run/commit/e349d41 ), [Jhen](https://github.com/Jhen), 08/12/2015 09:07:28

    
  - Fix indentation and syntax error in JSON example in `README.md` - [1e2dff8]( https://github.com/Redisupt/better-npm-run/commit/1e2dff8 ), [jpersson](https://github.com/jpersson), 20/11/2015 16:42:58

    
  - 0.0.4 - [cf49752]( https://github.com/Redisupt/better-npm-run/commit/cf49752 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 10/11/2015 18:30:06

    
  - add object-assign polyfill - [3a119ee]( https://github.com/Redisupt/better-npm-run/commit/3a119ee ), [Goran Gajic](https://github.com/Goran Gajic), 10/11/2015 13:31:51

    because older versions of node does not support native Object.assign
    
  - add ability to pass through CLI arguments [#20](https://github.com/Redisupt/better-npm-run/issues/20) - [edfa889]( https://github.com/Redisupt/better-npm-run/commit/edfa889 ), [Goran Gajic](https://github.com/Goran Gajic), 08/11/2015 04:30:10

    
  - add simple test - [2996a46]( https://github.com/Redisupt/better-npm-run/commit/2996a46 ), [Goran Gajic](https://github.com/Goran Gajic), 07/11/2015 14:34:58

    
  - add ability to include .env files from the project root - [6df8904]( https://github.com/Redisupt/better-npm-run/commit/6df8904 ), [Goran Gajic](https://github.com/Goran Gajic), 07/11/2015 14:34:58

    
  - switch from exec to spawn child_process - [7cb31d6]( https://github.com/Redisupt/better-npm-run/commit/7cb31d6 ), [Goran Gajic](https://github.com/Goran Gajic), 07/11/2015 14:34:25

    
  - use tabs everywhere be more consistent - [41b5d71]( https://github.com/Redisupt/better-npm-run/commit/41b5d71 ), [Goran Gajic](https://github.com/Goran Gajic), 26/10/2015 09:21:54

    
  - default env if not present - [29307a9]( https://github.com/Redisupt/better-npm-run/commit/29307a9 ), [Goran Gajic](https://github.com/Goran Gajic), 26/10/2015 09:21:38

    
  - convert from dos line endings to unix - [98cbc3c]( https://github.com/Redisupt/better-npm-run/commit/98cbc3c ), [Goran Gajic](https://github.com/Goran Gajic), 26/10/2015 08:12:41

    so we can run better-npm-run directly
    ```better-npm-run start```
    instead of
    ```node ./node_modules/.bin/better-npm-run start```
    
  - 0.0.3 - [6f001d9]( https://github.com/Redisupt/better-npm-run/commit/6f001d9 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 23/10/2015 17:02:16

    
  - Handle exit codes - [3649668]( https://github.com/Redisupt/better-npm-run/commit/3649668 ), [Dan Schuman](https://github.com/Dan Schuman), 23/10/2015 16:48:13

    
  - Alternatives message - [e9eaed7]( https://github.com/Redisupt/better-npm-run/commit/e9eaed7 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 21/10/2015 12:14:45

    
  - 0.0.2 - [c971141]( https://github.com/Redisupt/better-npm-run/commit/c971141 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 21/08/2015 12:52:11

    
  - npm badge - [b3a95c9]( https://github.com/Redisupt/better-npm-run/commit/b3a95c9 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 16/06/2015 09:49:24

    
  - Initial commit - [65a5b01]( https://github.com/Redisupt/better-npm-run/commit/65a5b01 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 15/06/2015 17:41:07

    
- **undefined**
  - http://makeapullrequest.com/ - [83918a7]( https://github.com/Redisupt/better-npm-run/commit/83918a7 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 09/02/2016 20:25:15

    
  - add SemaphoreCI badge - [57759c1]( https://github.com/Redisupt/better-npm-run/commit/57759c1 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 08/02/2016 13:48:59

    Fixes: https://github.com/benoror/better-npm-run/issues/32
    
  - better handling of stderr - [607e522]( https://github.com/Redisupt/better-npm-run/commit/607e522 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 21/08/2015 12:51:58

    
