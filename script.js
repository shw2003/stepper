// script.js
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const leftContents = document.querySelectorAll(".left-image .content");
  const rightContents = document.querySelectorAll(".right-image .content");
  const progressBars = document.querySelectorAll(".progress-bar");
  const timerElement = document.getElementById("timer");
  const middlePart = document.getElementById("middle-part");

  let currentStep = 0;
  let timeLeft = 5;

  const timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.innerText = `Time Left: ${timeLeft}s`;
    } else {
      nextStep();
    }
  }, 1000);

  function nextStep() {
    if (currentStep < steps.length - 1) {
      updateStep(currentStep);
      currentStep++;
      activateStep(currentStep);
      timeLeft = 10;
    } else {
      clearInterval(timer);
      timerElement.innerText = "All steps completed!";
    }
  }

  function updateStep(step) {
    steps[step].classList.remove("active");
    leftContents[step].classList.remove("active");
    rightContents[step].classList.remove("active");
    steps[step].querySelector(".step-number").style.backgroundColor = "#CEBEFE";
    progressBars[step].style.backgroundColor = "#CEBEFE";
    middlePart.classList.remove("active");
  }

  function activateStep(step) {
    steps[step].classList.add("active");
    leftContents[step].classList.add("active");
    rightContents[step].classList.add("active");
    middlePart.classList.add("active");
  }

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      if (index <= currentStep) {
        steps.forEach((step, i) => {
          step.classList.remove("active");
          leftContents[i].classList.remove("active");
          rightContents[i].classList.remove("active");
          if (i < index) {
            step.querySelector(".step-number").style.backgroundColor =
              "#4caf50";
            progressBars[i].style.backgroundColor = "#CEBEFE";
          }
        });

        currentStep = index;
        activateStep(currentStep);
        timeLeft = 10;
      }
    });
  });

  activateStep(currentStep);
});
