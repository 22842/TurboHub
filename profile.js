const favoritePosts = document.querySelector(".favorite_post");

const likedPosts = document.cookie
  .split("; ")
  .filter((row) => row.startsWith("liked_posts"))
