const tabs = document.querySelectorAll('[id^="tab"]');
const tabLinks = document.querySelectorAll(".tab a");

// Show the tab corresponding to the URL anchor or the first tab
const showTab = () => {
    const hash = window.location.hash;
    const tabToShow = hash ? document.querySelector(hash) : tabs[0];
    tabs.forEach(tab => {
        if (tab === tabToShow) {
            tab.classList.remove('hidden');
        } else {
            tab.classList.add('hidden');
        }
    });

    // Update active tab link
    tabLinks.forEach(link => {
        const href = link.getAttribute('href');
        const parentTab = link.parentElement;
        if (href === hash || (!hash && href === "#tab1")) {
            link.querySelector('p').classList.add('text-[#2BDAFA]');
            parentTab.classList.add('active');
        } else {
            link.querySelector('p').classList.remove('text-[#2BDAFA]');
            parentTab.classList.remove('active');
        }
    });
};

// Show the right tab on page load and on hash change
window.addEventListener('load', showTab);
window.addEventListener('hashchange', showTab);

// Active tab link handling
tabLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remove the active class from all tab links
        tabLinks.forEach(link => {
            link.querySelector('p').classList.remove('text-[#2BDAFA]');
            link.parentElement.classList.remove('active');
        });

        // Add the active class to the clicked tab link
        link.querySelector('p').classList.add('text-[#2BDAFA]');
        link.parentElement.classList.add('active');
    });
});
