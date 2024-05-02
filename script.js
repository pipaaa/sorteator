const eventForm = document.getElementById('event-form');
const raffleContainer = document.getElementById('raffle-container');
const eventTitle = document.getElementById('event-title');
const team1NameDisplay = document.getElementById('team1-name-display');
const team2NameDisplay = document.getElementById('team2-name-display');
const playerInputs = document.getElementById('player-inputs');
const addPlayerButton = document.getElementById('add-player');
const generateRaffleButton = document.getElementById('generate-raffle');
const raffleResults = document.getElementById('raffle-results');

let playerCount = 0;
let players = [];

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const team1Name = document.getElementById('team1-name').value;
    const team2Name = document.getElementById('team2-name').value;

    eventTitle.textContent = eventName;
    team1NameDisplay.textContent = team1Name;
    team2NameDisplay.textContent = team2Name;

    raffleContainer.style.display = 'block';
    eventForm.style.display = 'none';
});

addPlayerButton.addEventListener('click', () => {
    playerCount++;

    const playerInput = document.createElement('input');
    playerInput.type = 'text';
    playerInput.placeholder = `Player ${playerCount}`;
    playerInput.id = `player${playerCount}`;

    playerInputs.insertBefore(playerInput, addPlayerButton);
});

generateRaffleButton.addEventListener('click', () => {
    players = [];

    for (let i = 1; i <= playerCount; i++) {
        const player = document.getElementById(`player${i}`).value;
        players.push(player);
    }

    if (players.length < 18) {
        alert('Please add at least 18 players to generate the raffle.');
        return;
    }

    raffleResults.innerHTML = '';

    const teamSize = 9;
    const teamCount = Math.ceil(players.length / teamSize);

    for (let i = 0; i < teamCount; i++) {
        const teamPlayers = players.splice(0, teamSize);
        const teamResult = document.createElement('div');
        teamResult.classList.add('team-result');

        teamResult.innerHTML = `
            <h3>Team ${i + 1}</h3>
            <ul>
                ${teamPlayers.map((player, index) => `<li>${index + 1}. ${player}</li>`).join('')}
            </ul>
        `;

        raffleResults.appendChild(teamResult);
    }

    playerInputs.style.display = 'none';
    generateRaffleButton.style.display = 'none';
});
