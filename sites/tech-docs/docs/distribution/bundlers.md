# Bundlers

Bundlers have one core use case: concatenating & minifying your project’s javascript files into one distributable JS file. Tools like Webpack have since expanded their feature set well beyond those two main uses cases to allow for things like:

- importing non-JS modules (like image assets or CSS) in javascript code (usually returning a path instead, or some identifier)
- allow for aliasing module imports to different file paths
- dead code path elimination to further optimize file size
- the list goes on...

For the React ecosystem, there’s two main bundlers to be aware of: [Webpack](https://webpack.js.org) for web & [Metro](https://facebook.github.io/metro/) for mobile / native. They each have very different feature sets & scope, but at their core they both:

- concatenate your JS files into one big file
- minify / optimize the output to reduce file size
- allow for configuring how your JS files are transformed before they’re concatenated (using a separate build tool like [Babel](https://www.notion.so/Babel-65b2f5777e134f4c8e2153b87cc1851b) )
- allow for changing how file import paths are resolved
- provide a plugin system to customize your output in other ways

To configure either tool, look for either a `webpack.config.js` or `metro.config.js` in the workspace you’re in.
