# Tailwind OKLCH Example

Example of using a CSS accent variables for chroma and hue to generate Tailwind color pallettes in
OKLCH with modern color palettes (like P3, which most modern screens support).

If you project has a vivid brand color you need something like this. Support in Chrome, Edge and
Firefox is coming soon - but Safari already supports full gamut colors.

- https://slides.com/ai/oklch-css
- https://oklch.evilmartians.io/
- https://github.com/csstools/postcss-plugins

**Safari (P3 support)**

<img width="846" alt="image" src="https://user-images.githubusercontent.com/701/176175125-cf524714-48b5-4c60-8072-b95aa2f1c3ad.png">

**Firefox (fallback RGB)**

<img width="944" alt="image" src="https://user-images.githubusercontent.com/701/176175354-57435aec-86cd-4cd5-9a25-c2fe81264c5c.png">

## Caveats

Tailwind let's you append opacity like `text-accent-600/50` to get 50% opacity. Currently the color
syntaxes supported are `rgba` and `hsl` but not `oklch`. Because of this we can't yet take advantage
of the opacity color modifier syntax for our palette (see
https://tailwindcss.com/docs/customizing-colors#using-css-variables).

## License

[MIT](https://choosealicense.com/licenses/mit/)
