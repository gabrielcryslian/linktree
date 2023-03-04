// This is the share function
  function share(){
    if (navigator.share !== undefined) {
      navigator.share({
        title: 'Gabriel Cryslian',
        text: 'Educação Musical & Produção',
        url: 'https://gabrielcryslian.github.io/linktree/'
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
  }

  // This is the function about the tiktok embed link
  const tiktokDiv = document.getElementById("tiktok-div");
  
  function toggleTiktok() {
    if (tiktokDiv.style.display === "none") {
      tiktokDiv.style.display = "block";
    } else {
      tiktokDiv.style.display = "none";
    }
  }