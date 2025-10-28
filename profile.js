const favoritePosts = document.querySelector(".favorite_post");

const likedPosts = document.cookie
  .split("; ")
  .find((row) => row.startsWith("liked_posts="))
  ?.split("=")[1];

favoritePosts.src = `img/photo${likedPosts}.png`;
