# smarpy

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smartupcorp/smarpy/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@smartupcorp/smarpy)](https://www.npmjs.com/package/@smartupcorp/smarpy)
[![npm downloads](https://img.shields.io/npm/dm/@smartupcorp/smarpy)](https://www.npmjs.com/package/@smartupcorp/smarpy)

[![NPM](https://nodei.co/npm/@smartupcorp/smarpy.png)](https://nodei.co/npm/@smartupcorp/smarpy/)

## Overview

smarpy is an open-source web design sass library.

It uses `oklch()` to declare color palette.

If you want to use in React Project, you can use [react-smarpy](https://github.com/smartupcorp/react-smarpy).

## Installation

### Use in Sass

```node
npm install @smartupcorp/smarpy
```

### Use in CSS

#### From CDN

```html
<link
  rel="stylesheet"
  type="text/css"
  media="all"
  href="https://unpkg.com/@smartupcorp/smarpy/dist/css/smarpy.min.css"
/>
```

```html
<link
  rel="stylesheet"
  type="text/css"
  media="all"
  href="https://unpkg.com/@smartupcorp/smarpy/dist/css/smarpy-utilities.min.css"
/>
```

## Basic Concepts

### Colors

All color definitions are defined using CSS variables.

#### Primitive Colors

`smarpy` offers primitive colors in the following hues: `gray`, `red`, `coral`, `orange`, `yellow`, `lime`, `green`, `cyan`, `blue`, `violet`, and `magenta`.

##### Hue

The following hues are set by default, but they can be overridden.

```scss
  --smarpy-color-hue-gray: 274;
  --smarpy-color-hue-red: 0;
  --smarpy-color-hue-coral: 24;
  --smarpy-color-hue-orange: 54;
  --smarpy-color-hue-yellow: 94;
  --smarpy-color-hue-lime: 114;
  --smarpy-color-hue-green: 134;
  --smarpy-color-hue-cyan: 214;
  --smarpy-color-hue-blue: 274;
  --smarpy-color-hue-violet: 294;
  --smarpy-color-hue-magenta: 324;
```

##### Lightness

Each color has a range of gradations from 50 to 950.

Each gradient is assigned using CSS variables.

The following gradations are set by default, but they can be overridden.

```scss
  --smarpy-color-lightness-050: 24%;
  --smarpy-color-lightness-100: 28%;
  --smarpy-color-lightness-150: 32%;
  --smarpy-color-lightness-200: 36%;
  --smarpy-color-lightness-250: 40%;
  --smarpy-color-lightness-300: 44%;
  --smarpy-color-lightness-350: 48%;
  --smarpy-color-lightness-400: 52%;
  --smarpy-color-lightness-450: 56%;
  --smarpy-color-lightness-500: 60%;
  --smarpy-color-lightness-550: 64%;
  --smarpy-color-lightness-600: 68%;
  --smarpy-color-lightness-650: 72%;
  --smarpy-color-lightness-700: 76%;
  --smarpy-color-lightness-750: 80%;
  --smarpy-color-lightness-800: 84%;
  --smarpy-color-lightness-850: 88%;
  --smarpy-color-lightness-900: 92%;
  --smarpy-color-lightness-950: 96%;
```

##### Chroma

colors are defined as either gray or colorful.

smarpy uses oklch, the chroma values ​​are fixed to gray and colorful by default.

Alternatively, you can define colorful chroma values ​​for each gradient.

```scss
  --smarpy-color-chroma-gray: 0.04;
  --smarpy-color-chroma-colorful-050: 0.12;
  --smarpy-color-chroma-colorful-100: 0.12;
  --smarpy-color-chroma-colorful-150: 0.12;
  ...
  --smarpy-color-chroma-colorful-850: 0.12;
  --smarpy-color-chroma-colorful-900: 0.12;
  --smarpy-color-chroma-colorful-950: 0.12;
```

##### Gray

e.g.
```scss
  // gray
  --smarpy-color-gray-050: oklch(var(--smarpy-color-lightness-050) var(--smarpy-color-chroma-gray) var(--smarpy-color-hue-gray));
  --smarpy-color-gray-100: oklch(var(--smarpy-color-lightness-100) var(--smarpy-color-chroma-gray) var(--smarpy-color-hue-gray));
  --smarpy-color-gray-150: oklch(var(--smarpy-color-lightness-150) var(--smarpy-color-chroma-gray) var(--smarpy-color-hue-gray));
  ...
  --smarpy-color-gray-850: oklch(var(--smarpy-color-lightness-850) var(--smarpy-color-chroma-gray) var(--smarpy-color-hue-gray));
  --smarpy-color-gray-900: oklch(var(--smarpy-color-lightness-900) var(--smarpy-color-chroma-gray) var(--smarpy-color-hue-gray));
  --smarpy-color-gray-950: oklch(var(--smarpy-color-lightness-950) var(--smarpy-color-chroma-gray) var(--smarpy-color-hue-gray));
```

##### Colorful

e.g.
```scss
  // red
  --smarpy-color-red-050: oklch(var(--smarpy-color-lightness-050) var(--smarpy-color-chroma-colorful-050) var(--smarpy-color-hue-red));
  --smarpy-color-red-100: oklch(var(--smarpy-color-lightness-100) var(--smarpy-color-chroma-colorful-100) var(--smarpy-color-hue-red));
  --smarpy-color-red-150: oklch(var(--smarpy-color-lightness-150) var(--smarpy-color-chroma-colorful-150) var(--smarpy-color-hue-red));
  ...
  --smarpy-color-red-850: oklch(var(--smarpy-color-lightness-850) var(--smarpy-color-chroma-colorful-850) var(--smarpy-color-hue-red));
  --smarpy-color-red-900: oklch(var(--smarpy-color-lightness-900) var(--smarpy-color-chroma-colorful-900) var(--smarpy-color-hue-red));
  --smarpy-color-red-950: oklch(var(--smarpy-color-lightness-950) var(--smarpy-color-chroma-colorful-950) var(--smarpy-color-hue-red));
```

#### Semantic Colors

Semantic colors include `base`, `main`, `accent`, `info`, `success`, `warning`, and `danger`, and each has a `primary` (standard), a `secondary` (slightly lighter than the standard), and a `tertiary` (slightly darker than the standard).

```scss
/// @type List
/// @group variables
$semanticColorNames: (
  // "base",
  "base-primary",
  "base-secondary",
  "base-tertiary",
  // "main",
  "main-primary",
  "main-secondary",
  "main-tertiary",
  // "accent",
  "accent-primary",
  "accent-secondary",
  "accent-tertiary",
  // "info",
  "info-primary",
  "info-secondary",
  "info-tertiary",
  // "success",
  "success-primary",
  "success-secondary",
  "success-tertiary",
  // "warning",
  "warning-primary",
  "warning-secondary",
  "warning-tertiary",
  // "danger",
  "danger-primary",
  "danger-secondary",
  "danger-tertiary"
) !default;
```
