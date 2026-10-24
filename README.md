# @x12i/storyflow usage example

Tell business stories as interactive diagrams. Template-driven: JSON in, React or SVG out. Works in React and Node.js.

This consuming application demonstrates **compile an authored review workflow into an svg diagram** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Render a JSON business story through the published diagram API.
- Produce an SVG representation for a report or a Node-side export.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/storyflow)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Rendered fixture

Run the example, then open its generated `preview.html` or `workflow.svg`. The checks establish static rendering or SVG export for the authored fixture. Browser effects, interactions, responsive layout and deployed service behavior are not covered by this check. The host fixture contains no real customer data.
