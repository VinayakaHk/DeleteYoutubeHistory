# DeleteYoutubeHistory

This repository contains a JavaScript snippet to automate the deletion of YouTube watch history from `myactivity.google.com`.

> **Note:** By default, this script targets standard YouTube videos and **leaves YouTube Music history untouched**. However, the script can be easily customized to target YouTube Music exclusively if desired.

## ⚠️ Disclaimer

**Google uses dynamic classnames.** Google frequently updates the class names in their HTML structure. If this script does not work, you may need to inspect the page source and update the selectors in the script (see the [Maintenance](#maintenance) section below).

**Security Warning:** You will be instructed to paste code into your browser's Developer Console. Please ensure you have reviewed the source code of this script to understand what it does before running it.

## Features

-   Bulk delete YouTube watch history items.
-   Selective preservation of YouTube Music history (configurable).
-   Client-side execution—no backend or API keys required.

## Prerequisites

-   A web browser (Chrome, Firefox, Edge, etc.)
-   A Google Account with YouTube history
-   Basic understanding of how to open Browser Developer Tools

## Usage

Follow these steps to run the script:

1.  **Navigate to Activity Page**
    Go to the YouTube filter page on Google My Activity:
    [https://myactivity.google.com/u/1/myactivity?pageId=none&q=%22YouTube%22&product=26](https://myactivity.google.com/u/1/myactivity?pageId=none&q=%22YouTube%22&product=26)
    
    *Alternatively, open `myactivity.google.com`, click Filters, and select "YouTube".*

2.  **Load History**
    **Important:** Scroll all the way to the bottom of the page. This ensures that all history items are loaded into the DOM as `c-wiz` elements before the script runs.

3.  **Open Developer Tools**
    -   Right-click anywhere on the page and select **Inspect**, or press `F12` / `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac).
    -   Go to the **Console** tab.

4.  **Allow Pasting (if required)**
    If you see a warning in the console saying "Warning: Don’t paste code...", type `allow pasting` and press Enter.

5.  **Run the Script**
    Copy the contents of `deleteYoutubeHistory.js` and paste it into the console. Press Enter to run.

6.  **Monitor Progress**
    -   Watch the console for status messages.
    -   Once you see the message `Finished clicking all YouTube delete buttons`, **do not close the browser immediately.**

7.  **Verify Deletion**
    -   Switch to the **Network** tab in Developer Tools.
    -   Filter by `batchexecute`.
    -   Wait until you see these network requests complete. This indicates the actual backend deletion process is finishing.

## Customization

### Delete YouTube Music (instead of saving it)
If you want to delete YouTube Music history while keeping standard YouTube videos, you will need to modify the selectors in the script.

1.  Open the **Inspector** (Elements) tab in Developer Tools.
2.  Look for the container `div`s representing the items you want to delete.
3.  Identify the specific classnames or text that distinguishes "YouTube Music" from standard "YouTube".
4.  Update the query selector in `deleteYoutubeHistory.js` to target those specific elements.

## Maintenance

If the script stops working, it is likely due to Google changing their CSS classnames. You can update the script by finding the new selectors:

1.  Open the page and inspect the history item you want to delete.
2.  Locate the `c-wiz` or container `div`.
3.  Identify the classes used for the delete button or the specific service label (e.g., `YouTube` vs `YouTube Music`).

<details>
<summary>Example HTML Structure (Reference)</summary>

The script targets elements that look similar to the structure below. You may need to update the classnames (e.g., `k2bP7e`, `YYajNd`) if they change in your browser view.

```html
<c-wiz class="xDtZAf" jslog="64793; track:impression" ...>
    <div jsname="MFYZYe" class="GqCJpe u2cbPc LDk2Pd" aria-label="Card showing an activity from YouTube" role="listitem" ...>
        <div class="k2bP7e YYajNd">
            <div class="ztN3hd">
                <div class="F96K3d">
                    <!-- Service Name (YouTube or YouTube Music) -->
                    <span jsname="eo0svb" ... class="hJ7x8b">YouTube</span>
                </div>
                <!-- Delete Button -->
                <div class="YxbmAc">
                    <button ... jsaction="click:cOuCgd ...">...</button>
                </div>
            </div>
        </div>
    </div>
</c-wiz>
```

</details>

## Troubleshooting

**Script says it finished, but items are still there.**
-   Check the **Network** tab. If you don't see `batchexecute` requests, the delete buttons may not have been clicked.
-   Check the **Console** for red error messages indicating that elements were not found (likely due to classnames changing).

**"Delete All" button vs Individual Delete**
-   This script simulates clicking the individual "X" or delete button on specific cards. It does not click the global "Delete all activity" button to ensure it respects the YouTube vs. YouTube Music filter logic.

## License

This project is open source and available for educational purposes. Use at your own risk.
