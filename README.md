# React Server Side Rendering Boilerplate ⚛️

Tools like [create-react-app](https://github.com/facebook/create-react-app) have made setting up client-side React apps trivial, but transitioning to SSR is still kind of a pain in the ass. [Next.js](https://nextjs.org) is a powerhouse, and the [Razzle](https://github.com/jaredpalmer/razzle) tool looks like an absolute beast, but sometimes you just want to see the whole enchilada running your app. This is a sample setup for fully featured, server-rendered React applications.

**What's included:**

- Server-side rendering with code splitting (via the excellent [React Loadable](https://github.com/thejameskyle/react-loadable) package)
- Server-side data fetching and client-side hydration
- React Router
- Conditionally load pollyfills -- only ship bloat to outdated browsers
- React Helmet for dynamic manipulation of the document `<head />`
- Dev server with hot reloading styles
- Jest and react-testing-library ready to test the crap out of some stuff
- CSS Modules, Sass, and autoprefixer
- Run-time environment variables
- Node.js clusters for improved performance under load (in production)
- Prettier and ESLint run on commit

## Initial setup

- `npm install`

## Development

- `npm start`
  - Start the dev server at [http://localhost:3000](http://localhost:3000)
- `npm test`
  - Start `jest` in watch mode

## Production

- `npm run build && npm run start:prod`
  - Bundle the JS and fire up the Express server for production