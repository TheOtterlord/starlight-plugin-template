# Starter Kit: Starlight Plugin

This is a template for a Starlight plugin. Use this template for writing plugins to use in multiple projects or publish to NPM.

```sh
npm create astro@latest -- --template TheOtterlord/starlight-plugin-template
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── index.ts
├── virtual.d.ts
├── tsconfig.json
├── package.json
```

The `index.ts` file is the "entry point" for your plugin. Export your plugin in `index.ts` to make them importable from your package.

`virtual.d.ts` exposes types for internal Starlight components. This helps with type support when overriding builtin components.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                                                                                                                                                                                                           |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm link`    | Registers this package locally. Run `npm link my-integration` in a Starlight project to install your integration                                                                                                                 |
| `npm publish` | [Publishes](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages#publishing-unscoped-public-packages) this package to NPM. Requires you to be [logged in](https://docs.npmjs.com/cli/v8/commands/npm-adduser) |
