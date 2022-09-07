const inquirer = require('inquirer');

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);





// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw new Error (err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

const promptUser = () => {
    return inquirer.prompt([
        {
            /* Pass your questions in here */
            type: 'input',
            name: 'name',
            message: 'what is yoyr name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your user name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your info!');
                  return false;
                }
              }
        }
    ]);
};



const promptProject = portfolioData => {
    
// If there's no 'projects' array property, create one
if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

    console.log(`
    =================
    Add a New Project 
    =================    
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter project name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter description!');
                  return false;
                }
              }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please select languages!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the link!');
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please answer y or n');
                  return false;
                }
              }
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please answer y or n');
                  return false;
                }
              }
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
    
};




promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
    