# Async/Await Support

Async/Await syntax is support via Typescript transpilation. The Arty stack only supports ES5, buy default. To enable Async/Await, ensure that your `tsconfig.json` file includes a `lib` key within the `compilerOptions` field and add either `"ES2015"` or `"ES2015.Promise"` to the array of options for full ES2015 or only Promise support, respectively.

```js
{
  "compilerOptions": {
    "target": "es5",
    "allowJs": true,
    "skipLibCheck": false,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "lib": ["DOM", "ES5", "ScriptHost", "ES2015.Promise"] // <- Add option here
  },
  "include": ["src"]
}
```
