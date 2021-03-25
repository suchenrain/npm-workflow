const { rm, cp, mkdir, exec, env } = require('shelljs');
const chalk = require('chalk');

console.log(chalk.green('1.remove old coverage reports...'));
rm('-rf', 'coverage');
rm('-rf', '.nyc_output');

console.log(chalk.green('2.run test and collect new coverage...'));
exec('nyc --reporter=html npm test');

console.log(chalk.green('3.achive coverage report by version...'));
const npm_package_version = env['npm_package_version'];
mkdir('-p', 'coverage_archive/' + npm_package_version);
cp('-r', 'coverage/*', 'coverage_archive/' + npm_package_version);

console.log(chalk.green('4.cleanup...'));
rm('-rf', 'coverage');
rm('-rf', '.nyc_output');

console.log(chalk.green('5.open coverage report for preview...'));
exec('npm-run-all --parallel cover:serve cover:open');
