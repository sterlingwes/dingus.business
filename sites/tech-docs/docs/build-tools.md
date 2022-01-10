# Build Tools

Most javascript written these days passes through a “compile step” with some of the tools listed below. You sacrifice some of the speed that comes with working directly with an interpreted language like Javascript, that on its own doesn’t require compilation to see results, in exchange for some new language features, type safety and portability on platforms and browsers that don’t support these transformations out of the box.

There are three main classes of javascript build tools in use today:

- **bundlers** like Webpack, Rollup, and Metro
- **transpilers** like Babel and Typescript
- and **hybrid** bundlers / transpilers like esbuild

We’ll focus on two prominent tools for cross-platform use: Babel & Typescript.
