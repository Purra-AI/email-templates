#!/usr/bin/env node

/**
 * Email Template Compiler
 *
 * Compiles email templates by:
 * 1. Loading content JSON files with translations
 * 2. Loading corresponding template HTML files
 * 3. Replacing data-i18n attributes with translated content
 * 4. Replacing {{ variables }} with dynamic placeholders
 * 5. Wrapping in base layout
 * 6. Outputting compiled HTML for each language
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  contentDir: path.join(__dirname, '..', 'content'),
  templatesDir: path.join(__dirname, '..', 'templates'),
  compiledDir: path.join(__dirname, '..', 'compiled'),
  baseLayout: path.join(__dirname, 'templates', 'base-layout.html'),
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
 * Get value from nested object using dot notation
 * @param {Object} obj - Object to search
 * @param {String} path - Dot-notation path (e.g., "body.greeting")
 * @returns {*} Value at path or undefined
 */
function getNestedValue(obj, path) {
  return path.split(/[\.\[\]]/).filter(Boolean).reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);
}

/**
 * Replace data-i18n attributes with translated content
 * @param {String} html - HTML template
 * @param {Object} translations - Translation object for language
 * @returns {String} HTML with translations applied
 */
function applyTranslations(html, translations) {
  // Match data-i18n attributes: data-i18n="body.greeting"
  const regex = /(<[^>]+data-i18n=["']([^"']+)["'][^>]*>)([^<]*)/g;

  return html.replace(regex, (match, openTag, i18nKey, existingContent) => {
    const translatedValue = getNestedValue(translations, i18nKey);

    if (translatedValue !== undefined) {
      // Remove data-i18n attribute and replace content
      const cleanedTag = openTag.replace(/\s*data-i18n=["'][^"']+["']/, '');
      return `${cleanedTag}${translatedValue}`;
    }

    // If translation not found, keep original
    console.warn(`⚠️  Translation not found for key: ${i18nKey}`);
    return match;
  });
}

/**
 * Replace {{ variable }} placeholders with runtime placeholders
 * @param {String} html - HTML content
 * @param {Array} dynamicFields - List of dynamic field names
 * @returns {String} HTML with preserved dynamic placeholders
 */
function preserveDynamicFields(html, dynamicFields) {
  // Ensure dynamic fields remain as {{ variable }} for runtime replacement
  return html;
}

/**
 * Wrap content in base layout
 * @param {String} contentHtml - Compiled content HTML
 * @param {Object} metadata - Email metadata
 * @param {String} lang - Language code
 * @returns {String} Complete HTML email
 */
function wrapInLayout(contentHtml, metadata, lang) {
  let layout = fs.readFileSync(CONFIG.baseLayout, 'utf-8');

  const isRTL = CONFIG.rtlLanguages.includes(lang);
  const dir = isRTL ? 'rtl' : 'ltr';
  const startSide = isRTL ? 'right' : 'left';
  const endSide = isRTL ? 'left' : 'right';
  const fontFamily = CONFIG.fontMap[lang] || CONFIG.fontMap.en;

  // Replace layout variables
  layout = layout.replace(/\{\{\s*lang\s*\}\}/g, lang);
  layout = layout.replace(/\{\{\s*dir\s*\}\}/g, dir);
  layout = layout.replace(/\{\{\s*startSide\s*\}\}/g, startSide);
  layout = layout.replace(/\{\{\s*endSide\s*\}\}/g, endSide);
  layout = layout.replace(/\{\{\s*fontFamily\s*\}\}/g, fontFamily);
  layout = layout.replace(/\{\{\s*subject\s*\}\}/g, metadata.subject || '');
  layout = layout.replace(/\{\{\s*preheader\s*\}\}/g, metadata.preheader || '');
  layout = layout.replace(/\{\{\s*campaignName\s*\}\}/g, metadata.campaignName || '');

  // Replace preheader in data-i18n
  layout = layout.replace(/data-i18n="preheader"[^>]*>[^<]*/g,
    `data-i18n="preheader">${metadata.preheader || ''}`);
  layout = layout.replace(/data-i18n="subject"[^>]*>[^<]*/g,
    `data-i18n="subject">${metadata.subject || ''}`);

  // Insert content
  layout = layout.replace(/\{\{\s*content\s*\}\}/g, contentHtml);

  // Add unsubscribe URL placeholder
  layout = layout.replace(/\{\{\s*unsubscribeUrl\s*\}\}/g, '{{ unsubscribeUrl }}');

  return layout;
}

/**
 * Compile a single email template for all languages
 * @param {String} contentPath - Path to content JSON file
 */
function compileTemplate(contentPath) {
  try {
    // Load content JSON
    const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    const { id, category, campaignName, layout, translations, dynamicFields } = content;

    console.log(`\n📧 Compiling: ${id} (${category})`);

    // Find corresponding template
    const templatePath = path.join(CONFIG.templatesDir, category, `${id}.html`);

    if (!fs.existsSync(templatePath)) {
      console.error(`❌ Template not found: ${templatePath}`);
      return;
    }

    let templateHtml = fs.readFileSync(templatePath, 'utf-8');

    // Compile for each language
    CONFIG.languages.forEach(lang => {
      if (!translations[lang]) {
        console.warn(`⚠️  No translation for ${lang}, skipping`);
        return;
      }

      console.log(`  └─ ${lang}`);

      // Apply translations
      let compiledHtml = applyTranslations(templateHtml, translations[lang]);

      // Preserve dynamic fields
      compiledHtml = preserveDynamicFields(compiledHtml, dynamicFields);

      // Replace cta.primary.url, cta.secondary.url patterns
      compiledHtml = compiledHtml.replace(/\{\{\s*cta\.primary\.url\s*\}\}/g,
        translations[lang].cta?.primary?.url || '{{ ctaUrl }}');
      compiledHtml = compiledHtml.replace(/\{\{\s*cta\.secondary\.url\s*\}\}/g,
        translations[lang].cta?.secondary?.url || '{{ ctaSecondaryUrl }}');

      // Replace stats placeholders if they exist
      compiledHtml = compiledHtml.replace(/\{\{\s*stats\.(\w+)\s*\}\}/g, '{{ $1 }}');

      // Replace support.email
      compiledHtml = compiledHtml.replace(/\{\{\s*support\.email\s*\}\}/g,
        translations[lang].support?.email || 'info@purra.ai');

      // Wrap in layout
      const fullHtml = wrapInLayout(compiledHtml, {
        subject: translations[lang].subject,
        preheader: translations[lang].preheader,
        campaignName
      }, lang);

      // Ensure output directory exists
      const outputDir = path.join(CONFIG.compiledDir, lang, category);
      fs.mkdirSync(outputDir, { recursive: true });

      // Write compiled file
      const outputPath = path.join(outputDir, `${id}.html`);
      fs.writeFileSync(outputPath, fullHtml, 'utf-8');
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
  console.log(`Templates directory: ${CONFIG.templatesDir}`);
  console.log(`Output directory: ${CONFIG.compiledDir}`);
  console.log(`Languages: ${CONFIG.languages.join(', ')}\n`);

  // Clean compiled directory
  if (fs.existsSync(CONFIG.compiledDir)) {
    fs.rmSync(CONFIG.compiledDir, { recursive: true, force: true });
  }
  fs.mkdirSync(CONFIG.compiledDir, { recursive: true });

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

module.exports = { compileTemplate, applyTranslations, getNestedValue };
