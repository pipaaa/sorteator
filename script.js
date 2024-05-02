const continueBtn = document.getElementById("continue-btn");
const modeSelector = document.getElementById("mode-selector");
const teamSizeSelector = document.getElementById("team-size-selector");
const nextBtn = document.getElementById("next-btn");
const participantsInput = document.getElementById("participants-input");
const generateBtn = document.getElementById("generate-btn");
const eventNameDisplay = document.getElementById("event-name-display");
const teamDisplay1 = document.getElementById("team-display-1");
const teamDisplay2 = document.getElementById("team-display-2");

continueBtn.addEventListener("click", () => {
  const eventName = document.getElementById("event-name").value;
  if (eventName.trim() === "") return;
  introScreen.classList.add("hidden");
  modeSelector.classList.remove("hidden");
});

const modeButtons = document.getElementsByClassName("mode-btn");
for (const modeButton of modeButtons) {
  modeButton.addEventListener("click", () => {
    const mode = modeButton.dataset.mode;
    if (mode === "team-vs-team") {
      modeSelector.classList.add("hidden");
      teamSizeSelector.classList.remove("hidden");
    } else {
      // handle all-vs-all mode
    }
  });
}

const teamSizeButtons = document.getElementsByClassName("team-size-btn");
for (const teamSizeButton of teamSizeButtons) {
  teamSizeButton.addEventListener("click", () => {
    const teamSize = teamSizeButton.dataset.teamSize;
    if (teamSize === "team-vs-team") {
      teamSizeSelector.classList.add("hidden");
      teamsScreen.classList.remove("hidden");
    } else {
      // handle other team sizes
    }
  });
}

nextBtn.addEventListener("click", () => {
  const teamName1 = document.getElementById("team-name-1").value;
  const teamName2 = document.getElementById("team-name-2").value;
  if (teamName1.trim() === "" || teamName2.trim() === "") return;
  teamsScreen.classList.add("hidden");
  participantsScreen.classList.remove("hidden");
});

generateBtn.addEventListener("click", () => {
  const participants = participantsInput.value
    .split("\n")
    .map((participant) => participant.trim())
    .filter((participant) => participant !== "");
  if (participants.length < 4) return;
  participantsScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  eventNameDisplay.textContent = document.getElementById("event-name").value;
  teamDisplay1.textContent =teamName1;
  teamDisplay2.textContent = teamName2;
  // generate teams based on participants
});
