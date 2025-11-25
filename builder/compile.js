#!/usr/bin/env node

/**
 * Email Template Compiler
 *
 * Compiles email templates by:
 * 1. Loading content JSON files with translations
 * 2. Using purra-modern-template.html as the base template
 * 3. Dynamically generating content sections from JSON data
 * 4. Replacing {{ variables }} with dynamic placeholders
 * 5. Outputting compiled HTML for each language
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  contentDir: path.join(__dirname, '..', 'content'),
  baseTemplate: path.join(__dirname, '..', 'base-templates', 'purra-modern-template.html'),
  compiledDir: path.join(__dirname, '..', 'compiled'),
  languages: ['en', 'he', 'hi', 'fr', 'zh', 'ja', 'de'],
  fontMap: {
    en: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    he: "'Inter', 'Noto Sans Hebrew', -apple-system, sans-serif",
    hi: "'Inter', 'Noto Sans Devanagari', -apple-system, sans-serif",
    fr: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    zh: "'Inter', 'Noto Sans CJK SC', -apple-system, sans-serif",
    ja: "'Inter', 'Noto Sans CJK JP', -apple-system, sans-serif",
    de: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  rtlLanguages: ['he']
};

/**
 * Generate HTML content from JSON translation data
 * @param {Object} translation - Translation object for a specific language
 * @returns {String} Generated HTML content
 */
function generateContentHTML(translation) {
  let html = '';

  // Greeting
  if (translation.body?.greeting) {
    html += `<p class="greeting">${translation.body.greeting}</p>\n`;
  }

  // Intro
  if (translation.body?.intro) {
    html += `<p class="body-text">${translation.body.intro}</p>\n`;
  }

  // Sections - iterate through body object
  if (translation.body) {
    Object.keys(translation.body).forEach(key => {
      if (key === 'greeting' || key === 'intro' || key === 'footer') return;

      const section = translation.body[key];

      // If section has title and description
      if (typeof section === 'object' && section.title) {
        html += `<div class="section">\n`;
        html += `  <h2 class="section-title">${section.title}</h2>\n`;

        if (section.description) {
          html += `  <p class="body-text">${section.description}</p>\n`;
        }

        // Handle items array (bullet points)
        if (section.items && Array.isArray(section.items)) {
          html += `  <ul class="feature-list">\n`;
          section.items.forEach(item => {
            html += `    <li>${item}</li>\n`;
          });
          html += `  </ul>\n`;
        }

        // Handle nested properties
        Object.keys(section).forEach(subKey => {
          if (subKey !== 'title' && subKey !== 'description' && subKey !== 'items') {
            const value = section[subKey];
            if (typeof value === 'string') {
              html += `  <p class="body-text"><strong>${subKey}:</strong> ${value}</p>\n`;
            }
          }
        });

        html += `</div>\n`;
      }
      // Simple string value
      else if (typeof section === 'string') {
        html += `<p class="body-text">${section}</p>\n`;
      }
    });
  }

  // Footer text
  if (translation.body?.footer) {
    html += `<p class="body-text" style="margin-top: 30px;">${translation.body.footer}</p>\n`;
  }

  // CTA Buttons
  if (translation.cta) {
    html += `<table border="0" cellpadding="0" cellspacing="0" class="cta-container">\n`;
    html += `  <tr>\n`;

    if (translation.cta.primary) {
      html += `    <td class="cta-cell">\n`;
      html += `      <a href="${translation.cta.primary.url}" class="cta-button">${translation.cta.primary.text}</a>\n`;
      html += `    </td>\n`;
    }

    if (translation.cta.secondary) {
      html += `    <td class="cta-cell">\n`;
      html += `      <a href="${translation.cta.secondary.url}" class="cta-button-secondary">${translation.cta.secondary.text}</a>\n`;
      html += `    </td>\n`;
    }

    html += `  </tr>\n`;
    html += `</table>\n`;
  }

  return html;
}

/**
 * Compile a single email template for all languages
 * @param {String} contentPath - Path to content JSON file
 */
function compileTemplate(contentPath) {
  try {
    // Load content JSON
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    const { id, category, campaignName, translations } = content;

    console.log(`\n📧 Compiling: ${id} (${category})`);

    // Load base template
    let baseTemplate = fs.readFileSync(CONFIG.baseTemplate, 'utf-8');

    // Compile for each language
    CONFIG.languages.forEach(lang => {
      if (!translations[lang]) {
        console.warn(`⚠️  No translation for ${lang}, skipping`);
        return;
      }

      console.log(`  └─ ${lang}`);

      const translation = translations[lang];
      const isRTL = CONFIG.rtlLanguages.includes(lang);

      // Generate content HTML from JSON
      const contentHTML = generateContentHTML(translation);

      // Replace template variables
      let compiledHtml = baseTemplate
        .replace(/\{\{\s*emailTitle\s*\}\}/g, translation.subject || 'Purra')
        .replace(/\{\{\s*preheaderText\s*\}\}/g, translation.preheader || '')
        .replace(/\{\{\s*headerTitle\s*\}\}/g, translation.header?.title || '')
        .replace(/\{\{\s*headerSubtitle\s*\}\}/g, translation.header?.subtitle || '')
        .replace(/\{\{\s*mainContent\s*\}\}/g, contentHTML)
        .replace(/\{\{\s*campaignName\s*\}\}/g, campaignName || id)
        .replace(/\{\{\s*currentYear\s*\}\}/g, new Date().getFullYear());

      // Set language and direction
      compiledHtml = compiledHtml.replace(/lang="en"/, `lang="${lang}"`);
      if (isRTL) {
        compiledHtml = compiledHtml.replace(/<html/, '<html dir="rtl"');
        compiledHtml = compiledHtml.replace(/font-family: 'Inter'[^;]+;/,
          `font-family: ${CONFIG.fontMap[lang]};`);
      } else if (lang !== 'en') {
        compiledHtml = compiledHtml.replace(/font-family: 'Inter'[^;]+;/,
          `font-family: ${CONFIG.fontMap[lang]};`);
      }

      // Ensure output directory exists
      const outputDir = path.join(CONFIG.compiledDir, lang, category);
      fs.mkdirSync(outputDir, { recursive: true });

      // Write compiled file
      const outputPath = path.join(outputDir, `${id}.html`);
      fs.writeFileSync(outputPath, compiledHtml, 'utf-8');
    });

    console.log(`✅ Compiled ${id} for ${CONFIG.languages.length} languages`);

  } catch (error) {
    console.error(`❌ Error compiling ${contentPath}:`, error.message);
  }
}

/**
 * Find all content JSON files recursively
 * @param {String} dir - Directory to search
 * @returns {Array} Array of file paths
 */
function findContentFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(findContentFiles(filePath));
    } else if (file.endsWith('.json')) {
      results.push(filePath);
    }
  });

  return results;
}

/**
 * Main compilation function
 */
function main() {
  console.log('🚀 Purra Email Template Compiler\n');
  console.log(`Content directory: ${CONFIG.contentDir}`);
  console.log(`Base template: ${CONFIG.baseTemplate}`);
  console.log(`Output directory: ${CONFIG.compiledDir}`);
  console.log(`Languages: ${CONFIG.languages.join(', ')}\n`);

  // Find all content files
  const contentFiles = findContentFiles(CONFIG.contentDir);
  console.log(`Found ${contentFiles.length} template(s) to compile\n`);

  // Compile each template
  contentFiles.forEach(compileTemplate);

  console.log('\n✨ Compilation complete!\n');
  console.log(`📁 Compiled templates available in: ${CONFIG.compiledDir}`);
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { compileTemplate, generateContentHTML };
