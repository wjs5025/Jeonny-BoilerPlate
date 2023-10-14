#! /usr/bin/env node

const { execSync, exec } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
    console.log("You have to provide a 'jeonny-boilerplate' to your app.");
    console.log("For example :");
    console.log("    npx create-jb-app preoject-name [--use next|react]");
    process.exit(1);
}


const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName)
const useOption = process.argv[3];
const useOptionValue = process.argv[4];
const GIT_REPO = `https://github.com/wjs5025/react-ts-default-settings.git`;

if (projectName !== ".") {
    try {
      // Check command - use Option
      if (useOption && useOption === "--use"){
        if (!(useOptionValue === "next" || useOptionValue === "react")){
          throw new Error("The use option is incorrect. : After the --use option, only next and react can appear.")
        }
      }

      // Make Dircetory and Change Work Dircetory
      fs.mkdirSync(projectPath);
      process.chdir(projectPath);
    } catch (err) {
      if (err.code === "EEXIST") {
        console.log(projectName);
        console.log(
          `The file ${projectName} already exist in the current directory, please give it another name.`
        );
      } else {
        console.log(err);
      }
      process.exit(1);
    }
}

async function main() {
  try {
    // Origin Repository Clone
    console.log("Downloading files...");
    execSync(`git init`)
    execSync(`git remote add origin ${GIT_REPO}`);
    execSync(`git config core.sparseCheckout true`);
    execSync(`echo ${useOptionValue??"react"}/* >> .git/info/sparse-checkout`);
    execSync(`git pull origin master`);

    // Install dependencies in package.json
    console.log("Installing dependencies...");
    process.chdir(useOptionValue ?? "react");
    execSync("npm install"); // package.json에 있는 의존성 설치

    // Now remove boilerplate git stuff
    console.log("Removing useless files");
    execSync("npx rimraf ./.git"); 

    // Done
    console.log("The installation is done, this is ready to use !");
    console.log("Go to the root path of the project and run the following command.")
    if (useOptionValue ==="next") {
      console.log("npm run dev")
    } else if (useOptionValue ==="react") {
      console.log("npm start")
    } else {
      console.log("npm start")
    }
  } catch (error) {
      console.log(error);
  }
}
  
  main();