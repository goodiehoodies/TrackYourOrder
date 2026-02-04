document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("valentine-video");
  const videoWrapper = document.getElementById("video-wrapper");

  const questionSection = document.getElementById("valentine-content");
  const questionText = document.getElementById("question-text");

  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");

  // When video ends
  video.addEventListener("ended", () => {
    // Hide video
    videoWrapper.style.display = "none";

    // Show first question
    questionSection.classList.remove("hidden");
  });

  // YES → show second question
  yesBtn.addEventListener("click", () => {
    questionText.innerHTML = `
      If you’re comfortable…<br>
      let’s talk about this.
    `;

    // Remove buttons after YES
    document.querySelector(".button-group").style.display = "none";
  });

  // NO → disappear
  noBtn.addEventListener("click", () => {
    noBtn.style.transition = "opacity 0.4s ease";
    noBtn.style.opacity = "0";
    setTimeout(() => {
      noBtn.style.display = "none";
    }, 400);
  });

});
