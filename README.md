[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# MobX example

## How to use

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```
## Notes
Decorator support is activated by adding a `.babelrc` file at the root of the project:

```json
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    "transform-decorators-legacy"
  ]
}
```
