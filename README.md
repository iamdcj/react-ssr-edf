# React SSR EDF

Project boilerplate intended for use with EDF SDLTridion powered React applications.

[Repository](https://github.com/iamdcj/react-ssr-edf)

### Features

The base application contains the following built-in features;

⚛️ Server Side Rendered React

<!-- 🔥 Hot Module Replacement (**TODO**) -->

🐳 [Docker](https://docs.docker.com/)

✂ [Code Splitting](https://github.com/gregberge/loadable-components)

🧪 Testing: 🃏 [Jest](https://jestjs.io/docs/en/getting-started.html) | 🔬 [Enzyme](https://enzymejs.github.io/enzyme/)

📕 [Storybook](https://storybook.js.org/)

💅🏻 [Emotion](https://emotion.sh/docs/introduction)

### Core Technologies

The base application is built with the following technologies:

- [React](https://github.com/facebook/react)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Express](https://expressjs.com/en/4x/api.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Webpack](https://webpack.js.org/guides/)

### Global State

This starter project does not prescribe a global state management solution. I've used [Redux](https://redux.js.org/) and [MobX](https://mobx.js.org/README.html) in the past, however the server-to-client store reconciliation could be achieved using the [Context API](https://reactjs.org/docs/context.html) and [Hooks](https://reactjs.org/docs/hooks-intro.html).

### Folder Structure

#### Source

- **src**:
  - **\_types**: contains the application's interfaces and types.
  - **\_management**: contains all global state management code.
  - **\_router**: contains all routing logic.
  - **server**: contains all server-side application components.
  - **client**: contains all client-side application components.
    - **assets**: contains the scss files, images, temporary files, etc.

#### Distributed

- **public**: contains build files for client-side usage.
- **server**: contains build files for server-side usage.

---

## Getting Started

The following sections will help you get the application up-and-running.

### Installation

1. Install Dependencies `yarn`.

2. Generate environment variables `yarn dotenvi -s <[local, development, production]>`

### Running the Application

Run application for _development_ or _production_:

```
yarn start
```

This command will start the application using the configuration defined in `.env`.

## Components

Please refer to following sections when developing components;

### Setup

All presentation components should respect the following convention upon creation:

- `PascalCased` directory, containing:
  - `index.[j|t]s` file which exports default from the chosen `.[j|t]sx` file.
  - One or more `.[j|t]sx` component files.

Example:

```
MyComponent/index.js
```

```
MyComponent/my-component.jsx
```

**Eventually the majority of the presentation components will be pulled from some hosted solution, allowing for a core set of shareable components which can be extended on a project-by-project basis**

### Testing

Something something jest. Something something enzyme.

### Best Practices

Please respect following conventions when creating components:

#### 'Null' Checks

_Always_ check for presence of data before referencing.

```
<h2>{title}</h2>
```

```
{ title && <h1>{title}</h1> }
```

Optional Chaining is available for use in the build, please **do the right thing**.

### Styling

The application is configured to utilise [styled-components](https://styled-components.com/).

---

#### Authors / Contributors

Please contact any of the following to propose changes/report issues, or just create a [pull request](https://github.com/iamdcj/react-ssr-edf)) containing changes/improvements.

- [David Christian Jones](https://github.com/iamdcj) - _Senior UI Engineer_
