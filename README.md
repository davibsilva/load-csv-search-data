<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="API - CSV file import and search data" />
  &#xa0;
</div>

<h1 align="center">API - CSV file import and search data</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/davibsilva/glowing-airline-ticket?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/davibsilva/glowing-airline-ticket?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/davibsilva/glowing-airline-ticket?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/davibsilva/glowing-airline-ticket?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Getting Started</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/davibsilva" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

RESTFul API for load CSV file and search data


## :rocket: Technologies ##

The following tools was used in this project:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://mongodb.com)
- [Docker](https://docker.com)

## :white_check_mark: Requirements ##

Before we start :checkered_flag:, you need have [Git](https://git-scm.com), [Node](https://nodejs.org/en/), [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/) installed.

## :checkered_flag: Instructions to test the API ##

```bash
# Clone the project
$ git clone https://github.com/davibsilva/load-csv-search-data.git

# Change to repository directory
$ cd load-csv-search-data

# Install dependencies
$ npm install

# Create a .env file on project root

# Copy the .env.template content on project root and paste in created .env file(It must be necessary to test the API)
Example:
PORT=3000
MONGO_DB_HOSTNAME=db

# Run API
$ npm run start-api

# Wait some seconds and the server will be available in: <http://localhost:3000>
```

## :memo: License ##

This project is under lincense from MIT.


Made with :heart: by <a href="https://github.com/davibsilva" target="_blank">Davi V. Barbosa Silva</a>
&#xa0;

<a href="#top">Back to top</a>