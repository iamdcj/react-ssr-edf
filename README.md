# React SSR EDF

SSR React application boilerplate, largely based on a projet build for DTUS, but updated and refactored to be used on a DTUK project

### Core Technologies

- built with the following technologies:
  - React
  - React Router
  - Express

### Folder Structure

#### Source

- **src**:
  - **\_management**: contains all global state managementcode
  - **\_router**: contains all routing logic
  - **server**: contains all server-side application components.
  - **client**: contains all client-side application components and assets.
    - **assets**: contains the scss files, images, temporary files, etc.

#### Distributed

- **public**: contains build files for client-side usage
- **server**: contains build files for server-side usage

---

## Getting Started

The following sections will help you get up-and-running with the solution.

### Installation

1. Install Dependencies `yarn` or `npm install`

2. Set environment `yarn dotenvi -s <[local, development, production]>`

### Running the Application

#### Development

Execute application for Development purposes;

```
npm run start:dev
```

This will start the application using the development configuration (non-optimised).

Port is set to `3000`.

#### Production

Execute application for Production purposes;

```
npm run start:prod
```

This will start the application using optimised production configuration.

## Components

Please refer to following sections when developing components.

### Setup

All presentation components should respect the following convention upon creation:

- PascalCased directory, containing:
  - `index.[j|t]s` file which exports default from the chosen `.[j|t]sx` file.
  - One or more `.[j|t]sx` component files.

Example:

```
MyComponent/index.js
```

```
MyComponent/my-component.jsx
```

The usage of the index file is in place to better facilitate unit tests, and [bitsrc](https://bitsrc.io) integration. (see [Todo](todo.md))

All other 'component' files and directories should use lisp-casing.

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

##### BEM metholdology.

The application utilises Yandex's BEM methodology throughout the JSX. Please try to respect the following:

- Only 'BEM' if required.

- Refrain from nesting elments, i.e. [No elements of elements](https://en.bem.info/methodology/faq/#why-not-create-elements-of-elements-block__elem1__elem2)

### Styling

The application utilises styled components.

---

##### Authors

Please contact any of the following to propose changes/report issues;
**David Christian Jones** - _UI Engineer_
