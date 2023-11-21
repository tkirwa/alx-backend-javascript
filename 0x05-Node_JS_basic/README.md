# 0x05. NodeJS Basics

This project is about learning the basics of NodeJS and ExpressJS. It’s a great starting point for anyone interested in back-end development using JavaScript and ES6.

## Learning Objectives

- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific NodeJS module to read files
- Use process to access command line arguments and the environment
- Create a small HTTP server using NodeJS
- Create a small HTTP server using ExpressJS
- Create advanced routes with ExpressJS
- Use ES6 with NodeJS with Babel-node
- Use Nodemon to develop faster

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions/classes must be exported by using this format: module.exports = myFunction;

## Provided files

- database.csv
- package.json
- babel.config.js
- .eslintrc.js

## Getting Started

To get started with this project, clone this repository and navigate into the project directory. Install the required dependencies by running `npm install`. You can then run the project using `node filename.js` or `nodemon filename.js` if you have Nodemon installed.

![Node.js](https://www.bing.com/th?id=OSK.3849e73154d4b63fbd1dae47b2ba8be3&pid=cdx&w=320&h=194&c=7)

This a project to learn NodeJS and ExpressJS basics.

1. **Running JavaScript using NodeJS**: You can run a JavaScript file using NodeJS by typing `node filename.js` in your terminal.

2. **Using NodeJS modules**: You can include a module in your file using the `require()` function. For example, to include the File System module, you would write `const fs = require('fs')`.

3. **Reading files with NodeJS**: The File System module can be used to read files. Here’s a basic example:

    ```javascript
    const fs = require('fs');
    
    fs.readFile('database.csv', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
    
    ```

4. **Accessing command line arguments**: You can access the command-line arguments passed when the Node.js process was launched with `process.argv`. The first element will be `node`, the second element will be the name of the JavaScript file, and the next elements will be any additional command line arguments.

5. **Creating a small HTTP server using NodeJS**: The `http` module can create an HTTP server that listens to server ports and gives a response back to the client. Here is a basic example:

    ```javascript
    const http = require('http');
    
    const server = http.createServer((req, res) => {
        res.write('Hello World!');
        res.end();
    });
    
    server.listen(8080);
    
    ```

6. **Creating a small HTTP server using ExpressJS**: ExpressJS simplifies the process of setting up a server. Here’s a basic server setup with ExpressJS:

    ```javascript
    const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    app.listen(8080);
    
    ```

7. **Creating advanced routes with ExpressJS**: ExpressJS allows you to create route handlers for HTTP verbs (GET, POST, PUT, DELETE, etc.) at different route paths. For example, `app.get('/about', callback)` would handle GET requests at the ‘/about’ route.

8. **Using ES6 with NodeJS with Babel-node**: Babel is a toolchain that helps you write code in the latest version of JavaScript. When your scripts are run, Babel will convert ES6 code down to ES5 which can be run by Node.js without a problem. You’ll need to install some npm packages to get Babel working with your project.

9. **Using Nodemon to develop faster**: Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. This can greatly increase your productivity. You can install Nodemon globally with npm by using `npm install -g nodemon`. Then, you can start your application with Nodemon by using `nodemon filename.js` instead of `node filename.js`.

## Repo

- GitHub repository: [alx-backend-javascript](https://github.com/tkirwa/alx-backend-javascript)
- Directory: [0x05-Node_JS_basic](https://github.com/tkirwa/alx-backend-javascript/tree/main/0x05-Node_JS_basic)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
