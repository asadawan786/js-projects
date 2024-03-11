let fullImage = document.getElementById("fullImgBox");
let mainimg = document.getElementById("mainimg");
let closeBox = document.getElementById("closeImg");

function activeThumb(pic) {
  fullImage.style.display = "flex";
  mainimg.src = pic;
};

closeBox.onclick = function removeActive() {
  fullImage.style.display = "none";
};

//we can also close box using window click event
window.addEventListener('click', (event) => {
  if (event.target === fullImage) {
    fullImage.style.display = 'none';
  }
});