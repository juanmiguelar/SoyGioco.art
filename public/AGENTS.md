# Overview and Purpose
Static files served directly at the site root.

# Technical Specifications
- Assets in this directory are copied as-is during build with no processing
- Refer to files using absolute paths, e.g. `/img/logo.jpg`
- Commonly used for `robots.txt`, favicons and other public resources

# Usage Examples
- `public/robots.txt` is available at `/robots.txt`
- `public/img/logo.jpg` can be referenced as `<img src="/img/logo.jpg" />`
- `public/sitemap.xml` serves the generated sitemap at `/sitemap.xml`

# Best Practices
- Store only assets that require no bundling or transformation
- Organize files into subfolders such as `img/` to keep the directory tidy

# Common Issues and Solutions
- **Asset not found**: ensure the path starts with `/` and the file exists in this directory
- **Needs processing**: place images needing optimization in the `assets/` directory instead

# Related Documentation
- [../AGENTS.md](../AGENTS.md)

