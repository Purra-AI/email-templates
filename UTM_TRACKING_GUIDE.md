# UTM Tracking Guide for Purra Email Templates

All email templates now include automatic UTM tracking for analytics.

## 📊 UTM Parameters Included

Every link in the email templates includes these UTM parameters:
- **utm_source**: `email` (traffic comes from email)
- **utm_medium**: `email` (communication channel)
- **utm_campaign**: `{{ campaignName }}` (specific campaign identifier)

## 🔗 Which Links Are Tracked

### 1. Call-to-Action (CTA) Button
```html
<a href="{{ ctaUrl }}?utm_source=email&utm_medium=email&utm_campaign={{ campaignName }}">
  {{ ctaText }}
</a>
```

**Example**:
```
Input: ctaUrl = "https://app.purra.ai/dashboard"
       campaignName = "welcome_email"

Output: https://app.purra.ai/dashboard?utm_source=email&utm_medium=email&utm_campaign=welcome_email
```

### 2. Terms & Privacy Policy
```html
<a href="https://purra.ai/terms?utm_source=email&utm_medium=email&utm_campaign={{ campaignName }}">
  Terms & Privacy Policy
</a>
```

### 3. Powered By Link
```html
<a href="https://purra.ai/?utm_source=email&utm_medium=email&utm_campaign={{ campaignName }}">
  Purra.ai
</a>
```

### 4. Social Media Links
Social media links (LinkedIn, Instagram) do NOT include UTM parameters as these are external platforms.

## 📝 Campaign Naming Convention

Use descriptive, lowercase campaign names with underscores:

### User Lifecycle Emails
```
welcome_email           - Welcome email for new users
onboarding_day1         - First day onboarding
onboarding_day3         - Third day onboarding
onboarding_day7         - Week 1 check-in
```

### Product Updates
```
product_update_jan2024  - Monthly product update
feature_announcement    - New feature launch
```

### Marketing Campaigns
```
newsletter_jan2024      - Monthly newsletter
webinar_invite_q1       - Quarterly webinar
promo_black_friday      - Promotional campaign
```

### Transactional Emails
```
report_ready            - Due diligence report ready
subscription_renewal    - Subscription renewal reminder
invoice_receipt         - Invoice/receipt email
password_reset          - Password reset email
```

### Re-engagement
```
reactivation_30d        - 30-day inactive users
win_back_campaign       - Win-back campaign
trial_expiring          - Trial expiration warning
```

## 🔧 Implementation Example

### Using Template Variables
```javascript
const emailData = {
  emailTitle: "Welcome to Purra!",
  headerTitle: "Welcome to Purra!",
  headerSubtitle: "Your Supply Chain Intelligence Journey Begins",
  userName: "John Doe",
  mainContent: "We're thrilled to have you...",
  ctaUrl: "https://app.purra.ai/dashboard",
  ctaText: "Explore Your Dashboard",
  campaignName: "welcome_email",  // ← Campaign identifier
  additionalContent: "Our team is here...",
  unsubscribeUrl: "https://app.purra.ai/unsubscribe?user=123"
};

// Replace variables in template
let emailHtml = template
  .replace(/{{ emailTitle }}/g, emailData.emailTitle)
  .replace(/{{ userName }}/g, emailData.userName)
  .replace(/{{ ctaUrl }}/g, emailData.ctaUrl)
  .replace(/{{ campaignName }}/g, emailData.campaignName)
  // ... replace other variables
```

### Final Link Output
```
Original CTA URL: https://app.purra.ai/dashboard
Final Link: https://app.purra.ai/dashboard?utm_source=email&utm_medium=email&utm_campaign=welcome_email
```

## 📈 Tracking in Google Analytics

### GA4 Setup
1. Go to **Reports** > **Acquisition** > **Traffic acquisition**
2. Add secondary dimension: **Session campaign**
3. Filter by: `Session source / medium = email / email`

### View Email Campaign Performance
```
Source: email
Medium: email
Campaign: welcome_email, newsletter_jan2024, etc.
```

### Key Metrics to Track
- **Users**: How many people clicked
- **Sessions**: Total email sessions
- **Engagement rate**: User engagement from email
- **Conversions**: Goal completions from email
- **Bounce rate**: Quality of email traffic

## 🎯 Best Practices

### 1. Consistent Naming
✅ **Good**: `welcome_email`, `newsletter_jan2024`, `feature_announcement`
❌ **Bad**: `WelcomeEmail`, `Newsletter-January-2024`, `Feature Announcement`

### 2. Descriptive Names
✅ **Good**: `trial_expiring_7d` (clear what it is)
❌ **Bad**: `email_123` (not descriptive)

### 3. Include Time Periods
✅ **Good**: `newsletter_jan2024`, `promo_q1_2024`
❌ **Bad**: `newsletter`, `promo` (not specific)

### 4. Use Underscores, Not Spaces
✅ **Good**: `black_friday_sale`
❌ **Bad**: `black friday sale` (breaks URLs)

### 5. Lowercase Only
✅ **Good**: `welcome_email`
❌ **Bad**: `Welcome_Email` (inconsistent in analytics)

## 🔍 Testing UTM Parameters

### Test Before Sending
```bash
# Check if UTM parameters are properly added
curl -s "https://app.purra.ai/dashboard?utm_source=email&utm_medium=email&utm_campaign=welcome_email"
```

### Verify in Browser
1. Open email in inbox
2. Click a tracked link
3. Check browser URL includes UTM parameters
4. Verify in Google Analytics Real-Time reports

## 📊 Sample Reports

### Email Campaign Performance Report

| Campaign Name | Users | Sessions | Engagement Rate | Conversions |
|--------------|-------|----------|-----------------|-------------|
| welcome_email | 1,245 | 1,456 | 68% | 234 |
| newsletter_jan2024 | 2,130 | 2,456 | 45% | 156 |
| report_ready | 890 | 1,023 | 82% | 445 |
| trial_expiring_7d | 456 | 523 | 71% | 89 |

## 🚫 Links NOT Tracked

- **Unsubscribe links**: User privacy, no tracking needed
- **Social media icons**: External platforms (LinkedIn, Instagram)

## 📝 Variable Reference

```
{{ campaignName }} - Required variable for all templates
```

**Replace with actual campaign name when sending:**
```javascript
.replace(/{{ campaignName }}/g, 'welcome_email')
```

## 🔗 Related Documentation

- [PURRA_ASSETS_AND_LINKS.md](PURRA_ASSETS_AND_LINKS.md) - All links and assets
- [README.md](README.md) - Template usage guide
- [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) - Testing checklist

---

**Last Updated**: November 2024
**Maintained By**: Purra Marketing Team
