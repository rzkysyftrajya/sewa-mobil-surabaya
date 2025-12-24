# Google Ads Security Compliance Plan

## ANALYSIS

Current issues causing Google Ads rejection:

1. **Content-Security-Policy meta tag** - blocking Google Ads scripts
2. **X-Content-Type-Options meta tag** - restrictive security header
3. **X-XSS-Protection meta tag** - outdated security header
4. **Referrer-Policy meta tag** - should be HTTP header only
5. **Active Service Worker** - intercepting requests and caching

## ACTIONS REQUIRED

### 1. REMOVE ALL SECURITY META TAGS

- [ ] Remove Content-Security-Policy meta tag
- [ ] Remove X-Content-Type-Options meta tag
- [ ] Remove X-XSS-Protection meta tag
- [ ] Remove Referrer-Policy meta tag

### 2. DISABLE SERVICE WORKER

- [ ] Remove all service worker registration code
- [ ] Remove service worker file or empty it completely
- [ ] Ensure no fetch interception or caching

### 3. PRESERVE GOOGLE TAG

- [ ] Keep Google Tag (AW-17057397691) intact
- [ ] Ensure no CSP blocking Google Ads domains

### 4. HTTP HEADERS CONFIGURATION

After deployment, server should set:

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## COMPLIANCE STATUS

- **Current**: ❌ Blocked by security meta tags
- **Target**: ✅ Google Ads review-safe environment
- **Method**: Remove all meta-based security, move to HTTP headers
