# Content TODO List

This file contains all the places where you need to replace placeholder content with real data.

## 🔧 Configuration Updates

### 1. Site URL
- **File**: `astro.config.mjs`
- **Line**: 5
- **Action**: Replace `https://your-domain.com` with your actual domain

### 2. Site URL in Meta Tags
- **File**: `src/pages/index.astro`
- **Lines**: 15, 20, 25, 26
- **Action**: Replace `https://your-domain.com` with your actual domain

### 3. Site URL in Sitemap
- **File**: `src/pages/sitemap.xml.ts`
- **Line**: 3
- **Action**: Replace `https://your-domain.com` with your actual domain

### 4. Site URL in RSS Feed
- **File**: `src/pages/rss.xml.ts`
- **Line**: 8
- **Action**: Replace `https://your-domain.com` with your actual domain

### 5. Site URL in JSON Feed
- **File**: `src/pages/news.json.ts`
- **Line**: 6
- **Action**: Replace `https://your-domain.com` with your actual domain

### 6. Robots.txt
- **File**: `robots.txt`
- **Line**: 3
- **Action**: Replace `https://your-domain.com` with your actual domain

## 👥 People Data

### 1. Executive Team
- **File**: `src/data/people.json`
- **Section**: `executive` array
- **Action**: Replace placeholder names, roles, and email addresses with real team members

### 2. Research Team
- **File**: `src/data/people.json`
- **Section**: `people` array
- **Action**: Replace placeholder names and roles with real team members

### 3. Observers
- **File**: `src/data/observers.json`
- **Section**: `observers` array
- **Action**: Replace placeholder names with real observer names

## 📊 Results Data

### 1. Publications
- **File**: `src/data/results.json`
- **Section**: `papers` array
- **Action**: Replace placeholder paper titles and URLs with real publications

### 2. Images
- **File**: `src/data/results.json`
- **Section**: `images` array
- **Action**: Replace placeholder image paths, alt text, and captions with real research images

## 📰 News Content

### 1. Example News Posts
- **Files**: `src/content/news/2024-01-15-new-occultation-campaign.md` and `src/content/news/2024-01-10-breakthrough-discovery.md`
- **Action**: Replace with real news posts or delete and create new ones

### 2. News Images
- **Directory**: `public/images/`
- **Action**: Replace placeholder images with real research images

## 🎨 Branding

### 1. Site Title
- **File**: `src/pages/index.astro`
- **Line**: 18
- **Action**: Update if you want a different site title

### 2. Favicon
- **File**: `public/favicon.svg`
- **Action**: Replace with your organization's logo or icon

### 3. Contact Information
- **File**: `src/pages/index.astro` (footer)
- **Action**: Update contact email and GitHub repository URL

## 📈 Analytics (Optional)

### 1. Plausible Analytics
- **File**: `src/pages/index.astro`
- **Lines**: 75-76
- **Action**: Uncomment and replace `your-domain.com` with your actual domain

### 2. Google Analytics
- **File**: `src/pages/index.astro`
- **Lines**: 78-85
- **Action**: Uncomment and replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID

## 🚀 Deployment

### 1. Repository URL
- **File**: `README.md`
- **Line**: 8
- **Action**: Replace `<your-repo-url>` with your actual repository URL

### 2. GitHub Repository
- **File**: `src/pages/index.astro` (footer)
- **Action**: Update GitHub repository URL

## ✅ Quick Checklist

- [ ] Update all site URLs to your domain
- [ ] Replace all placeholder people data
- [ ] Add real research images and publications
- [ ] Create real news posts or replace examples
- [ ] Update contact information
- [ ] Configure analytics (optional)
- [ ] Update repository URLs
- [ ] Test the site locally with `npm run dev`
- [ ] Build and deploy with `npm run build`

## 🎯 Priority Order

1. **High Priority**: Site URLs, contact information, people data
2. **Medium Priority**: Research images, publications, news content
3. **Low Priority**: Analytics, branding customization, additional pages

After completing these updates, your website will be ready for production deployment!

