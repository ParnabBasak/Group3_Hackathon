# ForecastAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.
Uses angular-material for styling and theming, this acts as the front end layer serving the following funtionality:
1. Ability for the user to Signup and Sign in
2. Ability for the Analyst team user to upload a SalesHistory
3. Ability for Analyst and the Warehouse team to view Forecasts

## Local Install

1. Clone the repository in local
2. Run npm install in the Angular_UI directory
3. Run npm start
4. View the app via url http://localhost:4200/

> Prerequisites:
> This frontend client depends on node, express js based server running on localhost and on port 3000.
> Follow the instructions as in the Node_Services directory under the main repository and run it.
> If your backend nodeserver is running on a different port, pls update the configuration in `/src/environments/environment.ts` file (field = apiBaseUrl)  

## Development server

Run `ng serve angular-material-frontend-client` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Viewing documentation 

Run `npm run compodoc` to generate latest documents. Then visit http://localhost:8080/ to view detailed documentation

## Viewing documentation
Run `ng lint` to view linting results on the app code