# Wingify Assessment

## Problem Statement

- **Tests**

  <p>You need to write the automation scripts for the following pages:</p>

- **Login Page**

  <p>Cover all the possible functional testing scenarios.
  <b>Note:-</b> Any value of username/password is valid to log in the application</p>

- **Home Page**
  <p>After successful login into the application, click the AMOUNT header in the transaction table and
  check the values are sorted.</p>

## Testing Framework Used

- Cypress

## Programming language Used

- JavaScript

## Requirements

For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

### Node

- Node Installtion on Windows
  Go on to the [official Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have `.git` available in your PATH,
  `npm` might need it (You can find [git](https://git-scm.com/)).
- Other operating System
  You can find more information about the installation on the official [Node.js website](https://nodejs.org/en/) and the official [NPM website](https://www.npmjs.com/).

If the installation was successful, you should be able to run the following command.

```
$ node --version
v16.13.0

$ npm --version
8.2.0
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g

```

<br/>

## To run the project on your local machine:

1. Open terminal.

2. Change the current working directory to the location where you want the cloned directory.

   ```
   $ git clone https://github.com/kartiksarwan2017/qawingify

   ```

3. Install project dependencies by running the following command:

   ```
   npm install

   ```

4. Start the server by running the following command:

   ```
   npm start

   ```

   This will start the server and make your application accessible at a specified URL (e.g., http://localhost:8000)

5. In a new Termial tab or window, navigate to the root folder of qawingify project

6. Run the Cypress test runner by executing the following command:

   ```
    npx cypress open

   ```

   This will open the Cypress Test Runner, which allows you to select and run your test files interactively.

7. In the Cypress Test Runner, click on a test file (e.g., login.spec.js or home.spec.js) to run the associated tests.

   Alternatively, you can run all tests in headless mode (without the Test Runner) using the following command:

   ```
     npx cypress run
   ```

8. This will run all the tests in your project and display the results in the CLI.

   Remember to keep the server running (npm start) while running the Cypress tests so that the application is accessible for testing.

<br/>

## Library Used

- express
- nodemon
- cypress
- cypress-plugin-snapshots
- cypress-commands
- cypress-cucumber-preprocessor

- Framework: ExpressJS
- Version Control System: Git
- VCS Hosting: GitHub
- Programming / Scripting: JavaScript
- Runtime Environment: NodeJS
- Integrated Development Environment: VSCode

<br />

## Tools Used

 <p align="justify">
<img height="140" width="140" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="HTML logo">
<img height="140" width="140" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS logo">
<img height="140" width="140" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="Javascript logo">
<img height="140" width="140" src="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg">
<img height="140" width="140" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png">
<img height="140" width="140" src="https://www.cypress.io/cypress_logo_social.png">
<img height="140" width="140" src="https://www.pngitem.com/pimgs/m/13-131098_visual-studio-code-logo-hd-png-download.png">
</p>
