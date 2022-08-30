# codewars-playground-ts

## About

My personal playground to have some fun in [Codewars](https://www.codewars.com/).

This is a Node.js environment to write *Katas* in *TypeScript* with a comfy VSCode setup.

We have:

- a containerized setup via `.devcontainer`.
- [Prettier](https://prettier.io) setup to format our code.
- Tests using the same libs — [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) —  used in [Codewars](https://www.codewars.com/).
- *TypeScript* setup that automatically re-runs our tests when code files change.

## Using

1. Run `npm start`.
1. Edit your `solution.ts` and `solution-test.ts` inside a directory in `./katas/` (following the sample in `./katas/draft`).

### Old Katas

All *Katas* did previously should be archived in `./katas/archive/`. Files inside `./katas/archive/` are ignored by `git`.  
To run tests for archived *Katas*, do: `npm run start-archive`.
