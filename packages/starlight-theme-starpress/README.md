<h1 align="center">
  Starlight Theme Starpress
</h1>

![Starlight Starpress theme preview](https://raw.githubusercontent.com/louisescher/starpress/refs/heads/main/assets/preview.png)

## Usage

1. Install the theme package to your project with your preferred package manager:
```sh
npm install starlight-theme-starpress
pnpm add starlight-theme-starpress
yarn add starlight-theme-starpress
```

2. Add the theme to your Starlight config.

```ts
import starpress from "starlight-theme-starpress";

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        starpress()
      ]
    })
  ]
})
```
