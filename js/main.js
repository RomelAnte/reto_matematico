const steps = [
  {
    label: "umbral",
    symbol: "IV",
    text: "Crees que puedo adivinar el numero que guardas en la mente",
    sub: "No importa cual elijas. Si sigues el ritual, todos los caminos terminan igual.",
    btn: "Entrar al enigma"
  },
  {
    label: "paso 1 de 5",
    symbol: "I",
    text: "Piensa en cualquier numero",
    sub: "Puede ser pequeno o enorme. Solo asegurate de recordarlo.",
    btn: "Ya lo tengo"
  },
  {
    label: "paso 2 de 5",
    symbol: "II",
    text: "Multiplicalo por 2",
    sub: "Hazlo con calma. Nadie ve tu resultado.",
    btn: "Continuar"
  },
  {
    label: "paso 3 de 5",
    symbol: "III",
    text: "Sumale 8",
    sub: "No sueltes el numero. Todavia no termina.",
    btn: "Seguir"
  },
  {
    label: "paso 4 de 5",
    symbol: "IV",
    text: "Divide el resultado entre 2",
    sub: "Estas muy cerca de la respuesta oculta.",
    btn: "Listo"
  },
  {
    label: "paso 5 de 5",
    symbol: "V",
    text: "Restale el numero original",
    sub: "Ese primer numero que elegiste en silencio.",
    btn: "Revelar"
  },
  {
    label: "revelacion",
    reveal: true,
    number: "4",
    msg: "Sin importar el numero que elegiste, el resultado final siempre es 4.",
    btn: "Repetir el ritual"
  }
];

const state = {
  current: 0,
  audioEnabled: false,
  audioStarted: false
};

const progressEl = document.getElementById("progress");
const screenEl = document.getElementById("screen");
const audioEl = document.getElementById("mysteryAudio");
const audioToggleEl = document.getElementById("audioToggle");

audioEl.volume = 0.35;

function updateAudioButton() {
  audioToggleEl.textContent = state.audioEnabled ? "Silenciar audio" : "Activar audio";
  audioToggleEl.setAttribute("aria-pressed", String(state.audioEnabled));
}

async function playAudio() {
  try {
    await audioEl.play();
    state.audioEnabled = true;
    state.audioStarted = true;
  } catch (error) {
    state.audioEnabled = false;
  }

  updateAudioButton();
}

function stopAudio() {
  audioEl.pause();
  state.audioEnabled = false;
  updateAudioButton();
}

function ensureAudioFromInteraction() {
  if (!state.audioStarted) {
    playAudio();
  }
}

function render() {
  const step = steps[state.current];
  const pct = Math.round((state.current / (steps.length - 1)) * 100);

  progressEl.style.width = `${pct}%`;
  screenEl.classList.remove("fade-in");
  void screenEl.offsetWidth;
  screenEl.classList.add("fade-in");

  if (step.reveal) {
    screenEl.innerHTML = `
      <div class="step-card">
        <p class="step-label">${step.label}</p>
        <p class="big-number">${step.number}</p>
        <p class="reveal-msg">${step.msg}</p>
        <button class="btn-next" type="button" data-action="restart">${step.btn}</button>
      </div>
    `;
  } else {
    screenEl.innerHTML = `
      <div class="step-card">
        <p class="step-label">${step.label}</p>
        <div class="step-symbol" aria-hidden="true">${step.symbol}</div>
        <h2 class="step-text">${step.text}</h2>
        <p class="step-sub">${step.sub}</p>
        <button class="btn-next" type="button" data-action="next">${step.btn}</button>
      </div>
    `;
  }

  const actionButton = screenEl.querySelector("[data-action]");

  actionButton.addEventListener("click", () => {
    ensureAudioFromInteraction();

    if (actionButton.dataset.action === "restart") {
      restart();
      return;
    }

    next();
  });
}

function next() {
  if (state.current < steps.length - 1) {
    state.current += 1;
    render();
  }
}

function restart() {
  state.current = 0;
  render();
}

audioToggleEl.addEventListener("click", () => {
  if (state.audioEnabled) {
    stopAudio();
    return;
  }

  playAudio();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden && !audioEl.paused) {
    audioEl.dataset.resumeOnFocus = "true";
    audioEl.pause();
    return;
  }

  if (!document.hidden && audioEl.dataset.resumeOnFocus === "true" && state.audioEnabled) {
    audioEl.dataset.resumeOnFocus = "false";
    playAudio();
  }
});

updateAudioButton();
render();
