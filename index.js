// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions for your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information for your project?',
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'What are the test instructions for this project?',
            name: 'testInfo',
        },
        {
            type: 'list',
            message: 'What type of license does your project use?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'ISC License', 'MIT License', 'Mozilla Public License 2.0', 'None'],
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])

        //creating url for api call using axios
        .then((answers) => {
            console.log(answers)
            fs.writeFile('README-test.md', writeToFile(answers), (err) => {
                if (err) throw err;
                console.log('Success!');
            })      
        
        });

        // TODO: Create a function to generate README 
        function writeToFile(answers) {

            let badge;
            let notice;
            // Pick the license
            switch (answers.license) {
                case 'Apache License 2.0':
                    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                    notice = 'Apache License 2.0.';
                    break;
                case 'GNU General Public License v3.0':
                    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
                    notice = 'GNU General Public License v3.0.';
                    break;
                case 'ISC License':
                    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
                    notice = 'ISC License.';
                    break;
                case 'MIT License':
                    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                    notice = 'MIT License.';
                    break;
                case 'Mozilla Public License 2.0':
                    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
                    notice = 'Mozilla Public License 2.0.';
                    break;
                case 'None':
                    badge = '';
                    notice = 'N/A';
            }
// Fill in Template for the README
            return`# ${answers.title}${badge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usageInfo}

## License
${answers.license.notice}

## Contributions
${answers.contributions}

## Tests
${answers.testInfo}

## Questions
If you have any questions, don't hesitate to reach out:
            
Github: [${answers.username}](https://github.com/${answers.username}) 


Email: ${answers.email}`

        };



