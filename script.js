document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const removeButton = document.getElementById("removeButton");
    const elementContainer = document.getElementById("elementContainer");
    const memoryUsage = document.getElementById("memoryUsage");

    let elementCount = 0;
    let heapMemoryUsage = 0;
    const memoryLimit = 50 * 1024 * 1024; // 50 MB in bytes

    // Function to generate elements
    generateButton.addEventListener("click", function () {
        for (let i = 0; i < 10000; i++) {
            const element = document.createElement("div");
            element.innerText = "Element " + (++elementCount);
            elementContainer.appendChild(element);

            // Check heap memory usage
            if (performance.memory.usedJSHeapSize >= memoryLimit) {
                alert("Memory usage has exceeded 50 MB. Please optimize your actions to reduce memory consumption.");
                break;
            }
        }

        // Update memory usage display
        updateMemoryUsage();
    });

    // Function to remove elements
    removeButton.addEventListener("click", function () {
        elementContainer.innerHTML = "";
        elementCount = 0;

        // Update memory usage display
        updateMemoryUsage();
    });

    // Function to update memory usage display
    function updateMemoryUsage() {
        heapMemoryUsage = performance.memory.usedJSHeapSize;
        memoryUsage.textContent = "Heap Memory Usage: " + (heapMemoryUsage / (1024 * 1024)).toFixed(2) + " MB";
    }
});
