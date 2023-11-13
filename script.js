document.addEventListener("DOMContentLoaded", function () {
    // Simulate a short loading time
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.opacity = "1";
        document.getElementById("main-content").classList.remove("hidden");
    }, 2000);
});
