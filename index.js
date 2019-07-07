var carden = require('@mrtarantula/carden');
var chalk = require('chalk');

console.log(
    carden(
        'GitHub Package Registry',
        `Carden was pulled from the ${chalk.red('GitHub Package Registry')}!`,
        {
            header: { backgroundColor: "cyan", padding: 1 },
            content: { padding: 2 },
            borderStyle: "singleDouble"
        }
    ));