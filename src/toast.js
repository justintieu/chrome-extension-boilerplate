const Toast = (() => {
    let styleAdded = false;
    let container;
    const defaultDuration = 3000;

    // Initialize container and styles
    function init() {
        if (!container) {
            container = document.createElement("div");
            container.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                display: flex;
                flex-direction: column-reverse;
                gap: 10px;
                z-index: 9999;
            `;
            document.body.appendChild(container);
        }

        if (!styleAdded) {
            const style = document.createElement("style");
            style.textContent = `
                @keyframes slideIn {
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeOut {
                    to { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            styleAdded = true;
        }
    }

    // Create and show toast
    function show(message, options = {}) {
        init();

        const toast = document.createElement("div");
        toast.textContent = message;
        const duration = options.duration || defaultDuration;

        // Toast styling
        toast.style.cssText = `
            padding: 12px 24px;
            background: ${options.type === "error" ? "#f44336" : "#4CAF50"};
            color: white;
            border-radius: 4px;
            font-family: sans-serif;
            font-size: 14px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            opacity: 0;
            transform: translateY(100%);
            animation: slideIn 0.5s ease-out forwards, 
                      fadeOut 0.5s ease-out ${duration - 500}ms forwards;
            cursor: pointer;
        `;

        // Add to container
        container.appendChild(toast);

        // Auto-remove after duration
        setTimeout(() => {
            toast.remove();
        }, duration);

        // Optional click handler
        toast.addEventListener("click", () => {
            toast.remove();
        });
    }

    return { show };
})();

// Export for ES modules
export default Toast;

// For vanilla JS usage:
window.Toast = Toast;
