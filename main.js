const filter_buttons = document.querySelectorAll(".filter-button");
const moto_cards = document.querySelectorAll(".posts .card");
const like_buttons = document.querySelectorAll(".posts .card .like");

function displayCards(filter) {
  moto_cards.forEach((card) => {
    card.style.display = "none";
    // відповідно до фільтру показуємо потрібні картки
    // якщо фільтр "all", показуємо всі картки
    // використати if-else
  });
}

filter_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    filter_buttons.forEach((btn) => btn.classList.remove("active"));
    // додаємо клас "active" до натиснутої кнопки
    // викликаємо displayCards з відповідним фільтром
  });
});

like_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.parentElement.dataset.id;

    document.cookie = `liked_posts=${id};`;

    alert("Ви лайкнули цей пост! \n Зможете переглянути його у вашому профілі.");
  });
});
