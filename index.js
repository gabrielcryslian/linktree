const shareData = {
    title: 'Gabriel Cryslian',
    text: 'Educação Musical & Produção',
    url: 'https://gabrielcryslian.github.io/linktree/'
  }
  
  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
      // resultPara.textContent = 'MDN shared successfully';
    } catch (err) {
      // resultPara.textContent = `Error: ${err}`;
      shareDialog.classList.add('is-open');
    } 
  });