# Design System: Digital Moleskine

## Core Philosophy
- **Digital Notebook**: Captures the feeling of a physical Moleskine with a dot grid.
- **Minimalist & Modern**: Avoids skeuomorphic heavy textures (like leather binding or realistic paper edges). detailed paper textures are replaced by solid colors and CSS patterns.
- **Focus**: Content-first, like writing in a fresh notebook.

## Color Palette

### Paper (Background)
- **Base**: `#F9F9F2` (Creamy off-white, Moleskine paper color)
- **Dot Grid**: `#E0E0D5` (Subtle grey/warm tone for dots)

### Ink (Typography)
- **Primary Text**: `#2D2D2D` (Soft charcoal, not harsh black)
- **Secondary Text**: `#666666` (Graphite grey)
- **Links/Accents**: `#E85F3A` (Burnt orange/Terra cotta - classic notebook accent) or `#3B8EA5` (Teal ink). Let's stick to a **classic orange** for the Moleskine elastic brand vibe, or a **deep blue** ink.

## Typography

### Headings
- **Font**: `Inter` or `HK Grotesk`. Clean, crisp, modern sans-serif.
- **Weight**: Bold / Extra Bold.
- **Style**: Rational, organized.

### Body
- **Font**: `Inter`, `Roboto`, or System Sans.
- **Readability**: High.

### Code
- **Font**: `JetBrains Mono` or `Fira Code`.
- **Theme**: Minimal light theme (e.g., GitHub Light or similar) to match the paper.

## UI Elements

### The Dot Grid
- Implemented via CSS `radial-gradient`.
- Size: ~2px dots.
- Spacing: ~20px - 24px grid.
- Behavior: Full body background.

### Layout Container
- **Card/Page**: The main content area could explicitly look like a page, or the whole screen is the page.
- **Recommendation**: The whole screen is the "page". The content sits directly on the grid.

## Spacing & Layout
- **Margins**: Generous.
- **Grid Alignment**: Typography should ideally respect a vertical rhythm (hard to enforce strictly in web, but aim for multiples of 4px/8px).

## Interactive States
- **Hovers**: Sharp transitions.
- **Links**: Underline (drawn like a pen stroke or simple solid line).
