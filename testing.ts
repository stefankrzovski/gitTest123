// @ts-ignore
const childProcess = require("child_process")

// @ts-ignore
const chalk = require("chalk")


console.log(chalk.red("Something"))

// childProcess.execSync(
//     "gh pr checkout loka",
// )
// //
// childProcess.execSync(
//     "gh pr create --base origin/devBuild --head origin/loka --title 'Yata' ",
// )

childProcess.execSync("gh pr checkout loka")
childProcess.execSync("gh pr create --base origin/devBuild --head origin/loka --title \"CodePush version\"")
childProcess.execSync("gh pr merge")

//
// gh pr checkout loka
//
// gh pr create --base devBuild --head loka --title "CodePush version"
//
// const result = spawn.sync("gh pr list --json number", { encoding : 'UTF-8' })
//
// const number = JSON.parse(result.stdout)[0].number
//
// gh pr merge ${number}
