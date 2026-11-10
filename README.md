# geodesAic

Marketing site for geodesAic — human strategy, AI speed.

Astro homepage inspired by [proton.me](https://proton.me/): light, airy layout, large serif headline, pill CTAs, and a bento capabilities grid. Brand colours come from the geodesAic mark (navy, aqua, gem green).

## Develop

```sh
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Live

[neil-watson-uk.github.io/geodesaic](https://neil-watson-uk.github.io/geodesaic/)

The live site is the `gh-pages` branch. Build it with `BASE_PATH=/geodesaic` before publishing that branch.

## Stack

- Astro
- Static HTML — intended for Cloudflare Pages / Netlify, not the art-shop VPS
- Email signup / campaigns stay with an ESP later (Loops, Kit, or Buttondown)
