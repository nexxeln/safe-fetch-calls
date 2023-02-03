Safe and reliable `fetch` calls in TypeScript.

- [src/not-typesafe.ts](./src/not-typesafe.ts) shows the most common mistake people make when using `fetch` in TypeScript.
- [src/using-unknown.ts](./src/using-unknown.ts) shows how to use `unknown` to make the code safer.
- [src/streamlining-with-zod.ts](./src/streamlining-with-zod.ts) shows how to use [Zod](https://zod.dev) to easily parse the response and make the code 100% typesafe and reliable.

To run the files, use [esbuild-kit/tsx](https://github.com/esbuild-kit/tsx):

```bash
npx tsx src/not-typesafe.ts
npx tsx src/using-unknown.ts
npx tsx src/streamlining-with-zod.ts
```

If I'm doing something wrong, please let me know!