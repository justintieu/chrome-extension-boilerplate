import Toast from "./toast";
import "./styles/options.css";

document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("popupTitle");
    const saveButton = document.getElementById("saveSettings");

    // Load saved title
    chrome.storage.sync.get(["popupTitle"], (result) => {
        titleInput.value = result.popupTitle || "My Extension";
    });

    // Save settings
    saveButton.addEventListener("click", () => {
        const settings = {
            popupTitle: titleInput.value.trim(),
        };

        chrome.storage.sync.set(settings, () => {
            Toast.show("Settings saved!");
        });
    });

    // Live character counter
    titleInput.addEventListener("input", () => {
        const remaining = 30 - titleInput.value.length;
        document.querySelector(".text-gray-500").textContent =
            `${remaining} characters remaining`;
    });
});
