# Image Components Guide

This guide explains how to use the new image components for MDX articles with captions and flexible placement options.

## Available Components

### 1. ImageWithCaption

A flexible component for single images with captions and various placement options.

```mdx
import ImageWithCaption from '../../components/ImageWithCaption.astro';

<ImageWithCaption 
  src="/path/to/image.jpg"
  alt="Description of image"
  caption="Your caption text here"
  placement="center"
  size="medium"
/>
```

**Props:**
- `src` (required): Image URL
- `alt` (required): Alt text for accessibility
- `caption` (optional): Caption text
- `placement`: `"left" | "right" | "center" | "full"` (default: "center")
- `size`: `"small" | "medium" | "large"` (default: "medium")
- `width` (optional): Custom width
- `height` (optional): Custom height

**Placement Options:**
- `center`: Centered image (default)
- `left`: Image on left, text flows around on right
- `right`: Image on right, text flows around on left  
- `full`: Full-width image

### 2. ImageGallery

A component for displaying multiple images in a grid layout.

```mdx
import ImageGallery from '../../components/ImageGallery.astro';

<ImageGallery 
  images={[
    {
      src: "/image1.jpg",
      alt: "Image 1",
      caption: "Caption 1"
    },
    {
      src: "/image2.jpg", 
      alt: "Image 2",
      caption: "Caption 2"
    }
  ]}
  columns={2}
  captionStyle="individual"
/>
```

**Props:**
- `images` (required): Array of image objects with `src`, `alt`, and optional `caption`
- `columns` (optional): Number of columns (default: 2)
- `gap` (optional): Gap between images (default: "1rem")
- `captionStyle`: `"individual" | "none" | "group"` (default: "individual")
- `groupCaption` (optional): Caption for entire gallery (when captionStyle="group")

### 3. ImageComparison

A component for side-by-side image comparisons.

```mdx
import ImageComparison from '../../components/ImageComparison.astro';

<ImageComparison 
  title="Before and After"
  leftImage={{
    src: "/before.jpg",
    alt: "Before",
    caption: "Before caption"
  }}
  rightImage={{
    src: "/after.jpg", 
    alt: "After",
    caption: "After caption"
  }}
  leftLabel="Before"
  rightLabel="After"
  orientation="horizontal"
/>
```

**Props:**
- `leftImage` (required): Left image object
- `rightImage` (required): Right image object
- `title` (optional): Title for the comparison
- `orientation`: `"horizontal" | "vertical"` (default: "horizontal")
- `showLabels` (optional): Show Before/After labels (default: true)
- `leftLabel` (optional): Label for left image (default: "Before")
- `rightLabel` (optional): Label for right image (default: "After")

## Usage Examples

### Basic Article Layout

```mdx
---
title: "My Article"
author: "Author Name"
---

import ImageWithCaption from '../../components/ImageWithCaption.astro';

# My Article

Some introductory text here.

<ImageWithCaption 
  src="/hero-image.jpg"
  alt="Hero image"
  caption="This is our main observation site"
  placement="center"
  size="large"
/>

## Section with Text Flow

<ImageWithCaption 
  src="/data-visualization.gif"
  alt="Data visualization"
  caption="Our latest data analysis results"
  placement="left"
  size="small"
>
  This text will flow around the image on the right side. 
  You can include multiple paragraphs here, and the layout
  will automatically adjust to accommodate the image placement.
</ImageWithCaption>

## Data Gallery

<ImageGallery 
  images={[
    { src: "/data1.jpg", alt: "Dataset 1", caption: "First dataset" },
    { src: "/data2.jpg", alt: "Dataset 2", caption: "Second dataset" },
    { src: "/data3.jpg", alt: "Dataset 3", caption: "Third dataset" }
  ]}
  columns={3}
/>
```

## Best Practices

1. **Always provide alt text** for accessibility
2. **Use descriptive captions** to provide context
3. **Choose appropriate placement** based on content flow
4. **Use appropriate sizes** - large for hero images, small for inline
5. **Test responsive behavior** on different screen sizes
6. **Optimize images** before uploading (compress, appropriate dimensions)

## Responsive Behavior

All components automatically adapt to different screen sizes:
- Gallery columns collapse to 1 on mobile
- Left/right placement becomes stacked on mobile
- Images scale appropriately
- Captions remain readable

## Styling

The components use CSS custom properties that match your site's design system:
- Consistent border radius and shadows
- Proper spacing and margins
- Responsive typography
- Accessible color contrast

You can override styles by passing custom `style` props or by modifying the component CSS variables.
