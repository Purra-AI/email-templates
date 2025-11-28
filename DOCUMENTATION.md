# Purra Email Templates - Complete Documentation

**Professional multi-language email template system with dynamic content generation**

Version 1.0.0 | Last Updated: November 2025

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [System Overview](#system-overview)
3. [Directory Structure](#directory-structure)
4. [Creating New Templates](#creating-new-templates)
5. [Content JSON Schema](#content-json-schema)
6. [Compilation System](#compilation-system)
7. [Multi-Language Support](#multi-language-support)
8. [Dynamic Variables](#dynamic-variables)
9. [Design System](#design-system)
10. [Email Template List](#email-template-list)
11. [Backend Integration](#backend-integration)
12. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Installation & Build

```bash
# Install dependencies
npm install

# Build all email templates (compiles 66 templates × 7 languages = 462 HTML files)
npm run build

# Watch mode for development
npm run build:watch

# Clean compiled files
npm run clean
```

**Output**: Compiled emails in `compiled/{lang}/{category}/{email-name}.html`

### Test in Browser

Open any compiled file directly:
```bash
open "compiled/en/authentication/welcome-email.html"
open "compiled/he/onboarding/onboarding-day1.html"
```

---

## System Overview

### Architecture

**Content-First Single Template System**

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Content JSON   │  +  │  Base Template   │  =  │  Compiled HTML  │
│  (66 files)     │     │  (1 file)        │     │  (462 files)    │
│                 │     │                  │     │                 │
│  • 7 languages  │     │  purra-modern-   │     │  • en/, he/,    │
│  • Translations │     │  template.html   │     │    hi/, fr/,    │
│  • Structure    │     │                  │     │    zh/, ja/,    │
│                 │     │  Dynamic content │     │    de/          │
└─────────────────┘     │  generation      │     │                 │
                        └──────────────────┘     └─────────────────┘
```

### How It Works

1. **Content JSON**: Define email content with translations for all 7 languages
2. **Base Template**: Single HTML template (`purra-modern-template.html`) with Purra design system
3. **Compilation**: `builder/compile.js` dynamically generates HTML from JSON structure
4. **Output**: Final HTML files for each language with runtime `{{ variables }}`
5. **Backend Use**: Replace `{{ variables }}` at runtime with actual user data

### Key Benefits

- ✅ **Single source of truth**: One base template for all 66 email types
- ✅ **Dynamic content**: HTML generated from JSON structure automatically
- ✅ **Multi-language**: Full translations for 7 languages with RTL support
- ✅ **Maintainable**: Update design once, applies to all emails
- ✅ **Type-safe**: JSON schema ensures consistent structure
- ✅ **Runtime variables**: `{{ variableName }}` replaced by backend at send time

---

## Directory Structure

```
Email templates/
├── README.md                           # Overview and quick start
├── DOCUMENTATION.md                    # This file - complete documentation
├── package.json                        # Build scripts and dependencies
├── .gitignore                          # Ignores compiled/ and node_modules/
│
├── base-templates/                     # Single base template
│   └── purra-modern-template.html     # Base HTML with Purra design system
│
├── builder/                            # Compilation system
│   ├── compile.js                     # Main compiler script
│   ├── templates/                     # (Legacy - not used)
│   └── utils/                         # (Future utilities)
│
├── content/                           # Content JSON files (66 total)
│   ├── admin-support/                 # 6 templates
│   │   ├── account-created-admin.json
│   │   ├── api-key-generated.json
│   │   ├── data-export-ready.json
│   │   ├── support-ticket-response.json
│   │   ├── team-member-added.json
│   │   └── user-permission-changed.json
│   │
│   ├── authentication/                # 7 templates
│   │   ├── email-verification.json
│   │   ├── password-reset.json
│   │   ├── password-reset-success.json
│   │   ├── security-alert-password-changed.json
│   │   ├── security-alert-new-device.json
│   │   ├── two-factor-enabled.json
│   │   └── welcome-email.json
│   │
│   ├── billing/                       # 16 templates
│   │   ├── invoice-overdue.json
│   │   ├── invoice-payment-received.json
│   │   ├── invoice-ready.json
│   │   ├── payment-failed.json
│   │   ├── payment-success.json
│   │   ├── subscription-cancelled.json
│   │   ├── subscription-downgraded.json
│   │   ├── subscription-renewal-reminder.json
│   │   ├── subscription-upgraded.json
│   │   ├── trial-expired.json
│   │   ├── trial-expiring-1d.json
│   │   ├── trial-expiring-3d.json
│   │   └── trial-expiring-7d.json
│   │
│   ├── marketing/                     # 8 templates
│   │   ├── customer-story.json
│   │   ├── feature-spotlight.json
│   │   ├── industry-report.json
│   │   ├── product-update.json
│   │   ├── referral-program.json
│   │   ├── seasonal-offer.json
│   │   ├── webinar-invite.json
│   │   └── weekly-digest-insights.json
│   │
│   ├── notifications/                 # 8 templates
│   │   ├── contract-renewal-reminder.json
│   │   ├── new-vendor-available.json
│   │   ├── price-alert-decrease.json
│   │   ├── price-alert-increase.json
│   │   ├── price-alert-threshold.json
│   │   ├── vendor-compliance-issue.json
│   │   ├── vendor-risk-detected.json
│   │   └── vendor-status-changed.json
│   │
│   ├── onboarding/                    # 10 templates
│   │   ├── demo-offer-calendly.json
│   │   ├── onboarding-day1.json
│   │   ├── onboarding-day3.json
│   │   ├── onboarding-day7.json
│   │   ├── onboarding-day14.json
│   │   ├── onboarding-day30.json
│   │   ├── progress-milestone.json
│   │   ├── quick-wins.json
│   │   └── setup-incomplete.json
│   │
│   ├── re-engagement/                 # 3 templates
│   │   ├── inactive-user-7d.json
│   │   ├── inactive-user-30d.json
│   │   └── win-back-campaign.json
│   │
│   └── reports/                       # 8 templates
│       ├── compliance-status-report.json
│       ├── custom-report-ready.json
│       ├── due-diligence-report-ready.json
│       ├── market-insights-weekly.json
│       ├── market-trend-alert.json
│       ├── price-comparison-ready.json
│       ├── supply-chain-risk-report.json
│       └── vendor-research-started.json
│
└── compiled/                          # Generated HTML files (gitignored)
    ├── en/                            # English
    ├── he/                            # Hebrew (RTL)
    ├── hi/                            # Hindi
    ├── fr/                            # French
    ├── zh/                            # Chinese
    ├── ja/                            # Japanese
    └── de/                            # German
```

---

## Creating New Templates

### Step 1: Create Content JSON File

Create a new JSON file in the appropriate category folder:

```bash
touch content/notifications/new-feature-announcement.json
```

### Step 2: Define Content Structure

```json
{
  "id": "new-feature-announcement",
  "category": "notifications",
  "campaignName": "new_feature_announcement",
  "layout": "simple",
  "dynamicFields": ["firstName", "featureName", "featureUrl"],
  "translations": {
    "en": {
      "subject": "🎉 New Feature: {{ featureName }}",
      "preheader": "Check out what's new in Purra",
      "header": {
        "title": "New Feature Available",
        "subtitle": "We've added something special for you"
      },
      "body": {
        "greeting": "Hi {{ firstName }},",
        "intro": "We're excited to announce a new feature that will help you work more efficiently.",
        "whatsnew": {
          "title": "What's New",
          "description": "{{ featureName }} is now available to all users.",
          "items": [
            "Faster processing times",
            "Enhanced data visualization",
            "New export options"
          ]
        },
        "footer": "We hope you enjoy this new feature. Let us know what you think!"
      },
      "cta": {
        "primary": {
          "text": "Try It Now",
          "url": "{{ featureUrl }}"
        }
      }
    },
    "he": { /* Hebrew translation */ },
    "hi": { /* Hindi translation */ },
    "fr": { /* French translation */ },
    "zh": { /* Chinese translation */ },
    "ja": { /* Japanese translation */ },
    "de": { /* German translation */ }
  }
}
```

### Step 3: Compile

```bash
npm run build
```

Your new template will be compiled to:
```
compiled/en/notifications/new-feature-announcement.html
compiled/he/notifications/new-feature-announcement.html
... (7 language versions)
```

---

## Content JSON Schema

### Root Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier (kebab-case, used for filename) |
| `category` | string | ✅ | Category folder name |
| `campaignName` | string | ✅ | UTM campaign parameter (snake_case) |
| `layout` | string | ❌ | Layout type (default: "simple") |
| `dynamicFields` | array | ✅ | List of {{ variables }} used in this template |
| `translations` | object | ✅ | Translations for each language |

### Translation Object (per language)

```json
{
  "subject": "Email subject line",
  "preheader": "Preview text shown in email clients",
  "header": {
    "title": "Main header text",
    "subtitle": "Optional subtitle"
  },
  "body": {
    "greeting": "Hi {{ firstName }},",
    "intro": "Introduction paragraph",

    "sectionName": {
      "title": "Section Title",
      "description": "Section description",
      "items": ["Bullet 1", "Bullet 2", "Bullet 3"]
    },

    "anotherSection": {
      "title": "Another Section",
      "keyName": "Value with {{ variable }}"
    },

    "footer": "Closing message"
  },
  "cta": {
    "primary": {
      "text": "Button Text",
      "url": "{{ dynamicUrl }}"
    },
    "secondary": {
      "text": "Secondary Button",
      "url": "https://purra.ai/docs"
    }
  }
}
```

### Body Section Types

**1. Simple Paragraph**
```json
"intro": "This becomes a simple paragraph"
```
Output: `<p class="body-text">This becomes a simple paragraph</p>`

**2. Section with Title & Description**
```json
"features": {
  "title": "Key Features",
  "description": "Here are the highlights"
}
```
Output:
```html
<div class="section">
  <h2 class="section-title">Key Features</h2>
  <p class="body-text">Here are the highlights</p>
</div>
```

**3. Section with Bullet List**
```json
"benefits": {
  "title": "Benefits",
  "items": ["Benefit 1", "Benefit 2", "Benefit 3"]
}
```
Output:
```html
<div class="section">
  <h2 class="section-title">Benefits</h2>
  <ul class="feature-list">
    <li>Benefit 1</li>
    <li>Benefit 2</li>
    <li>Benefit 3</li>
  </ul>
</div>
```

**4. Key-Value Pairs**
```json
"details": {
  "title": "Order Details",
  "orderId": "Order ID: {{ orderId }}",
  "amount": "Amount: {{ amount }}",
  "date": "Date: {{ orderDate }}"
}
```

---

## Compilation System

### How `builder/compile.js` Works

```javascript
// 1. Load content JSON
const content = require('../content/authentication/welcome-email.json');

// 2. Load base template
const baseTemplate = fs.readFileSync('base-templates/purra-modern-template.html');

// 3. For each language...
content.translations.forEach((lang, translation) => {

  // 4. Generate HTML from JSON structure
  const contentHTML = generateContentHTML(translation);

  // 5. Replace template variables
  let compiled = baseTemplate
    .replace('{{ emailTitle }}', translation.subject)
    .replace('{{ headerTitle }}', translation.header.title)
    .replace('{{ headerSubtitle }}', translation.header.subtitle)
    .replace('{{ mainContent }}', contentHTML)
    .replace('{{ campaignName }}', content.campaignName);

  // 6. Set language attributes
  compiled = compiled.replace(/lang="en"/, `lang="${lang}"`);
  if (lang === 'he') {
    compiled = compiled.replace(/<html/, '<html dir="rtl"');
  }

  // 7. Write compiled file
  fs.writeFileSync(`compiled/${lang}/${category}/${id}.html`, compiled);
});
```

### Dynamic Content Generation

The `generateContentHTML()` function converts JSON to HTML:

**Input (JSON):**
```json
{
  "body": {
    "greeting": "Hi {{ firstName }},",
    "intro": "Welcome to Purra!",
    "features": {
      "title": "What You Can Do",
      "items": ["Run due diligence", "Compare prices", "Monitor vendors"]
    }
  },
  "cta": {
    "primary": {"text": "Get Started", "url": "{{ dashboardUrl }}"}
  }
}
```

**Output (HTML):**
```html
<p class="greeting">Hi {{ firstName }},</p>
<p class="body-text">Welcome to Purra!</p>
<div class="section">
  <h2 class="section-title">What You Can Do</h2>
  <ul class="feature-list">
    <li>Run due diligence</li>
    <li>Compare prices</li>
    <li>Monitor vendors</li>
  </ul>
</div>
<table border="0" cellpadding="0" cellspacing="0" class="cta-container">
  <tr>
    <td class="cta-cell">
      <a href="{{ dashboardUrl }}" class="cta-button">Get Started</a>
    </td>
  </tr>
</table>
```

---

## Multi-Language Support

### Supported Languages

| Code | Language | Direction | Font Family |
|------|----------|-----------|-------------|
| `en` | English | LTR | Inter, -apple-system, sans-serif |
| `he` | עברית (Hebrew) | **RTL** | Inter, Noto Sans Hebrew, sans-serif |
| `hi` | हिंदी (Hindi) | LTR | Inter, Noto Sans Devanagari, sans-serif |
| `fr` | Français (French) | LTR | Inter, -apple-system, sans-serif |
| `zh` | 中文 (Chinese) | LTR | Inter, Noto Sans CJK SC, sans-serif |
| `ja` | 日本語 (Japanese) | LTR | Inter, Noto Sans CJK JP, sans-serif |
| `de` | Deutsch (German) | LTR | Inter, -apple-system, sans-serif |

### RTL (Right-to-Left) Support

Hebrew emails automatically get:
- `dir="rtl"` attribute on `<html>` tag
- Reversed padding/alignment CSS
- Appropriate font stack with Hebrew support

**Example RTL Adjustments:**
```css
/* LTR (English) */
.features-list li {
  padding-left: 32px;
}
.features-list li:before {
  left: 0;
}

/* RTL (Hebrew) - automatically applied */
.features-list li {
  padding-right: 32px;
}
.features-list li:before {
  right: 0;
}
```

### Adding More Languages

1. Add language code to `CONFIG.languages` in `builder/compile.js`
2. Add font family to `CONFIG.fontMap`
3. Add to `CONFIG.rtlLanguages` if RTL
4. Add translations to all content JSON files
5. Run `npm run build`

---

## Dynamic Variables

### Variable Syntax

Use `{{ variableName }}` in content JSON. These are preserved in compiled HTML and replaced at runtime by your backend.

**Example:**
```json
{
  "body": {
    "greeting": "Hi {{ firstName }},"
  }
}
```

Compiles to:
```html
<p class="greeting">Hi {{ firstName }},</p>
```

Backend replaces at send time:
```javascript
const emailHtml = compiledTemplate.replace(/\{\{ firstName \}\}/g, 'Sarah');
// Result: <p class="greeting">Hi Sarah,</p>
```

### Common Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `{{ firstName }}` | User's first name | "Sarah" |
| `{{ lastName }}` | User's last name | "Chen" |
| `{{ email }}` | User's email address | "sarah@example.com" |
| `{{ companyName }}` | Company name | "Acme Corp" |
| `{{ resetUrl }}` | Password reset URL | "https://app.purra.ai/reset?token=..." |
| `{{ verificationUrl }}` | Email verification URL | "https://app.purra.ai/verify?token=..." |
| `{{ dashboardUrl }}` | Dashboard URL | "https://app.purra.ai/dashboard" |
| `{{ reportUrl }}` | Report URL | "https://app.purra.ai/reports/123" |
| `{{ invoiceUrl }}` | Invoice URL | "https://app.purra.ai/billing/invoice/456" |
| `{{ unsubscribeUrl }}` | Unsubscribe URL | "https://app.purra.ai/unsubscribe?token=..." |
| `{{ amount }}` | Dollar amount | "$99.00" |
| `{{ dueDate }}` | Date | "December 15, 2024" |
| `{{ planName }}` | Subscription plan | "Professional" |

### Dynamic Fields Declaration

Always declare dynamic fields in the content JSON:

```json
{
  "id": "invoice-ready",
  "dynamicFields": ["firstName", "invoiceNumber", "amount", "dueDate", "invoiceUrl"],
  "translations": { ... }
}
```

This serves as documentation and helps with validation.

---

## Design System

### Brand Colors

```css
/* Primary Gradient */
background: linear-gradient(135deg, #0d1e4c 0%, #113391 50%, #1e40af 100%);

/* Electric Blue Accent */
color: #0d9cdb;

/* Text Colors */
color: #1f1f1f;      /* Primary text */
color: #4a4a4a;      /* Body text */
color: #6b7280;      /* Muted/footer text */

/* Backgrounds */
background: #f5f5f5; /* Page background */
background: #ffffff; /* Email container */
background: #f8f9fb; /* Footer */
```

### Typography

```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
font-size: 28px; /* Header title (24px mobile) */
font-size: 18px; /* Greeting */
font-size: 16px; /* Body text, buttons */
font-size: 15px; /* Secondary button */
font-size: 13px; /* Footer */
font-size: 12px; /* Powered by */
```

### Components

#### Electric Button
```html
<a href="{{ url }}" class="btn-electric">Button Text</a>
```
- Gradient background: `linear-gradient(135deg, #0d1e4c, #113391)`
- Shadow glow: `0 4px 20px rgba(13, 30, 76, 0.3)`
- Hover: Shifts to lighter gradient

#### Secondary Button
```html
<a href="{{ url }}" class="btn-secondary">Secondary Action</a>
```
- Transparent background
- 2px border: `#0d1e4c`
- No shadow

#### Info Card (Glassmorphism)
```html
<div class="info-card">
  <h3 class="info-card-title">💡 Pro Tip</h3>
  <p class="info-card-text">Your helpful message here</p>
</div>
```

#### Feature List (Checkmarks)
```html
<ul class="features-list">
  <li><strong>Feature:</strong> Description</li>
  <li><strong>Another:</strong> More info</li>
</ul>
```

#### Stats/Metrics
```html
<table class="stats-container" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td class="stat-item">
      <span class="stat-value">250+</span>
      <span class="stat-label">Suppliers</span>
    </td>
    <td class="stat-item">
      <span class="stat-value">$2.5M</span>
      <span class="stat-label">Trade Volume</span>
    </td>
  </tr>
</table>
```

#### Badges
```html
<span class="badge badge-success">Completed</span>
<span class="badge badge-warning">Processing</span>
<span class="badge badge-info">New</span>
```

### Responsive Design

**Breakpoint:** `@media (max-width: 600px)`

**Mobile Optimizations:**
- Container: Full width, no border radius
- Padding: Reduced to 30px 20px
- Header title: 24px (from 28px)
- Button: Smaller padding
- Stats: Stacked vertically instead of horizontal

---

## Email Template List

### Complete Template Inventory (66 Total)

#### 1. Authentication (7 templates)
- `email-verification` - Verify email address after signup
- `password-reset` - Reset forgotten password
- `password-reset-success` - Confirm password change
- `security-alert-password-changed` - Alert when password changed
- `security-alert-new-device` - Alert when login from new device
- `two-factor-enabled` - Confirm 2FA activation
- `welcome-email` - Welcome new users

#### 2. Billing & Subscription (16 templates)
- `trial-expiring-7d` - Trial ending in 7 days
- `trial-expiring-3d` - Trial ending in 3 days
- `trial-expiring-1d` - Trial ending tomorrow
- `trial-expired` - Trial has ended
- `payment-failed` - Payment processing failed
- `payment-success` - Payment received successfully
- `subscription-renewal-reminder` - Upcoming renewal notice
- `subscription-upgraded` - Plan upgraded confirmation
- `subscription-downgraded` - Plan downgraded confirmation
- `subscription-cancelled` - Cancellation confirmation
- `invoice-ready` - New invoice available
- `invoice-overdue` - Overdue payment reminder
- `invoice-payment-received` - Payment received for invoice

#### 3. Onboarding & User Journey (10 templates)
- `welcome-email` - First email after signup
- `demo-offer-calendly` - Book a demo call
- `onboarding-day1` - Day 1: Get started guide
- `onboarding-day3` - Day 3: Key features tour
- `onboarding-day7` - Day 7: Advanced tips
- `onboarding-day14` - Day 14: Progress check-in
- `onboarding-day30` - Day 30: Power user tips
- `quick-wins` - Quick value demonstration
- `progress-milestone` - Celebrate achievements
- `setup-incomplete` - Nudge to complete setup

#### 4. Reports & Analytics (8 templates)
- `due-diligence-report-ready` - Due diligence complete
- `vendor-research-started` - Research initiated
- `price-comparison-ready` - Price analysis complete
- `market-insights-weekly` - Weekly market summary
- `market-trend-alert` - Important trend detected
- `custom-report-ready` - Custom report generated
- `compliance-status-report` - Compliance check results
- `supply-chain-risk-report` - Risk assessment complete

#### 5. Notifications & Alerts (8 templates)
- `price-alert-increase` - Price went up
- `price-alert-decrease` - Price went down
- `price-alert-threshold` - Price crossed threshold
- `vendor-risk-detected` - Risk level changed
- `vendor-compliance-issue` - Compliance problem
- `vendor-status-changed` - Vendor status update
- `new-vendor-available` - New vendor match found
- `contract-renewal-reminder` - Contract expiring soon

#### 6. Engagement & Marketing (8 templates)
- `product-update` - New features announcement
- `customer-story` - Success story / case study
- `industry-report` - Industry insights
- `webinar-invite` - Event invitation
- `seasonal-offer` - Limited-time promotion
- `referral-program` - Refer-a-friend
- `feature-spotlight` - Deep dive on a feature
- `weekly-digest-insights` - Weekly summary email

#### 7. Re-engagement (3 templates)
- `inactive-user-7d` - Inactive for 7 days
- `inactive-user-30d` - Inactive for 30 days
- `win-back-campaign` - Special offer to return

#### 8. Admin & Support (6 templates)
- `account-created-admin` - Admin: New user signup
- `api-key-generated` - API key created
- `data-export-ready` - Data export complete
- `support-ticket-response` - Support reply
- `team-member-added` - New team member invited
- `user-permission-changed` - Permission update

---

## Backend Integration

### Node.js Example

```javascript
const fs = require('fs');
const path = require('path');

// Load compiled template
function loadEmailTemplate(templateName, language = 'en') {
  const category = templateName.split('-')[0]; // Extract category from name
  const templatePath = path.join(
    __dirname,
    'email-templates',
    'compiled',
    language,
    category,
    `${templateName}.html`
  );
  return fs.readFileSync(templatePath, 'utf-8');
}

// Replace variables
function renderEmail(templateHtml, variables) {
  let rendered = templateHtml;
  Object.keys(variables).forEach(key => {
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
    rendered = rendered.replace(regex, variables[key]);
  });
  return rendered;
}

// Send email
async function sendWelcomeEmail(user) {
  const template = loadEmailTemplate('welcome-email', user.language || 'en');

  const emailHtml = renderEmail(template, {
    firstName: user.firstName,
    email: user.email,
    dashboardUrl: `https://app.purra.ai/dashboard?utm_source=email&utm_medium=email&utm_campaign=welcome_email`,
    unsubscribeUrl: `https://app.purra.ai/unsubscribe?token=${user.unsubscribeToken}`
  });

  await mailService.send({
    to: user.email,
    subject: 'Welcome to Purra!',
    html: emailHtml
  });
}

// Usage
await sendWelcomeEmail({
  firstName: 'Sarah',
  email: 'sarah@example.com',
  language: 'en'
});
```

### Python Example

```python
import os
import re
from pathlib import Path

def load_email_template(template_name: str, language: str = 'en') -> str:
    """Load compiled email template"""
    category = template_name.split('-')[0]
    template_path = Path(__file__).parent / 'email-templates' / 'compiled' / language / category / f'{template_name}.html'
    return template_path.read_text()

def render_email(template_html: str, variables: dict) -> str:
    """Replace {{ variables }} with actual values"""
    rendered = template_html
    for key, value in variables.items():
        pattern = r'\{\{\s*' + key + r'\s*\}\}'
        rendered = re.sub(pattern, str(value), rendered)
    return rendered

def send_welcome_email(user):
    """Send welcome email"""
    template = load_email_template('welcome-email', user.language or 'en')

    email_html = render_email(template, {
        'firstName': user.first_name,
        'email': user.email,
        'dashboardUrl': f'https://app.purra.ai/dashboard?utm_source=email&utm_medium=email&utm_campaign=welcome_email',
        'unsubscribeUrl': f'https://app.purra.ai/unsubscribe?token={user.unsubscribe_token}'
    })

    mail_service.send(
        to=user.email,
        subject='Welcome to Purra!',
        html=email_html
    )

# Usage
send_welcome_email(user)
```

### SendGrid Integration

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(templateName, toEmail, variables, language = 'en') {
  const template = loadEmailTemplate(templateName, language);
  const html = renderEmail(template, variables);

  // Extract subject from compiled HTML
  const subjectMatch = html.match(/<title>(.*?)<\/title>/);
  const subject = subjectMatch ? subjectMatch[1] : 'Purra';

  const msg = {
    to: toEmail,
    from: 'noreply@purra.ai',
    subject: subject,
    html: html
  };

  await sgMail.send(msg);
}
```

### AWS SES Integration

```javascript
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

async function sendEmailSES(templateName, toEmail, variables, language = 'en') {
  const template = loadEmailTemplate(templateName, language);
  const html = renderEmail(template, variables);

  const params = {
    Source: 'noreply@purra.ai',
    Destination: { ToAddresses: [toEmail] },
    Message: {
      Subject: { Data: 'Subject from HTML title tag' },
      Body: { Html: { Data: html } }
    }
  };

  await ses.sendEmail(params).promise();
}
```

---

## Troubleshooting

### Issue: Compilation Fails

**Error:** `Cannot find module 'content/category/template.json'`

**Solution:** Ensure JSON file exists and has correct structure:
```bash
npm run build
# Check error message for missing file path
ls -la content/category/
```

### Issue: Missing Translations

**Error:** `  No translation for he, skipping`

**Solution:** Add missing language to translations object in content JSON:
```json
{
  "translations": {
    "en": { ... },
    "he": { /* Add Hebrew translation */ }
  }
}
```

### Issue: Variables Not Replaced

**Problem:** Email shows `{{ firstName }}` instead of actual name

**Solution:** Ensure backend is replacing variables:
```javascript
// ❌ Wrong - sending compiled template directly
await send(compiledTemplate);

// ✅ Correct - replace variables first
const rendered = renderEmail(compiledTemplate, { firstName: 'Sarah' });
await send(rendered);
```

### Issue: RTL Layout Broken

**Problem:** Hebrew email has incorrect alignment

**Solution:** Ensure `dir="rtl"` is in HTML tag:
```bash
# Check compiled Hebrew file
grep 'dir=' compiled/he/authentication/welcome-email.html

# Should show: <html lang="he" dir="rtl">
```

### Issue: Images Not Showing

**Problem:** Images don't display in email clients

**Solution:** Use absolute URLs for all images:
```json
// ❌ Wrong
"logo": "/images/logo.png"

// ✅ Correct
"logo": "https://purra.ai/assets/logo.png"
```

### Issue: Gmail Clips Email

**Problem:** Gmail shows "[Message clipped]" and hides content

**Solution:**
- Keep total email size under 102KB
- Minimize inline CSS
- Use external stylesheets where supported
```bash
# Check file size
ls -lh compiled/en/onboarding/onboarding-day1.html
```

### Issue: Outlook Layout Broken

**Problem:** Email looks broken in Outlook

**Solution:** Ensure tables have proper attributes:
```html
<!-- ✅ Correct -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">

<!-- ❌ Wrong -->
<table>
```

### Issue: Build Hangs or Crashes

**Problem:** `npm run build` doesn't complete

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear compiled directory
npm run clean

# Try building again
npm run build
```

---

## UTM Tracking

All links in compiled emails automatically include UTM parameters:

```
https://app.purra.ai/dashboard?utm_source=email&utm_medium=email&utm_campaign={{ campaignName }}
```

**Campaign Names** (from content JSON `campaignName` field):
- `welcome_email` - Welcome emails
- `password_reset` - Password reset emails
- `trial_expiring_7d` - Trial expiring in 7 days
- `invoice_overdue` - Overdue invoice reminders
- etc.

Track in Google Analytics: **Acquisition → Campaigns → Email**

---

## Email Client Compatibility

Tested and optimized for:

| Client | Status | Notes |
|--------|--------|-------|
| Gmail (Web) | ✅ | Full support |
| Gmail (iOS) | ✅ | Full support |
| Gmail (Android) | ✅ | Full support |
| Apple Mail (macOS) | ✅ | Full support |
| Apple Mail (iOS) | ✅ | Full support |
| Outlook 2016+ | ✅ | Table-based layout, MSO styles |
| Outlook 365 | ✅ | Full support |
| Outlook Web | ✅ | Full support |
| Yahoo Mail | ✅ | Full support |
| Thunderbird | ✅ | Full support |
| Samsung Mail | ✅ | Full support |

### Compatibility Features
- ✅ Inline CSS (no external stylesheets)
- ✅ Table-based layout for old clients
- ✅ MSO-specific styles for Outlook
- ✅ Web-safe fonts with fallbacks
- ✅ Retina-ready images (2x resolution)
- ✅ Alt text for all images

---

## Best Practices

### Subject Lines
- Keep under 50 characters
- Use emojis sparingly (1-2 max)
- Avoid ALL CAPS
- Test for spam filters

### Content
- **One primary CTA** per email
- Use short paragraphs (2-3 lines)
- Add alt text to all images
- Include unsubscribe link (required by law)

### Testing
- Test across multiple email clients
- Check mobile rendering
- Verify all links work
- Test variable replacement
- Send test emails to multiple addresses

### Performance
- Keep total size under 100KB
- Optimize images (use CDN)
- Use absolute URLs only
- Minimize inline CSS where possible

### Personalization
- Always use recipient's name if available
- Segment by language preference
- Use dynamic content based on user behavior
- A/B test subject lines and CTAs

---

## Support & Resources

### Documentation
- **This File**: Complete documentation
- **README.md**: Quick start and overview
- **Content JSON Files**: See examples in `content/` directory

### Contact
- **Email**: info@purra.ai
- **Phone**: +972-535221224
- **Address**: Beit HaMilenium, Hatidhar 2, Raanana, 4366504, Israel
- **Website**: https://purra.ai

### Links
- **Dashboard**: https://app.purra.ai
- **Terms**: https://purra.ai/terms
- **Privacy**: https://purra.ai/privacy
- **LinkedIn**: https://www.linkedin.com/company/purra
- **Instagram**: https://www.instagram.com/purra.ai

---

## Version History

### v1.0.0 (November 2025)
- ✅ Initial release
- ✅ 66 email templates across 8 categories
- ✅ 7-language support (English, Hebrew, Hindi, French, Chinese, Japanese, German)
- ✅ Single base template architecture
- ✅ Dynamic content generation system
- ✅ RTL support for Hebrew
- ✅ Full email client compatibility
- ✅ UTM tracking on all links
- ✅ Purra design language implementation

---

## License

© 2024-2025 Purra. All rights reserved.

This email template system is proprietary to Purra and is provided for internal use only.

---

**Last Updated:** November 25, 2025
**Version:** 1.0.0
**Maintained by:** Purra Engineering Team
