const childProcess = require('child_process');

const executeFlow = (options) => {
  childProcess.execSync(`npm run run-flow ${options.join(' ')}`, { stdio: [0, 1, 2]});
};

const flowCommands = process.argv.slice(2);

if (flowCommands.length > 0) {
  return executeFlow(flowCommands);
}

const dir = process.cwd();
const clientRoot = dir.charAt(0).toLowerCase() + dir.slice(1);

return executeFlow(['status', clientRoot, '--color=always']);
