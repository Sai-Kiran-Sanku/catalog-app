# CatalogHub

Dynamic multi-category product catalog built for a Frontend Developer assignment using Next.js.

Live Demo: https://multicategory-catalog.netlify.app/

## Overview

This project renders a responsive catalog from a shared JSON dataset. The home page groups products by category and shows item previews, while each product links to a dedicated detail page that dynamically renders all category-specific attributes from `itemprops`.

## Features

- Multi-category home screen with clearly separated sections
- Category overview cards with preview images and item counts
- Responsive product grid for mobile, tablet, and desktop
- Dynamic item detail pages using Next.js App Router
- Attribute rendering driven directly from JSON `itemprops`
- Smooth in-page navigation and polished hover/focus states

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Data Format

The app uses the provided JSON structure:

```json
{
  "itemname": "Product Name",
  "category": "Category Name",
  "image": "https://example.com/image.jpg",
  "itemprops": [
    { "label": "Property Name", "value": "Property Value" }
  ]
}
```

Main dataset:

- `app/data/data.json`

## Project Structure

```text
app/
  components/
    CategoryCard.tsx
    Header.tsx
    ItemCard.tsx
    PropertyRow.tsx
  data/
    data.json
  item/[id]/
    page.tsx
  globals.css
  layout.tsx
  page.tsx
```

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

## Deployment

This app is compatible with standard Next.js hosting.

- Build command: `npm run build`
- Start command: `npm start`

For Netlify, deploy it as a Next.js application rather than a static export.

## Assignment Coverage

- Home screen displays all categories
- Each category shows item previews
- Users can navigate to a dedicated item detail page
- Detail page shows image, item name, category, and all dynamic properties
- Layout is responsive across screen sizes
- Data is rendered from the provided JSON format
