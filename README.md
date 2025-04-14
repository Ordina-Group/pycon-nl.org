<img align="right" width="250" alt="Pycon-nl.org logo" src="./static/marketing/socials.png">

# Pycon-nl.org

Here's the code of the website [pycon-nl.org](https://pycon-nl.org/).

## Tech stack

- [SvelteKit](https://kit.svelte.dev/) & [Svelte](https://svelte.dev/)
  - Using the [SvelteKit Static Adapter](https://kit.svelte.dev/docs/adapter-static).
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- Hosted on Github Pages
- [Prettier](https://prettier.io/) for code formatting

## Running

This should do it all:

```bash
npm i
npm run dev
```

### Releasing

Releasing is as simple as pushing/merging to main. For more information about how older versions of the site are injected, see https://github.com/code-star/event-ops-template.
