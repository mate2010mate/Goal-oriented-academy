const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    // Close all open answers
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.nextElementSibling.style.maxHeight = null;
        item.querySelector(".icon").textContent = "+";
      }
    });

    // Toggle the clicked answer
    const answer = question.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      question.querySelector(".icon").textContent = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.querySelector(".icon").textContent = "−";
    }
  });
});
