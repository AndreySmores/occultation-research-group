# News Article Writing Guide

This guide explains how to create and format news articles for the Occultation Research Group website using the new MDX format with enhanced image support.

## File Format

- **Use `.mdx` extension** for new articles (not `.md`)
- **File naming**: Use descriptive names like `YYYYMMDD_description.mdx`
- Example: `20241215_asteroid_campaign_complete.mdx`

## Article Structure

### Frontmatter (Required)

Every article must start with frontmatter between `---` markers:

```yaml
---
title: "Your Article Title Here"
date: "YYYY-MM-DD"
author: "Author Name"
authorEmail: "author@example.com"  # Optional
images: 
  - "/images/image1.jpg"
  - "/images/image2.gif"
  - "/images/image3.png"
summary: "Brief summary of the article for previews and SEO"
tags: ["tag1", "tag2", "tag3"]
---
```

### Required Fields

- **`title`**: The article title
- **`date`**: Publication date in YYYY-MM-DD format
- **`author`**: Author name (required)
- **`summary`**: Brief description for previews

### Optional Fields

- **`authorEmail`**: Author's email address
- **`images`**: Array of image paths for previews and metadata
- **`tags`**: Array of tags for categorization
- **`image`**: Single image path (for backward compatibility)
- **`video`**: Path to video file
- **`youtube`**: YouTube video ID
- **`relatedLinks`**: Array of related links with title, URL, description, and type
- **`externalUrl`**: URL for external articles (opens in new tab)
- **`source`**: Source/publication name for external articles (e.g., "NASA News", "Science Daily")
- **`isExternal`**: Boolean flag to mark article as external (can also be inferred from `externalUrl`)

## Writing Content

### Import Statements

Add component imports at the top of your content (after frontmatter):

```mdx
import ImageWithCaption from '../../components/ImageWithCaption.astro';
import ImageGallery from '../../components/ImageGallery.astro';
import ImageComparison from '../../components/ImageComparison.astro';
```

### Basic Text Formatting

Use standard Markdown formatting:

```mdx
# Main Heading
## Section Heading
### Subsection Heading

**Bold text** and *italic text*

- Bullet point 1
- Bullet point 2

1. Numbered list item 1
2. Numbered list item 2

[Link text](https://example.com)
```

### Code Blocks

```javascript
// JavaScript code
const example = "Hello World";
```

```python
# Python code
def example_function():
    return "Hello World"
```

## Image Components

### Single Image with Caption

```mdx
<ImageWithCaption 
  src="/images/observation-site.jpg"
  alt="Description of the image"
  caption="Your caption text here"
  placement="center"
  size="medium"
/>
```

**Placement Options:**
- `center` (default): Centered image
- `left`: Image on left, text flows around on right
- `right`: Image on right, text flows around on left
- `full`: Full-width hero image

**Size Options:**
- `small`: Max width 300px
- `medium` (default): Max width 600px
- `large`: Full width

### Image Gallery

```mdx
<ImageGallery 
  images={[
    {
      src: "/images/image1.jpg",
      alt: "Description of image 1",
      caption: "Caption for image 1"
    },
    {
      src: "/images/image2.jpg",
      alt: "Description of image 2",
      caption: "Caption for image 2"
    }
  ]}
  columns={2}
  captionStyle="individual"
/>
```

**Gallery Options:**
- `columns`: Number of columns (1, 2, 3, etc.)
- `captionStyle`: `"individual"`, `"none"`, or `"group"`
- `groupCaption`: Caption for entire gallery

### Image Comparison

```mdx
<ImageComparison 
  title="Before and After"
  leftImage={{
    src: "/images/before.jpg",
    alt: "Before image",
    caption: "Before caption"
  }}
  rightImage={{
    src: "/images/after.jpg",
    alt: "After image",
    caption: "After caption"
  }}
  leftLabel="Before"
  rightLabel="After"
  orientation="horizontal"
/>
```

**Comparison Options:**
- `orientation`: `"horizontal"` or `"vertical"`
- `showLabels`: Show Before/After labels (default: true)
- `leftLabel`/`rightLabel`: Custom labels

## Related Links Section

Add a "Related Links" section at the bottom of your article by including `relatedLinks` in your frontmatter:

```yaml
relatedLinks:
  - title: "NASA Mission Overview"
    url: "https://www.nasa.gov/feature/mission-overview"
    description: "Official NASA page about the mission"
    type: "website"
  - title: "Research Paper"
    url: "https://example.com/paper.pdf"
    description: "Published research on similar observations"
    type: "paper"
  - title: "Related Article"
    url: "/news/related-article"
    description: "Another article from our team"
    type: "article"
  - title: "Video Explanation"
    url: "https://youtube.com/watch?v=example"
    description: "Video explaining the techniques used"
    type: "video"
```

**Link Properties:**
- **`title`** (required): Display name for the link
- **`url`** (required): The link URL
- **`description`** (optional): Brief description of what the link contains
- **`type`** (optional): Link type for categorization and styling
  - `article`: News articles or blog posts
  - `paper`: Research papers or publications
  - `video`: Video content
  - `website`: General websites
  - `other`: Other types of content

**Features:**
- Links open in new tabs for external URLs
- Visual indicators show link type
- Responsive design with hover effects
- Accessible keyboard navigation
- Clean, professional styling

## External Articles

You can also link to articles written about your group on other websites. These articles appear in your news list with an "External" badge and open in a new tab when clicked.

### Creating an External Article

Create a `.md` or `.mdx` file with minimal frontmatter (no content needed):

```yaml
---
title: "UVA Researchers Make Breakthrough Discovery"
date: "2024-12-01"
author: "Science Daily Staff"
externalUrl: "https://www.sciencedaily.com/releases/2024/12/example.html"
source: "Science Daily"
isExternal: true
images: 
  - "/images/external-article-thumbnail.jpg"
summary: "Brief description of what the external article is about"
tags: ["Research", "Discovery"]
---
```

**External Article Fields:**
- **`externalUrl`** (required): The full URL to the external article
- **`source`** (optional): The publication or website name (e.g., "NASA News", "Science Daily")
- **`isExternal`** (optional): Set to `true` to explicitly mark as external (can also be inferred from `externalUrl`)
- **`images`**: Add a thumbnail image for the article preview
- **`summary`**: Brief description shown in previews
- **`author`**: Can be the external article's author or publication name

**Features:**
- Articles display with an "External" or "External Article" badge
- Clicking opens the article in a new tab
- Source name is displayed in the author field
- Visual indicator (↗) in the "Read external article" link
- No content section needed - just frontmatter

**Note:** External articles don't need MDX content since they link to external sites. However, you can use `.mdx` format if you want to add the imports for consistency.

## Complete Example

Here's a complete article example:

```mdx
---
title: "Asteroid Observation Campaign Results"
date: "2024-12-15"
author: "Dr. Jane Smith"
authorEmail: "jane.smith@example.com"
images: 
  - "/images/asteroid-profile.jpg"
  - "/images/telescope-setup.jpg"
summary: "Results from our recent asteroid observation campaign showing significant findings."
tags: ["asteroid", "observation", "research", "results"]
relatedLinks:
  - title: "NASA Asteroid Database"
    url: "https://www.nasa.gov/asteroid-database"
    description: "Official NASA database of known asteroids"
    type: "website"
  - title: "Observation Techniques Paper"
    url: "/papers/observation-techniques.pdf"
    description: "Research paper on advanced observation methods"
    type: "paper"
---

import ImageWithCaption from '../../components/ImageWithCaption.astro';
import ImageGallery from '../../components/ImageGallery.astro';

# Asteroid Observation Campaign Results

Our team has completed a successful observation campaign of asteroid 2024 XY. The results provide valuable insights into the asteroid's composition and structure.

<ImageWithCaption 
  src="/images/asteroid-profile.jpg"
  alt="Asteroid profile showing detailed surface features"
  caption="Detailed profile of asteroid 2024 XY showing surface features and composition variations."
  placement="center"
  size="large"
/>

## Methodology

We used a combination of ground-based telescopes and advanced imaging techniques...

<ImageGallery 
  images={[
    {
      src: "/images/telescope-setup.jpg",
      alt: "Telescope setup at observation site",
      caption: "Our telescope array during the observation campaign"
    },
    {
      src: "/images/data-analysis.jpg",
      alt: "Data analysis workstation",
      caption: "Real-time data analysis during observations"
    }
  ]}
  columns={2}
  captionStyle="individual"
/>

## Results

The campaign yielded significant results...

## Conclusion

These findings advance our understanding of asteroid composition...
```

## Best Practices

### Content Guidelines

1. **Write for your audience**: Use clear, accessible language
2. **Use descriptive headings**: Help readers navigate your content
3. **Include relevant images**: Visual content enhances understanding
4. **Write meaningful captions**: Describe what readers should notice
5. **Use appropriate tags**: Help with categorization and discovery

### Image Guidelines

1. **Optimize images**: Compress files for web performance
2. **Use descriptive alt text**: Important for accessibility
3. **Write informative captions**: Explain the significance
4. **Choose appropriate placement**: Consider content flow
5. **Test responsive behavior**: Images should work on all devices

### Technical Guidelines

1. **Use semantic HTML**: Let MDX components handle the markup
2. **Keep imports at the top**: After frontmatter, before content
3. **Test your article**: Build and preview before publishing
4. **Use consistent naming**: Follow the date-description pattern
5. **Include all required fields**: Title, date, author, summary

## File Management

### Adding Images

1. Place image files in `/public/images/`
2. Reference them as `/images/filename.jpg`
3. Use descriptive filenames
4. Optimize file sizes for web

### Organizing Articles

1. Use consistent naming conventions
2. Keep related images together
3. Update the `images` array in frontmatter
4. Use meaningful tags for categorization

## Troubleshooting

### Common Issues

**Import statements appearing as text:**
- Make sure imports are after the frontmatter
- Use the correct component paths

**Images not displaying:**
- Check file paths start with `/images/`
- Verify files exist in `/public/images/`
- Use correct image formats (jpg, png, gif)

**Build errors:**
- Check for syntax errors in frontmatter
- Ensure all required fields are present
- Validate MDX syntax

### Getting Help

If you encounter issues:
1. Check this guide for common solutions
2. Review existing articles for examples
3. Test with simple content first
4. Ask team members for assistance

## Migration from Old Format

If you have existing `.md` articles:

1. **Rename to `.mdx`**
2. **Add required frontmatter fields**:
   - `author` (required)
   - `images` array
   - `tags` array
3. **Update image references** to use components
4. **Test the build** to ensure everything works

The system maintains backward compatibility, but new articles should use the enhanced MDX format for better image handling and features.
