//selectors

const activeContainer = document.querySelector(".container.active");
const thankContainer = document.querySelector(".container.thank-you");
const inactiveClass = "inactive";

const ratingBtns = document.querySelectorAll(".rating-buttons .btn");
let selectedRating = "";

const submitBtn = document.querySelector("#submit");

let done = false;

//functions

function handleRatingClick(e) {
  if (selectedRating) selectedRating.classList.remove("selected");
  selectedRating = e.target;
  selectedRating.classList.add("selected");

  thankContainer.children[1].textContent = `You rated us ${selectedRating.textContent} out of 5 !`;
}

function handleSubmit() {
  if (!selectedRating) return;
  done = true;

  activeContainer.classList.add(inactiveClass);
  thankContainer.classList.remove(inactiveClass);
}

//event listeners
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingClick);
});

submitBtn.addEventListener("click", handleSubmit);
