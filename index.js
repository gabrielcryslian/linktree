const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }
  
  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
      // resultPara.textContent = 'MDN shared successfully';
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  });

// const shareBtn = document.querySelector('.share-btn');
// const shareOptions = document.querySelector('.share-options');

// shareBtn.addEventListener('click', () => {
//     shareOptions.classList.toggle('active');
// })

// const whatsappBtn = document.querySelector(".whatsapp-btn");
// const instagramBtn = document.querySelector(".instagram-btn");
// const twitterBtn = document.querySelector(".twitter-btn");
// const linkedinBtn = document.querySelector(".linkedin-btn");



// function init() {
//     let postUrl = encodeURI(document.location.href);
//     let postTitle = encodeURI("Hi everyone, please check this out: ");

//     whatsappBtn.setAttribute(
//         "href",
//         `https://wa.me/?text=${postTitle} ${postUrl}`
//     );

//     twitterBtn.setAttribute(
//         "href",
//         `https://twitter.com/share?url=${postUrl}&text=${postTitle}` 
//     );
// }

// init()