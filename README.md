# Delete YouTube History

> A JavaScript utility to bulk delete YouTube video watch history from Google My Activity while preserving YouTube Music history.

## ⚠️ Important Warnings

- **Security Notice**: This script requires console access to your Google Account. Always review code before pasting into the browser console to prevent malicious exploitation.
- **Maintenance**: Google dynamically assigns class names with each build. This script may require updates if class names change.
- **Irreversible**: Deleted history cannot be recovered. Proceed with caution.

## Overview

This repository provides a browser-based script that automates the deletion of YouTube video entries from your Google Activity page. The script:

- ✅ Deletes YouTube video watch history
- ✅ Preserves YouTube Music history (default behavior)
- ✅ Can be customized to target YouTube Music instead

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Access to your Google Account
- Active YouTube watch history

## Usage

### Step 1: Access Your YouTube Activity

Visit your Google My Activity page filtered for YouTube:
```
https://myactivity.google.com/myactivity?product=26
```

Or manually navigate:
1. Go to [myactivity.google.com](https://myactivity.google.com)
2. Click on **Filters**
3. Select **YouTube**

### Step 2: Load All Activity Items

Scroll to the bottom of the page to ensure all `<c-wiz>` elements are loaded. This ensures the script can access all your history entries.

### Step 3: Open Developer Tools

1. Press `F12` (or `Cmd+Option+I` on Mac)
2. Navigate to the **Console** tab
3. If you see a warning about pasting, type `allow pasting` to proceed

### Step 4: Run the Script

1. Copy the contents of [`deleteYoutubeHistory.js`](./deleteYoutubeHistory.js)
2. Paste into the console
3. Press `Enter` to execute

### Step 5: Monitor Progress

**Console Output**: Wait for the message:
```
Finished clicking all YouTube delete buttons
```

**Network Verification**: 
1. Switch to the **Network** tab
2. Filter by `batchexecute`
3. Wait for all requests to complete before closing the browser
4. This shows the actual backend deletion progress

## Customization

To delete **YouTube Music** history instead of YouTube videos:

1. Open `deleteYoutubeHistory.js`
2. Modify the selector to target YouTube Music entries
3. Update the filtering logic as needed

Refer to the HTML structure comments in the script for guidance on identifying the correct selectors.

## Technical Details

### HTML Structure

The script targets elements with specific class names and `jsname` attributes. Example structure:
```html
<c-wiz class="xDtZAf" jslog="64793; track:impression" 
       data-token="..." 
       data-date="20251226">
  <div class="k2bP7e YYajNd">
    <span class="hJ7x8b">YouTube</span>
    <button class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ mN1ivc">
      <!-- Delete button -->
    </button>
  </div>
</c-wiz>
```

### Updating Selectors

If the script stops working:

1. Open **Developer Tools** → **Inspector**
2. Examine the HTML structure of activity items
3. Update class names and selectors in the script accordingly
4. Test with a small subset of your history first

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Script doesn't run | Ensure you've typed `allow pasting` in console |
| No items deleted | Scroll to bottom to load all items first |
| Partial deletion | Check Network tab for failed `batchexecute` requests |
| Script error | Class names may have changed; update selectors |

## Contributing

Contributions are welcome! If Google updates their UI and breaks the script:

1. Fork the repository
2. Update the selectors in `deleteYoutubeHistory.js`
3. Test thoroughly
4. Submit a pull request with details about the changes

## Disclaimer

This tool is provided as-is for personal use. The authors are not responsible for:
- Accidental data loss
- Changes to Google's Terms of Service
- Account access issues resulting from misuse

Always backup important data before performing bulk deletions.

## License

MIT License - See [LICENSE](LICENSE) file for details

---

**Last Updated**: December 2024  
**Tested On**: Chrome 120+, Firefox 121+
