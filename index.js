function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: "Gabriel Cryslian",
        text: "Educação Musical & Produção",
        url: "https://gabrielcryslian.github.io/linktree/",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
}

const tiktokDiv = document.getElementById("tiktok-div");
const tagLinkTik = document.getElementById("tag-link-tt");
const tiktokMainDiv = document.getElementById("div-link-tt");

function toggleTiktok() {
  if (tiktokDiv.style.display === "none") {
    tiktokDiv.style.display = "block";
  } else {
    tiktokDiv.style.display = "none";
  }
}

