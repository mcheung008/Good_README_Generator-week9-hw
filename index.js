const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// const axios = require("axios");
// const path = require('path');
// async function main(){
//     console.log(`starting`);
//     const userResponse = await inquirer
//     .prompt([
// {
//     type: "input",
//     message: "What is your GitHub user name?",
//     name: "username"
// },

function promptUser() {
    return inquirer.prompt([

        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Provide a detailed description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide contribution guidelines for use.",
            name: "contribution"
        },
        {
            type: "input",
            message: "Provide any test instructions.",
            name: "test"
        },
        {
            type: "input",
            message: "Choose a license for your application.",
            choices: ["Apache", "GPL", "MIT", "None"],
            name: "license"
        },
        {
            type: "input",
            message: "Please provide your GitHub username.",
            name: "ghUserName"
        },
        {
            type: "input",
            message: "Please provide your email address.",
            name: "email"
        }

    ]);

}

function generateReadMe(answers) {
    return `

    # ${answers.projectTitle}

    ## Description ${answers.projectDescription}

    ## Table of Contents 

    ## Table of Contents
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributing] (#contributing)
    * [Tests] (#tests)
    * [Questions] (#questions)

    ## Installation 
    ${answers.installationProcess}

    ## Usage ${answers.instruction}

    ## License ${answers.license}

    ## Contributing ${answers.contribution}

    ## Tests ${answers.test}

    ## Questions  

    Please contact me via Email for questions or advice: mcheung008@gmail.com

    `
}



promptUser()
    .then(function (answers) {
        const readme = generateReadMe(answers);

        return writeFileAsync("README_user.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to README_user.md");
    })
    .catch(function (err) {
        console.log(err);
    });




// //         console.log(`
//     starting `);
// //         console.log(userResponse);
// //         const gitUsername = userResponse.username;
// //         const projectTittle = userResponse.projectTittle;
// //         const projectDescription = userResponse.projectDescription;
// //         const installationProcess = userResponse.installationProcess;
// //         const instruction = userResponse.instruction;
// //         const instructionExample = userResponse.instructionExample;
// //         const licenseName = userResponse.licenseName;
// //         const licenseUrl = userResponse.licenseUrl;
// //         const contributorUserNames = userResponse.contributorsGitUserName;
// //         const tests = userResponse.tests;
// //             // fetching data from git
// //             // user
// //         const gitResponse = await axios.get(`
//     https: //api.github.com/users/${gitUsername}`);
//         const gitData = gitResponse.data;
//         const gitName = gitData.login;
//         const gitEmail = gitData.email;
//         const gitlocation = gitData.location;
//         const gitUrl = gitData.html_url;
//         const gitProfileImage = gitData.avatar_url;
//             // contributor
//         const contributorUserNamesArray = contributorUserNames.split(",");
//         console.log(contributorUserNamesArray);
//         // const  = listOfContributorsUserNames.
//         // contributorsGitUserName
//         var resultContributor;
//         for (i=0; i<contributorUserNamesArray.length; i++){
//             var contributorsGitUserName = contributorUserNamesArray[i]
//             const gitResponse2 = await axios.get(`https://api.github.com/users/${contributorsGitUserName}`);
//             var gitContribuProfileImage = gitResponse2.data.avatar_url;
//             var gitContribuUrl = gitResponse2.data.html_url;
//             var gitContribuEmail = gitResponse2.data.email;
//             var resultContributor = resultContributor + (`
//             \n <img src="${gitContribuProfileImage}" alt="drawing" width="150" display="inline"/> ${contributorsGitUserName}  GitHubLink: ${gitContribuUrl}`);
//         }
//         var result = (`
// # ${projectTittle} 
// ${projectDescription}
// \n* [Installation](#Installation)
// \n* [Instructions](#Instructions)
// \n* [License](#License)
// \n* [Contributors](#Contributors)
// \n* [Author](#Author)
// \n* [Tests](#Tests)
// ## Installation
// ${installationProcess}
// ## Instructions
// ${instruction}
// \`\`\`
// ${instructionExample}
// \`\`\`
// ## License 
// This project is licensed under the ${licenseName} - see the ${licenseUrl} file for details
// ## Contributors
// ${resultContributor}
// ## Tests
// ${tests}
// ## Author 
// \n![ProfileImage](${gitProfileImage})
// \n**${gitName}**
// \nEmail: ${gitEmail}
// \nLocation:${gitlocation}
// \nGitHub: ${gitUrl}
// `)
// var writeResult = fs.writeFileSync(path.join(__dirname, '../GoodReadMeGenerator', 'readMe.md'), result )
// console.log("file generated....")
//     }
// main();