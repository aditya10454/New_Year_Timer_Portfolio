// Set the target date for New Year
const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

// Update the countdown timer every second
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Happy New Year!";
    }
}, 1000);

// New Year Resolutions: Add Items to List
const resolutionInput = document.getElementById("new-resolution");
const addResolutionBtn = document.getElementById("add-resolution-btn");
const resolutionList = document.getElementById("resolution-list");

addResolutionBtn.addEventListener("click", function () {
    const newResolution = resolutionInput.value.trim();

    if (newResolution) {
        // Create a new list item
        const li = document.createElement("li");
        li.textContent = newResolution;

        // Append the new resolution to the list
        resolutionList.appendChild(li);

        // Clear the input box
        resolutionInput.value = "";
    }
});

// Optional: Press Enter to add a resolution
resolutionInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addResolutionBtn.click();
    }
});
