import inquirer from 'inquirer';
import fs from 'fs';

const html = ({name, location, bio, linkedin, github}) => {
 return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1 class="container-fluid bg-dark text-light text-center p-4">My Bio Page</h1>
    </header>
    <main>
      <section class="card col-sm col-lg-3 mx-auto bg-light text-center">
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <p class="card-text">Location: ${location} <br>${bio} </p>
          <a href="${linkedin}" class="btn btn-primary">LinkedIn</a>
          <a href="${github}" class="btn btn-primary">GitHub</a>
        </div>
      </section>
    </main>
  </body>
  </html>`;
};

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'list',
      message: 'Where do you live?',
      name: 'location',
      choices: ['Canada', 'United States', 'United Kingdom', 'Australia'],
    },
    {
      type: 'input',
      message: 'Input a brief bio',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'github',
    },
  ])
  .then((answers) => {
    const bioInfo = html(answers);

    fs.writeFile('myBio.html', bioInfo, (err) => err ? console.log(err) : console.log('Created html bios'));
  });
