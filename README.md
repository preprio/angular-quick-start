# angular-quick-start
The Angular quick start project launches a blog app with content from Prepr.

[Stackblitz demo](https://stackblitz.com/edit/angular-quick-start)

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

## Update your graphql URI
To update your URI go to src/app/graphql.module.ts and replace the value of the uri with your corresponding graphql uri.
It should look something like this:
```
const uri = 'https://graphql.prepr.io/7f05e9e2f17f1b3d5e08dab3a565acbea8b87745473917e159f70ae1cf0334b9'; // <-- add the URL of the GraphQL server here
```

## Development Server

Start the development server on http://localhost:4200

```bash
npm start
```

## Production

Build the application for production:

```bash
npm run build
```

Check out the [deployment documentation](https://angular.io/guide/deployment) for more information.

## The end result

![blog site end result](https://assets-site.prepr.io//5oz8w28ybxje-screenshot-2023-05-10-at-111353.png)

