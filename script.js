const optionMenu = document.querySelector(".select_menu"),
  selectBtn = optionMenu.querySelector(".select"),
  options = optionMenu.querySelector(".option"),
  sBtn_text = optionMenu.querySelector(".join_meeting");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {});
});
