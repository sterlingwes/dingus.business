# Babel

A great way to see how Babel does code transformation (”transpilation”) is to use [Babel’s REPL](https://babeljs.io/repl). Try entering the code below in the lefthand pane to see the javascript it produces on the righthand side:

```jsx
const myObject = {
  definitelyAnObject: {},
  maybeAnObject: undefined,
};

// example of the "optional chaining" language feature
const maybeValue = myObject.maybeAnObject?.value;
```

[Permalink to REPL with this code & preset config](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBAtgTwPICMBWBTYsC8MDeAUDDACYYBmAlmFVBgDYICCYqm2AXAQL4A0xeAEMEKDK3ZYo3AK5hy1MBlKEehQqEiw4IsQDUhDGRhh5Ek7ADodo8W3RSA_JYBuh44SA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.16.7&externalPlugins=&assumptions=%7B%7D).

The code that’s produced by adding this small `?` before we try to read `value` might seem convoluted but it’s important to see why it’s needed for a language like Javascript. We often need to write defensive code to avoid errors in dealing with dynamic data structures and changing data types at runtime. This small change enables us to avoid writing extra conditional checks before trying to retrieve the value we want. It’s just one of the newer language features that babel enables us to use right away, before browser javascript engines support them.

You can use a tool like [caniuse](https://caniuse.com/?search=optional%20chaining) and [node.green](https://node.green/#ES2020-features-optional-chaining-operator-----) to see which engine versions support which features natively, to determine whether you need Babel to do specific translations.
