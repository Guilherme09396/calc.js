const input = document.getElementById("input");
let resultInput = document.getElementById("result");
let main = document.querySelector("main");
let root = document.querySelector(":root")

const allowedKeys = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"];

const calculate = () => {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  let result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error")
}

document.querySelectorAll(".charKey").forEach((charkey) => {
  charkey.addEventListener("click", (e) => {
    input.value = input.value + e.currentTarget.dataset.value;
  })
})

document.getElementById("equal").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus()
});

input.addEventListener("keydown", (ev) => {
  ev.preventDefault();

  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  }
  if(ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if(ev.key === "Enter") {
    calculate()
  }
})


document.getElementById("themeSwitcher").addEventListener("click", () => {
  if(main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})


document.getElementById("copyToClipboard").addEventListener("click", (ev) => {
  if(ev.currentTarget.innerText === "Copied!") {
    ev.currentTarget.innerText = "Copy";
    ev.currentTarget.classList.remove("success")
  } else {
    navigator.clipboard.writeText(resultInput.value)
    ev.currentTarget.innerText = "Copied!"
    ev.currentTarget.classList.add("success")
  }
  
})