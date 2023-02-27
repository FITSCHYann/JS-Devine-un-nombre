let error = document.querySelector(".text-danger");
let input = document.querySelector("#prix");
let form = document.querySelector("#formulaire");
let btn = document.querySelector("button");
let randomNumber;
let coup = 0;

error.style.display = "none";

randomNumber = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;

function verifier(nb) {
  let instruction = document.createElement("div");
  instruction.className = "instruction";

  if (nb > randomNumber) {
    instruction.textContent = "#" + coup + ": " + "  C'est moin que " + nb;
    instruction.className = "instruction moins";
  } else if (nb < randomNumber) {
    instruction.textContent = "#" + coup + ": " + "  C'est plus que " + nb;
    instruction.className = "instruction plus";
  } else {
    instruction.textContent =
      "Numero gagnant: " + nb + " C'est gagné !! en " + coup + " coups";
    instruction.className = "instruction fini";
  }

  document.querySelector(".instructions").prepend(instruction);
}

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == "") {
    input.value = "";
    input.style.borderColor = "red";
  } else {
    nb = input.value;
    input.value = "";
    input.style.display = "silver";
    coup++;
    verifier(nb);
  }
});
