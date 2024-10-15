document.addEventListener("DOMContentLoaded", () => {
    const profilePicture = document.getElementById("profile-picture");

    profilePicture.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.05;
        profilePicture.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
    }, 30);
});
