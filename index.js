document.getElementById("heartButton").addEventListener("click", function() {
    // Trigger confetti
    
    confetti();

    // Show popup
    document.getElementById("popup").style.display = "flex";
});

function closePopup() {
    // Hide popup
    document.getElementById("popup").style.display = "none";
}
