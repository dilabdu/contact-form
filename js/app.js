document.getElementById("myForm").addEventListener("submit", function(event) {
  const nameInput = document.getElementById("name");
  const errorMessage = document.getElementById("form__label__error");

  // Agar input bo'sh bo'lsa, xatolikni ko'rsatamiz
  if (nameInput.value.trim() === "") {
    event.preventDefault(); // Formani yuborishni to'xtatish
    errorMessage.style.display = "block"; // Xatolikni ko'rsatish
  } else {
    errorMessage.style.display = "none"; // Xatolikni yashirish
  }
});
