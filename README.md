# performiosampleapp
This is demo application built on NodeJS with GET API health check endpoint and metadata endpoint. Dockerized the application. Also, mock jest case has been implemented.

## Node based app
npm init
npm install express
create index.js file and developed required code with GET API with '/' health check endpoint which
returns 200 and '/app/v1' which returns metadata about the application.

## Mock Test case

## Packaging
Docker has been used to encapsulate the application and it's dependencies.
## Github repo url: https://github.com/nagaraj07/performiosampleapp.git

**GitHub Actions** has been used to build the application and push the image to Docker Hub repository.

Deployment has not been used as part of this development we can use any Docker based orchestration services such as AWS ECS/EKS etc.

Application can be run locally and can be accessed via localhost.

http:localhost:3000/
returns: "Hello World!"
http:localhost:3000/app/v1
returns: 
{
    version: "1.0",
    description: "pre-interview technical test",
    lastcommitsha: "abc57858585",
    date: "2021-10-12T15:02:15.417Z"
}