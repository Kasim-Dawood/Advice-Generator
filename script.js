const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector("#btn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
      // console.log(response.json());
    })
    .then((adviceData) => {
      const adviceNumber = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceId.textContent = adviceNumber;
      adviceText.innerHTML = `<p> " ${advice} "</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", function () {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
