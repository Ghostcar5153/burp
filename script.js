const resolutions = [
  { src: "144p.png", label: "144p" },
  { src: "240p.png", label: "240p" },
  { src: "480p.png", label: "480p" },
  { src: "720p.png", label: "720p" },
  { src: "ryan-gosling.mp4", label: "1080p" },
];

const heartImg = document.getElementById("heart");
const resolutionText = document.getElementById("resolution");
const dropdown = document.getElementById("resolution-dropdown");
const contentDiv = document.getElementById("content");

dropdown.addEventListener("change", (event) => {
  const selectedIndex = event.target.value;

  if (selectedIndex < resolutions.length - 1) {
    updateContent(selectedIndex);
  } else {
    playFullscreenVideo("ryan-gosling.mp4");
  }
});

function updateContent(index) {
  heartImg.style.opacity = "0";
  setTimeout(() => {
    heartImg.src = resolutions[index].src;
    heartImg.style.opacity = "1";
  }, 500);
}

function playFullscreenVideo(videoSrc) {
  contentDiv.innerHTML = `
    <video class="fullscreen-video" autoplay muted loop>
      <source src="${videoSrc}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <button id="close-video">X</button>
  `;

  const videoElement = contentDiv.querySelector("video");
  const closeButton = document.getElementById("close-video");

  videoElement.muted = false;

  closeButton.addEventListener("click", refreshPage);
}

function refreshPage() {
  location.reload(); 
}
