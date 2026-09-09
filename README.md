# Elora Dashboard APK

Standalone Android wrapper for the existing Elora Dashboard HTML interface.

## Included
- Existing `Elora_Dashboard.html` dashboard UI and JavaScript.
- Existing `supabase-config.js` connection configuration.
- Android WebView with JavaScript, DOM storage, cookies and file chooser support.
- Android Back navigates inside the dashboard when possible.
- Internet permission for Supabase/CDN access.

## Build
Use GitHub Actions or any Android SDK environment:

```bash
./gradlew assembleDebug
```

APK output:
`app/build/outputs/apk/debug/app-debug.apk`
