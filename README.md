SadgeHub 
=================

#### *The \#1 Sadge content distributor in the world!*  

# Members
* David Castaneda   - Back End
* Kevin Chung       - Infrastructure
* Nam Dang          - Front End
* Samuel Kim        - Infrastructure
* Zeeshan Sayed     - Front End

# About SadgeHub

Welcome to SadgeHub! This project was created for our CIT 481/L Senior Design project at California State University: Northridge. Our group is comprised of five aspiring IT students. SadgeHub is a website that allows users to sign up for a 100% **free** account that unlocks exclusive content for members. To sign up, all you need is an active email!

# Tools Used 

These are the tools we are planning to use

* GitHub
  * GitHub is quite possibly the number one way developers collaborate on coding projects since it is a quick and easy way to store large amounts of code and update that code. Git commands allow you to do all of this from the comfort of your good ol' command line.

* Node.js
  * Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. Using Chrome's powerful v8 engine, Node.js allows us to use JavaScript as a backend programming language, making it possible to run server-side code completely on JavaScript. Node.js is completely free and runs on various platforms, such as Windows, Mac OS, Linux and Unix. Node.js has the ability to generate dynamic page content, it can create, open, read, write, delete, and close files on the server, it can collect form data and also add, delete, modify data in your database.

* Amazon Web Services (AWS)
  * As certified AWS Cloud Practitioners, we will be using AWS to deploy and host our web app. AWS is among the most used cloud platforms and we are all familiar with how it works.

* Terraform
  * When it comes to infrastructure, it is always a good idea to automate it. Using Terraform, we can build our infrastructure as a code making our deployment process much faster and less of a headache. 


# Getting Started - Installing Node.js

Downloading and installing Node.js is very simple. To get Node.js on your system, simply head over to https://nodejs.org/en/download/ and select your corresponding operating system. Upon clicking, a download should begin and, once finished, you should have Node.js installed. A quick way to do this is to go on your command line, in my case the terminal (Windows users can use cmd or powershell) and typing in the following command:

```node -v```

This should output the current version of Node.js installed on your system. If you see a version number, you are good to go.

# Node Package Manager (NPM)

npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. You can think of NPM as a collection of modules in JavaScript code that is used to elevate your Node.js programs. NPM hosts thousands of free packages to download and use. Upon downloading Node.js, NPM is automatically included in your download and ready to use on your computer.

# Searching for and Installing Packages

There are hundreds of packages that you as a programmer have at your disposal thanks to NPM. To find one that you would like to use, simply go to [www.npmjs.com](www.npmjs.com) use the search bar and search for something related to your project. Here are some packages that were used to create SadgeHub:
* Express
* EJS
* mongoDB
* Bcrypt
* JSON Web Tokens (JWT)
* Cookie Parser
* Validator
* Nodemon

# Making a basic Express App

SadgeHub is constructed via a very common web app NPM package known as Express. Express is almost a must when you are developing apps that deal with routing, requests/responses and server-side logic. This is the very first package you should download when making any sort of app. The first thing you want to do is install the package using the following command:

```npm install express```

This should add the package to your 'package.json' file in the dependencies section and you should now be able to access the package. The next step is to create a main JavaScript file to initialize our express app. These are typically named something along the lines of 'app.js', 'server.js' or 'index.js'. Inside the app, write the following code:

```
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```

Let's go overe what each of these lines does. First we need to include the package we are using by declaring a variable and requiring the package. Next we initialize our app. Moving along, we want to declare a route for our content, in this case just '/' meaning the root page. We then fire a function that will send the content we include, we are sending a simple string "Hello World!". Finally, we tell the app which port to listen to in order for us to access our app (Port 3000). Now, when we navigate over to the url 'localhost:3000' we will se our web application! This is the foundation of how SadgeHub was built.   

# Project Board

#### *Cycle One*

| Members              | Weekly Tasks                                     | Status
| -----------          | -----------                                      | -------
| David Castaneda      | Research Databases                               | Complete
| Kevin Chung          | Research Terraform                               | Complete
| Nam Dang             | Research UX/UI standards                         | Complete
| Samuel Kim           | Research Terraform                               | Complete
| Zeeshan Sayed        | Research Front-end frameworks                    | Complete

#### *Cycle Two*

| Members              | Weekly Tasks                                     | Status
| -----------          | -----------                                      | -------
| David Castaneda      | Connect App to MongoDB                           | Complete
| Kevin Chung          | Work on authentication                           | Complete
| Nam Dang             | Assure site follows UX/UI standards              | Complete
| Samuel Kim           | Establish routes for site                        | Complete
| Zeeshan Sayed        | Populate site with content                       | Complete

#### *Cycle Three*

| Members              | Weekly Tasks                                     | Status
| -----------          | -----------                                      | -------
| David Castaneda      | Deploy app using Elastic Beanstalk               | In Progress
| Kevin Chung          | Configure appropriate infrastructure             | In Progress
| Nam Dang             | Obtain Domain name via Route 53                  | In Progress
| Samuel Kim           | Configure appropriate infrastructure             | In Progress
| Zeeshan Sayed        | Acquire SSL certificate to make site HTTPS       | In Progress

*This file will be populated as our project progresses, stay tuned :)*
