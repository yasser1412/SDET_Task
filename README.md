# SDET_Task

[About the task](#Description)

[Instructions](#How-To-Use)

[Scripts](#Scripts)

[What is done](#EndPoints)

[Tests Reports](#Reports)

[CircleCI Status](#CircleCI)
#
[Test Scenarios/Cases](UI/README.md)

[Bugs Reporting](https://docs.google.com/document/d/1I5Ageqn-_TnrjEzhblVRfAhg-cOeTvTNOPScY09kpXk/edit?usp=sharing)

## Description

This is a task on automation testing which tests:
- Ecommerce web application [My Store](http://automationpractice.multiformis.com/index.php) using nightwatch
- [mock-user-auth](https://www.npmjs.com/package/mock-user-auth) API using supertest and jest.

And to Setup CI/CD for the project using Circleci.

## How To Use

- clone the repository
- run `npm install`

## Scripts

- To Run UI Tests:
`npm run uiTest`
- To Run The Server:
`npm run api` "Needed for the API Tests"
- To Run API Tests:
`npm run apiTest` 

## What is done

- Created Automation Scripts for [My Store](http://automationpractice.multiformis.com/index.php) contact us page for each possible user 
scenarios for the form submission using nightwatch.

- Created Automation Scripts for [My Store](http://automationpractice.multiformis.com/index.php) to search and verify the search 
results as a count and results using nightwatch.

- listed all possible scenarios for the user experience in an item page.

- Tested all the API routes found on the [mock-user-auth](https://www.npmjs.com/package/mock-user-auth) page using jest as a test runner and supertest.

- Generated HTML reports for the scripts results.

- Documented all Test [Scenarios/Cases](UI/README.md) created, and all [Bugs](https://docs.google.com/document/d/1I5Ageqn-_TnrjEzhblVRfAhg-cOeTvTNOPScY09kpXk/edit?usp=sharing) found.

- Created a pipline using circleci for CI/CD that auto runs tests and deliver test reports to [Auto-deliver-test-reports](https://github.com/yasser1412/SDET_Task/tree/Auto-deliver-test-reports) branch, which is trigered by Github App Trigger on the main branch.

- CI/CD steps:       
    - Check out the code from the repository
    - install npm dependencies
    - Install Chrome & ChromeDriver
    - Start ChromeDriver
    - Run UI tests
    - Download wait-for-it.sh to run local server in background
    - Start the server in the background
    - Run API tests
    - Auto-commit and push test reports to Auto-deliver-test-reports branch

## Reports:

### [UI Reports](https://github.com/yasser1412/SDET_Task/tree/Auto-deliver-test-reports/UI/nightwatchReports):

- [UI HTML Report](https://rawcdn.githack.com/yasser1412/SDET_Task/40c4211c763d3f67e7398adabd82787176df5d0d/UI/nightwatchReports/nightwatch-html-report/index.html) 

### [API Report](https://github.com/yasser1412/SDET_Task/tree/Auto-deliver-test-reports/API/jestReports):

- [API HTML Report](https://rawcdn.githack.com/yasser1412/SDET_Task/40c4211c763d3f67e7398adabd82787176df5d0d/API/jestReports/test-report.html) 


## CircleCI

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/LgsvRoaq5MEhhr3WczjEaY/KWEpHFu6aSm31qvFHbxHB/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/LgsvRoaq5MEhhr3WczjEaY/KWEpHFu6aSm31qvFHbxHB/tree/main)
