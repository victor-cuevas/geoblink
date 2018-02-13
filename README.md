# Víctor Cuevas Assignment

> Realized in AngularJS

# Prerequisites

## Download git repository

Download the project:
```
git clone https://github.com/victor-cuevas/geoblink.git
```

## Install mocked backend server

Install json-server (`https://github.com/typicode/json-server`)
```
npm install -g json-server
```

Start the JSON Server specifying the mocked states JSON file and leave it open
```
json-server --watch mock.json
```
or
```
json-server --watch geoblink/mock.json
```
depending on the terminal location

# Getting Started

## Installing on new terminal

Installing NPM and Bower packages:
```
npm install & bower install
```

## Running
Runs locally, 'json-server' required for mocks though.

`npm run serve` (or `gulp serve` if gulp is installed), and the browser will open the application.
It uses BrowserSync that provides live reload which refresh the application in the browser with any changes produced on the source.   

## Testing

### Unit testing

`npm run test` (or  `gulp test`) to launch the unit tests defined with Jasmine (testing framework) and Karma (test Runner).

After executing the command, you can access a HTML report on folder test-reports/coverage/PhantomJS/index.html on browser

### E2E testing
> Note: e2e testing needs to have jdk installed.

`npm run protractor` (or `gulp protractor`) to run the end to end tests with protractor framework, the web driver of Selenium integrated with Angular.
