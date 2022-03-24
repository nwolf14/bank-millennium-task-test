# bank-millennium-task

## Table of Contents

- [Installation](#Installation)
- [Launch](#Launch)
- [Launch Cypress Browser](#Launch-Cypress-Browser)
- [Launch Cypress Cli Single Test](#Launch-Cypress-Cli-Single-Test)
- [Launch Unit Tests](#Launch-Unit-Tests)
- [Instruction](#Instruction)
- [Libraries](#Libraries)

## Installation

1. Node_Modules

```
npm install or npm i
```

2. Commit lint required global for commit

```
npm install -g @commitlint/cli @commitlint/config-conventional
```

## Launch

```
npm start
```

## Launch Cypress Browser

```
npm run cypress
```

## Launch Cypress Cli Single Test

```
npm run cypress:cli -- --spec=cypress/test/[path]/[file].spec.ts
```

## Launch Unit Tests

```
npm run jest
```

## Instruction

Before commit are call actions:

- branch name lint
- style lint
- eslint ts
- eslint tsx
- prettier
- unit test
- e2e test
- commit syntax

If you need skip tests, after the commit message you have to put command:

```
git commit -m "<message>" --no-verify
```

## Libraries

- react - https://pl.reactjs.org/docs/getting-started.html
- sass - https://sass-lang.com/
- lodash - https://lodash.com/docs/4.17.15
- redux - https://redux.js.org/
- react-testing-library - https://testing-library.com/docs/react-testing-library/intro/
- cypress - https://www.cypress.io/
- prettier - https://prettier.io/
- eslint - https://eslint.org/
- husky - https://github.com/typicode/husky
- commit-lint - https://commitlint.js.org/#/
- branch-lint - https://github.com/barzik/branch-name-lint
- style-lint - https://stylelint.io/
- redux-saga - https://redux-saga.js.org/
