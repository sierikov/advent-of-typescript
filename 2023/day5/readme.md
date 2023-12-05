# Organize Santa's List

<..redacted..>

Normally the elves get lists like this

```typescript
const badList = ["Tommy", "Trash", "Queen Blattaria", /* ... many more ... */];
const goodList = ["Jon", "David", "Captain Spectacular", /* ... many more ... */];
```

And they copy-pasta all the values into a TypeScript type to provide to Santa like this

```typescript
type SantasList = [
  "Tommy", "Trash", "Queen Blattaria", /* ... many more ... */
  "Jon", "David", "Captain Spectacular", /* ... many more ... */
];
```

But there's a problem.. There's one elf on the team, Frymagen, that constantly reminds the others how incredible his Vim skills are. So he has always done it in years past. However this year, Frymagen got one of those MacBook Pros without the escape key and his Vim speed is drastically reduced. We need to find a better way to get Santa his list.

Let's implement SantasList such that it can be passed the types for the badList and goodList and it will return a TypeScript tuple with the values of both lists combined.

---
[Solutions](./solution.ts) and [Tests](./solution.test.ts).

---
[Main page](../../readme.md). [Next day](../day6/readme.md) or
[Previous day](../day4/readme.md).
