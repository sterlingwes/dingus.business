# Typescript

Typescript is an evolution of javascript that allows for the kind of compile-time type safety that developers are used to with existing compiled languages. It allows you to catch many common classes of error before you even run your code. It has the side benefit of making code more approachable as a form of documentation and enabling an ecosystem of developer tooling like better code auto-completion.

Typescript still allows for flexibility in how strictly you type check your code so that you can still get the benefit of moving swiftly with the dynamism of plain javascript (`any` types or error suppressions). Finding that balance is the same exercise as determining what’s the right amount of test coverage for your code that limits the risk of things breaking.

Here’s a simple example of how Typescript sits on top of Javascript:

```jsx
const add = (a, b) => {
  return a + b;
};

add("foo", "bar"); // => 'foobar'

// with the following typescript, the above call would result
// in an error before the code is even run:
//
// Argument of type 'string' is not assignable to parameter of type 'number'.
//

const add = (a: number, b: number) => {
  return a + b;
};
```

Read more about Typescript at [http://typescriptlang.org](http://typescriptlang.org/).

Some highlights from the extensive documentation that’s worth reading:

- [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Type refinement](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) (specifically [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates))
