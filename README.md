# React + TypeScript + Vite

This repository is a template for creating a React application using TypeScript and Vite. It includes a basic setup with Hot Module Replacement (HMR) and some ESLint rules to help maintain code quality.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool that provides a modern development experience.
- **Bootstrap**: A popular CSS framework for building responsive, mobile-first sites.
- **React-Bootstrap**: Bootstrap components built with React.
- **FontAwesome**: A library of icons and social logos.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo-name
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Application

To start the development server with HMR:

```sh
npm run dev
```

or

```sh
yarn dev
```

### Building for Production

To create a production build:

```sh
npm run build
```

or

```sh
yarn build
```

### Linting

To run ESLint:

```sh
npm run lint
```

or

```sh
yarn lint
```

## Equipment Request Form

This application includes an Equipment Request Form where users can add, edit, and remove equipment items. The form includes fields for department name, request type, notes, and a list of equipment items with details such as name, quantity, unit, estimated price, and status.

### Adding Equipment Name Suggestions

The `EquipmentName` field in the form includes a datalist for suggesting equipment names. The suggestions are defined in the `equipmentNameSuggestions` array.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
