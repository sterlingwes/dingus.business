# Node Modules (NPM Packages)

Node.js & NPM popularized the now ubiquitous presence of `node_modules/` folders in nearly every javascript app and library. It’s the place you’ll find all the javascript your app or library depends on, and it’s the main reason for how rapidly today’s javascript ecosystem has grown and evolved.

Most of these dependencies come from the [central NPM repository](http://npmjs.com). There are two prominent CLI tools for interacting with node_modules and managing dependencies: NPM & Yarn, which both work in similar ways. Yarn is more prominent in the Facebook-backed ecosystems (like React & React Native).

## The Manifest (package.json)

Every javascript workspace that uses NPM packages, and the NPM packages themselves, have a manifest file called `package.json` in the root of the folder, which has the following key fields:

- those that are important for modules you’re publishing for use by others (ie: on NPM):
  - **name**, which will be the name of the package on NPM
  - **version**, which follows semver: `major.minor.patch` version numbers
  - **main**, the path to the “entry point” JS module for your package
- those you’ll use regardless:
  - **dependencies**, which is an object of dependencies on other modules that your app needs at runtime
  - **devDependencies**, which is an object of dependencies used to build, test, or otherwise work with your code locally but that doesn’t have code that runs when your code runs

Each dependency in one of the objects above will have a version range that dictates which versions of your dependencies you want:

- `^1.0.0` says you’ll accept any version with the same major number (ie: 1.2.3 is OK, 2.0.1 is not) - `1.x` is a shorthand for this
- `^0.60.0` says you’ll accept any version with the same minor number (ie: 0.60.1 is OK, 0.59.0 and 1.0.0 are not)
- `1.0.0` says you want _exactly_ this version and none other

NPM has a great tool for seeing this visually: [https://semver.npmjs.com](https://semver.npmjs.com/).

## The Lock File (yarn.lock / package-lock.json)

The version range indications in the package.json informs how the lock file is generated, which is an important file in your javascript workspace. It’s the ultimate source of truth for what you ship and the dependency versions that are in use at runtime. It should be committed to source control and deleted or regenerated with careful consideration for the impact of version shifts in the code you ship.

## A Typical Package Structure

If you were to `cd` into any one package under node_modules, you might see something like the following:

```bash
node_modules/
	@some-org/
		some-package/
			dist/
				index.js
				index.d.ts
			src/
				index.js
			package.json
	no-namespace-package/
		lib/
			index.js
```

For the `@some-org/some-package` NPM package above, you’ll see two folders: dist and src. It’s common for a package that has a dist/ folder to omit the src/ one from what they publish, but not always. In this package’s manifest (package.json), there’d be a `main` entry that likely points to `dist/index.js` . Which means, that’s the code that gets run by your code when you import from this package (`import {someExport} from ‘@some-org/some-package’`). The `index.d.ts` file indicates that this package supports typescript types, and that file holds the types for the library’s exports. The src/ folder in this case is in the package you install, but what’s inside has no bearing on the code you ship.

For the `no-namespace-package` you’ll see only one folder. This might indicate that the code in `lib/index.js` has not been transformed to the lowest common denominator (ie: ES5 / ES2015 javascript), but there’s no guarantee of that since the `dist/` convention for transpiled code is loosely followed. Depending on which JS engines you plan to have your code run in, you may have to tweak your own build settings to ensure this package conforms to the version of javascript you intend to ship (based on the language features in your code that you need to support). That’s typically the realm of bundlers or test frameworks to manage, though they’d use a transform tool like Babel to do so.
