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

  const divTiktok = document.getElementById('tiktok-div')
  divTiktok.style.display = 'none'

  // This is the function about the tiktok embed link 
  function toggleTiktok() {
    const tiktokDiv = document.getElementById("tiktok-div");
    if (tiktokDiv.style.display === "none") {
      tiktokDiv.style.display = "block";
    } else {
      tiktokDiv.style.display = "none";
    }
  }