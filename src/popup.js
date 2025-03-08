import "./styles/popup.css";

document.addEventListener("DOMContentLoaded", () => {
    // Load and set popup title
    chrome.storage.sync.get(["popupTitle"], (result) => {
        const titleElement = document.getElementById("popupTitle");
        titleElement.textContent = result.popupTitle || "My Extension";
    });

    // Handle options navigation
    document.getElementById("options-link").addEventListener("click", (e) => {
        e.preventDefault();
        chrome.runtime.openOptionsPage();
    });

    // Handle footer settings link
    document
        .querySelector('a[href="options.html"]')
        .addEventListener("click", (e) => {
            e.preventDefault();
            chrome.runtime.openOptionsPage();
        });

    // Tab functionality
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    function activateTab(tabId) {
        // Deactivate all tabs
        tabButtons.forEach((button) => {
            button.setAttribute("aria-selected", "false");
        });
        tabContents.forEach((content) => {
            content.classList.add("hidden");
        });

        // Activate selected tab
        const activeTab = document.querySelector(tabId);
        const activeButton = document.querySelector(
            `[data-tab-target="${tabId}"]`,
        );
        if (activeTab && activeButton) {
            activeTab.classList.remove("hidden");
            activeButton.setAttribute("aria-selected", "true");
        }
    }

    // Click handlers for tabs
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab-target");
            activateTab(tabId);
        });
    });

    // Activate first tab by default
    activateTab("#status-tab");

    document
        .querySelector("#something-awesome-button")
        .addEventListener("click", (e) => {
            e.preventDefault();
            alert("Something awesome ✨");
        });
});
