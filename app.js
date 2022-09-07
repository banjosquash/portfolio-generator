const inquirer = require('inquirer');

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);




// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw new Error (err);
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

inquirer
  .prompt([
    {
        /* Pass your questions in here */
        type: 'input',
        name: 'name',
        message: 'what is yoyr name?'
    }
    
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });