# Angular 16 HTTP Tutorial

A comprehensive tutorial and demonstration project showcasing how to implement HTTP web services in Angular 16.

## Features Demonstrated

This project demonstrates core HTTP operations using Angular's `HttpClient` to communicate with a REST API:
- **HTTP GET Requests:** Fetching and displaying lists of data (Users, Resources) with strongly typed interfaces.
- **HTTP POST Requests:** Sending data to the server for authentication and creation (Login, Registration).
- **Error Handling:** Centralized HTTP error handling using RxJS `catchError`.
- **Routing:** Navigating between different views based on user interactions.

## Technology Stack

- **Framework:** [Angular 16](https://angular.io/)
- **Language:** TypeScript
- **HTTP Client:** `@angular/common/http`
- **Styling:** [Bulma (pure css framework)](https://bulma.io/)
- **API Backend:** [Reqres.in](https://reqres.in/) (A hosted REST-API ready to respond to your AJAX requests)

## Project Structure

The core logic of the application revolves around the `ApiService` (`src/app/api.service.ts`), which handles the following API endpoints:
- `GET /api/users` - Fetches a paginated list of users.
- `GET /api/unknown` - Fetches a paginated list of resources.
- `POST /api/register` - Registers a new user.
- `POST /api/login` - Authenticates a user and retrieves a token.

The UI consists of four main pages found in `src/app/pages`:
- `UserList`
- `ResourceList`
- `Login`
- `Register`

## Links

- **[View Written Tutorial](https://monsterbrain.github.io/angularhttptutorial/tutorial/)**
- **[View the Created Angular Site](https://monsterbrain.github.io/angularhttptutorial/)**

## Local Development

1. **Install Dependencies:**
   Run `npm install` to install all required packages.

2. **Development server:**
   Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

3. **Build:**
   Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

4. **Running unit tests:**
   Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Credits

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.
