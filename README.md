# Occultation Research Group Website

A low-maintenance, high-performance website for the Occultation Research Group built with Astro.

## Features

- **Clean three-column layout**: People, Results, and News sections
- **Mobile responsive**: Stacks columns on small screens (Results → People → News)
- **Accessible**: WCAG AA compliant with semantic HTML, proper landmarks, and focus states
- **Performance optimized**: No heavy frameworks, inline critical CSS, deferred JS
- **Light/Dark theme**: Automatically adapts to user's system preference
- **Content management**: Easy-to-update JSON files and Markdown posts
- **SEO friendly**: RSS feed, sitemap, and proper meta tags

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd occultation-research-group
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## Content Management

### Adding News Posts

Create a new Markdown file in `src/content/news/` with the following naming convention:
```
YYYY-MM-DD-title.md
```

Example: `2024-01-15-new-occultation-campaign.md`

Each post should include frontmatter:
```yaml
---
title: "Your Post Title"
date: "2024-01-15"
image: "/images/your-image.jpg"  # Optional
video: "/videos/your-video.mp4"  # Optional
summary: "Brief description of the post"  # Optional
---
```

### Adding People

Edit `src/data/people.json` to add or update team members:

```json
{
  "executive": [
    {
      "name": "Dr. Jane Smith",
      "role": "Director",
      "email": "jane.smith@occultation-research.org"
    }
  ],
  "people": [
    {
      "name": "Dr. John Doe",
      "role": "Senior Researcher"
    }
  ]
}
```

### Adding Observers

Edit `src/data/observers.json`:

```json
{
  "observers": [
    {
      "name": "Dr. Observer Name"
    }
  ]
}
```

### Adding Results

Edit `src/data/results.json` to add publications and images:

```json
{
  "papers": [
    {
      "title": "Your Paper Title",
      "url": "https://arxiv.org/abs/2024.12345"
    }
  ],
  "images": [
    {
      "src": "/images/your-image.jpg",
      "alt": "Descriptive alt text",
      "caption": "Image caption"
    }
  ]
}
```

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. The included `netlify.toml` will handle the configuration

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Astro and configure the build
3. No additional configuration needed

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your web server

## Configuration

### Site URL

Update the site URL in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-domain.com', // Replace with your actual domain
  // ...
});
```

### Analytics

The site includes placeholders for analytics. Uncomment and configure in `src/pages/index.astro`:

**Plausible Analytics:**
```html
<script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
```

**Google Analytics:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## File Structure

```
src/
├── components/          # Astro components
│   ├── People.astro    # People and observers section
│   ├── Results.astro   # Results and publications section
│   └── NewsList.astro  # News feed component
├── content/
│   ├── config.ts       # Content collection configuration
│   └── news/           # Markdown news posts
├── data/               # JSON data files
│   ├── people.json     # Team members and contacts
│   ├── observers.json  # Observer list
│   └── results.json    # Publications and images
├── pages/              # Astro pages
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   ├── results.astro   # Results page
│   ├── rss.xml.ts      # RSS feed
│   ├── sitemap.xml.ts  # Sitemap
│   └── news.json.ts    # JSON news feed
└── styles/
    └── global.css      # Global styles and theme
```

## Performance

The site is optimized for performance with:

- Minimal JavaScript (no heavy frameworks)
- Inline critical CSS
- Lazy loading for images
- Optimized build output
- Efficient content collections

## Accessibility

Built with accessibility in mind:

- Semantic HTML structure
- Proper ARIA labels and landmarks
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Reduced motion support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement (works without JavaScript)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

This project is open source. Please check the license file for details.

## Support

For questions or issues, please contact the development team or open an issue in the repository.

