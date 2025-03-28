# Angular Quick Start
The Angular quick start project launches a blog app with content from Prepr.

Look at the [Angular Quick start guide](https://docs.prepr.io/connecting-front-end-apps/angular-quick-start-guide) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Update the environment file
Go to the **environments** folder in the project and open the **environments.ts** file to replace `YOUR_PREPR_GRAPHQL_URL` with the *API URL* of the Prepr *GraphQL Preview* access token from your demo environment.

![preview API URL](https://assets-site.prepr.io//35k5a4g45wuy-preview-access-token.png)

## Development Server

Start the development server on http://localhost:4200

```bash
ng serve
```

## Production

To build the project run:

```bash
ng build
```
This will compile your project and store the build artifacts in the `dist/` directory.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## The end result

![blog site end result](https://assets-site.prepr.io/fp1a9v4zuar//angular-blog-post-site-end-result.png)
