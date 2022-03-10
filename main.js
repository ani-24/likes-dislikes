const likeCounterWrapper = document.querySelector(".likes");
const dislikeCounterWrapper = document.querySelector(".dislikes");

const likeCounter = document.querySelector(".like-counter");
const dislikeCounter = document.querySelector(".dislike-counter");

let likes = 0;
let dislikes = 0;

likeCounterWrapper.addEventListener("click", () => {
  likes++;
  likeCounter.innerHTML = likes;
  if (dislikes > 0) {
    dislikes--;
    dislikeCounter.innerHTML = dislikes;
  }
});

dislikeCounterWrapper.addEventListener("click", () => {
  dislikes++;
  dislikeCounter.innerHTML = dislikes;
  if (likes > 0) {
    likes--;
    likeCounter.innerHTML = likes;
  }
});
