const steps = [
  {
    label: "reto mental",
    icon: "🧠",
    text: "¿Crees que puedo adivinar el número en el que estás pensando?",
    sub: "No importa cuál elijas... siempre llegarás al mismo resultado.",
    btn: "Acepto el reto"
  },
  {
    label: "paso 1 de 5",
    text: "Piensa en cualquier número",
    sub: "Puede ser del 1 al 1000. Nadie más necesita saberlo.",
    btn: "Ya lo tengo"
  },
  {
    label: "paso 2 de 5",
    text: "Multiplícalo por 2",
    sub: "Tómate el tiempo que necesites.",
    btn: "Listo"
  },
  {
    label: "paso 3 de 5",
    text: "Súmale 8",
    sub: "Recuerda el resultado.",
    btn: "Hecho"
  },
  {
    label: "paso 4 de 5",
    text: "Divide el resultado entre 2",
    sub: "¿Ya tienes el nuevo número?",
    btn: "Sí"
  },
  {
    label: "paso 5 de 5",
    text: "Réstale el número original",
    sub: "El que pensaste al inicio.",
    btn: "Tengo mi resultado"
  },
  {
    label: "revelación",
    reveal: true,
    number: "4",
    msg: "Sin importar el número que elegiste... el resultado siempre es 4.",
    btn: "Intentar de nuevo"
  }
];

let current = 0;

function render() {
  const s = steps[current];
  const pct = Math.round((current / (steps.length - 1)) * 100);
  document.getElementById("progress").style.width = pct + "%";

  const screen = document.getElementById("screen");
  screen.innerHTML = "";
  screen.classList.remove("fade-in");
  void screen.offsetWidth;
  screen.classList.add("fade-in");

  if (s.reveal) {
    screen.innerHTML = `
      <div class="step-label">${s.label}</div>
      <div class="big-number">${s.number}</div>
      <div class="reveal-msg">${s.msg}</div>
      <button class="btn-next" onclick="restart()">${s.btn}</button>
    `;
  } else {
    screen.innerHTML = `
      <div class="step-label">${s.label}</div>
      ${s.icon ? `<div class="emoji-icon">${s.icon}</div>` : ""}
      <div class="step-text">${s.text}</div>
      <div class="step-sub">${s.sub}</div>
      <button class="btn-next" onclick="next()">${s.btn}</button>
    `;
  }
}

function next() {
  if (current < steps.length - 1) { current++; render(); }
}

function restart() {
  current = 0; render();
}

render();