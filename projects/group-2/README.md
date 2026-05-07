# The Next Frontier of AI Isn't a Model. It's an Orbit.

An interactive, scroll-driven op-ed on the geopolitics of AI data centres in space.

The reader does not read an article. They **ascend** — from a launch pad through low Earth orbit, past geostationary, and out into deep space. Each altitude band is one talking point. The background, sky, stars, Earth curvature, and rocket position all respond to a single scroll-progress value.

## Course hub (Sciences Po)

If you use this repo to develop but submit to [**geopolitics-ai-scpo-hub**](https://github.com/AABK6/geopolitics-ai-scpo-hub) as **Group 2**, keep a copy under `projects/group-2/` (entry file `projects/group-2/index.html`). From the monorepo root:

```bash
rsync -a --delete --exclude='.DS_Store' space-op-ed/ projects/group-2/
```

Then follow **`projects/group-2/README.md`** for fork → PR instructions (change **only** `projects/group-2/` in the hub).

## What this folder is

A fully self-contained static site. No build step, no bundler, no npm. Double-click `index.html` or serve the folder with any static server and it works.

## Quick start

```bash
cd space-op-ed
python3 -m http.server 8080
# open http://localhost:8080
```

Or use any of:

```bash
npx serve .
php -S localhost:8080
```

It also works by opening `index.html` directly in a modern browser (the JS uses ES modules, which require `http://` or `https://` on some browsers — if the page is blank when opened via `file://`, use one of the server commands above).

## Narrative map

| Altitude | Scene | Talking point |
| --- | --- | --- |
| 0 km | Liftoff | Hook and thesis |
| 12 km | Why Space. Why Now. | The case for orbital data centres |
| 500 km (LEO) | Actors and Strategy | US, China, EU, private sector |
| 36,000 km (GEO) | Governance Vacuum | Treaty ring fractures into legal gaps |
| Beyond | If This Plays Out | Four futures + open questions |

## File layout

```
space-op-ed/
  index.html              # single-page structure + inline SVGs
  styles/
    main.css              # design tokens, typography, shared UI
    stage.css             # cosmic stage + rocket + Earth + orbits
    scenes.css            # per-scene layout
  scripts/
    main.js               # entry: copy binding + boot
    stage.js              # sky, stars, Earth, rocket — all driven by progress
    scenes/
      liftoff.js
      whyNow.js
      actors.js
      governance.js
      futures.js
    util/
      lerp.js             # clamp, lerp, smoothstep, colour ramps
      scroll.js           # scroll engine → single progress value
      reducedMotion.js    # prefers-reduced-motion detector
  content/
    copy.js               # ALL editable text lives here
    sources.md            # citations + TK markers
  README.md
  LICENSE
  .gitignore
```

## Editing content

All op-ed copy lives in **`content/copy.js`**. It is a plain JavaScript object — non-coders can edit any string safely. The structure mirrors the narrative:

- `meta` — title, author, dateline
- `liftoff` — hero title, subtitle, scroll hint
- `whyNow` — four pillars and a counter-panel
- `actors` — four actor cards (code, name, stance, projects, wants)
- `governance` — treaty list, gap cards, closer
- `futures` — four scenarios, open questions, closing lines

Save the file, refresh the browser. That's it.

## Adding or reordering scenes

Each scene in `index.html` has a `data-scene` id and a `data-range="a,b"` attribute (positions along the 0 → 1 scroll timeline). To add a new scene:

1. Add a new `<section data-scene="..." data-range="a,b">` in `index.html`.
2. Adjust the other scenes' `data-range` values so they still sum to `[0, 1]`.
3. Add a new `content.xyz` block in `copy.js`.
4. Create `scripts/scenes/xyz.js` exporting `createXyzScene(el)`.
5. Register it in `scripts/main.js` under `sceneDefs`.

## Accessibility

- Full `prefers-reduced-motion` support — the animated journey collapses to a plain document.
- A **Skip to plain-text version** link sits at the top for keyboard users and screen readers.
- All copy lives in real DOM (not canvas), so it is selectable, searchable, and indexable.
- Colour contrast meets WCAG AA against the darkest background state.

## Performance

- No images. Stars are drawn on a canvas. The rocket, Earth, and orbits are inline SVG.
- Zero external JS dependencies. One external font family loaded from Google Fonts (with a system-font fallback if it fails).
- Target page weight: **< 400 KB** (gzipped) excluding fonts.
- Scroll handler uses `requestAnimationFrame` throttling; the stage redraws only when progress changes by > 0.05 %.

## Moving this folder to a new GitHub repo

The folder is a self-contained static site. To publish it on its own:

```bash
# From this repo's root:
cp -R space-op-ed /tmp/ai-in-space-op-ed
cd /tmp/ai-in-space-op-ed

git init
git add .
git commit -m "Initial commit: interactive AI-in-space op-ed"
git branch -M main

# Point at your new GitHub repo (create it first on github.com):
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin main
```

### Hosting

- **GitHub Pages** — enable in repo settings → Pages → Deploy from branch `main` → root. Site goes live at `https://<you>.github.io/<repo>/`.
- **Vercel / Netlify** — connect the repo, accept all defaults (static site, no build command). Deploy.
- **Any static host** — `index.html` is the entry point; everything else is a relative path.

No environment variables, no secrets, no build step to configure.

## Browser support

Tested for layout and motion fidelity on the latest Chrome, Safari, and Firefox. Requires a browser that supports ES modules and CSS custom properties (i.e. anything shipped since mid-2019).

## Licence

MIT. See `LICENSE`.
