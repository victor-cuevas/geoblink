# Víctor Cuevas Assignment

> Realized in AngularJS

# Prerequisites

## Mocked backend

Install json-server (`https://github.com/typicode/json-server`)
```
npm install -g json-server
```

Start the JSON Server specifying the mocked states JSON file and leave it open
```
json-server --watch db.json
```

# Getting Started

## Installing

Download the  project:
```
git clone https://github.com/victor-cuevas/geoblink.git
```

Installing NPM and Bower packages:
```
npm install & bower install
```

## Running
Runs locally, 'json-server' required for mocks though.

`npm run serve` and the browser will open the application
It uses BrowserSync that provides live reload which refresh the application in the browser with any changes produced on the source.   

## Testing

### Unit testing

`npm run test` or  `npm run test:auto` to launch the unit tests defined with Jasmine (testing framework) and Karma (test Runner).

### E2E testing
> Note: e2e testing needs to have jdk installed.

`npm run protractor`  to run the end to end tests with protractor framework, the web driver of Selenium integrated with Angular.
