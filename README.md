# performiosampleapp
This is demo application built on NodeJS with GET API calls with base route path as health check endpoint and a metadata endpoint. Dockerized the application. Also, Jest mock test case has been implemented. Auto trigger Github Actions pipeline has been implemented with event based trigger on code push.

## Module Installation and Setup

npm init

npm install express

npm install http

npm install jest

npm install supertest

created getFunction.js file and developed required code with GET API with '/' health check endpoint which returns 200 and '/app/v1' which returns metadata about the application.
created server.js file to initiate the node application.

## Mock Test case
**Jest framework** has been used to write mock test case and **supertest** library has been used to assert network requests.

2 Success and 1 Failure case has been written.

## Packaging
Docker has been used to encapsulate the application and it's dependencies.

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