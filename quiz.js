function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  // Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    // Answer is correct
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    // Answer is incorrect
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
