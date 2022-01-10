# Modules

The two popular module specifications are Common.JS and ES6 modules.

Common.JS first came into prominence with Node.js and allows for a module structure that’s more dynamic & flexible. It’s slowly giving way to ES6 modules which encourage static declarations and that enable more build optimizations & dev tool features.

## Common.js Example

```jsx
// ----------------------------------
// moduleA.js

const add = (a, b) => a + b;

module.exports = { add };

// ----------------------------------
// moduleB.js

const { add } = require("./moduleA");
const num = add(1, 2);
```

In the above example, moduleB depends on moduleA.

## ES6 Example

The equivalent example for ES6:

```jsx
// ----------------------------------
// moduleA.js

export const add = (a, b) => a + b;

// ----------------------------------
// moduleB.js

import { add } from "./moduleA";
const num = add(1, 2);
```

This example demonstrates named exports. ES6 modules can also use default exports or you can import all named exports as one object with `import * as ...`. When in doubt, use named exports, they discourage renaming when importing.

[Read more about javascript modules on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
