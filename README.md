# React SSR EDF

## Overview

Project boilerplate intended for use with EDF SDLTridion powered React applications,

### Features

The base application contains the following built-in features;

✅ Server Side Rendered

🔥 Hot Module Reloaded (Universal)

🐳 [Docker](https://docs.docker.com/)

🃏 [Unit Testing](https://jestjs.io/docs/en/getting-started.html)

📕 [Storybook](https://storybook.js.org/)

💅🏻 [Styled Components](https://styled-components.com/)

### Core Technologies

The base application is built with the following technologies:

- [React](https://github.com/facebook/react)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Express](https://expressjs.com/en/4x/api.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)

### Folder Structure

#### Source

- **src**:
  - **\_type**: contains the application's interfaces and types.
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

1. Install Dependencies `yarn` or `npm install`

2. Generate environment variables `[yarn | npm] dotenvi -s <[local, development, production]>`

### Running the Application

Run application for _development_ or _production_:

```
npm run start
```

This will start the application using the configuration defined in `.env`.

## Components

Please refer to following sections when developing components.

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

The usage of the index file is in place to better facilitate unit tests, and [bitsrc](https://bitsrc.io) integration.

All other component files and directories should use `lisp-casing`.

### Testing

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

### State

Please use [hooks](https://reactjs.org/docs/hooks-reference.html) where possible; I'm not against using `class`es with lifecycle methods, but most component state can easily be sorted using hooks.

### Markup Conventions

Please ensure semantic markup is used throughout when developing components.

### Styling

The application is configured to utilise [styled-components](https://styled-components.com/).

---

##### Authors / Contributors

Please contact any of the following to propose changes/report issues;

- [David Christian Jones](https://github.com/iamdcj) _Senior UI Engineer_
