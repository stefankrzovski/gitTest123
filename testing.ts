// @ts-ignore
const childProcess = require("child_process")

// @ts-ignore
const chalk = require("chalk")


console.log(chalk.red("Something"))

childProcess.execSync(
    "gh pr list"
)

// childProcess.execSync(
//     "gh pr checkout loka",
// )
//
// childProcess.execSync(
//     "gh pr create --base devBuild --head loka --title 'Version CodePush' ",
// )
