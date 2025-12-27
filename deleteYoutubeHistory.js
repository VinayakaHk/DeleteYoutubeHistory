// Get all c-wiz elements
cWizElements = document.querySelectorAll('c-wiz.xDtZAf');
let youtubeElements = [];

// First, collect all YouTube (not YouTube Music) elements
cWizElements.forEach(cWiz => {
    let serviceSpan = cWiz.querySelector('span.hJ7x8b');
    
    if (serviceSpan && serviceSpan.textContent.trim() === 'YouTube') {
        let deleteButton = cWiz.querySelector('button.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.mN1ivc[aria-label*="Delete activity item"]');
        
        if (deleteButton) {
            youtubeElements.push(deleteButton);
        }
    }
});

// Click each button with 1 second delay
let index = 0;
function clickNext() {
    if (index < youtubeElements.length) {
        youtubeElements[index].click();
        console.log(`Clicked delete button ${index + 1} of ${youtubeElements.length}`);
        index++;
        setTimeout(clickNext, 1000); // 1 second delay
    } else {
        console.log('Finished clicking all YouTube delete buttons');
    }
}

// Start the clicking process
clickNext();
