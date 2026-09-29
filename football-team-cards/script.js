const headCoach = document.querySelector("#head-coach");
const team = document.querySelector("#team");
const year = document.querySelector("#year");
const selectContainer = document.querySelector("#players");
const playerCardsContainer = document.querySelector("#player-cards");

const footballTeam = {
    team: "Argentina",
    year: 1986,
    headCoach: "Carlos Bilardo",
    players: [
        { name: "Sergio Almirón", position: "forward", isCaptain: false },
        { name: "Sergio Batista", position: "midfielder", isCaptain: false },
        { name: "Ricardo Bochini", position: "midfielder", isCaptain: false },
        { name: "Claudio Borghi", position: "midfielder", isCaptain: false },
        { name: "José Luis Brown", position: "defender", isCaptain: false },
        { name: "Daniel Passarella", position: "defender", isCaptain: false },
        { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
        { name: "Néstor Clausen", position: "defender", isCaptain: false },
        { name: "José Luis Cuciuffo", position: "defender", isCaptain: false },
        { name: "Diego Maradona", position: "midfielder", isCaptain: true },
        { name: "Jorge Valdano", position: "forward", isCaptain: false },
        { name: "Héctor Enrique", position: "midfielder", isCaptain: false },
        { name: "Oscar Garré", position: "defender", isCaptain: false },
        { name: "Ricardo Giusti", position: "midfielder", isCaptain: false },
        { name: "Luis Islas", position: "goalkeeper", isCaptain: false },
        { name: "Julio Olarticoechea", position: "defender", isCaptain: false },
        { name: "Pedro Pasculli", position: "forward", isCaptain: false },
        { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
        { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
        { name: "Carlos Tapia", position: "midfielder", isCaptain: false },
        { name: "Marcelo Trobbiani", position: "midfielder", isCaptain: false },
        { name: "Héctor Zelada", position: "goalkeeper", isCaptain: false },
    ]
}

headCoach.innerHTML = footballTeam.headCoach;
team.innerHTML = footballTeam.team;
year.innerHTML = footballTeam.year;

function playerCardByPosition(position) {
    const players = position === "all"
        ? footballTeam.players
        : footballTeam.players.filter((player) => player.position === position)

    return players.map(player => `
        <div class="player-card">
            <h2>${player.isCaptain ? '(Captain) ' : ''}${player.name}</h2>
            <p>Position: ${player.position}</p>
        </div>
    `).join("")
}

selectContainer.addEventListener("change", () => {
    playerCardsContainer.innerHTML = playerCardByPosition(selectContainer.value);
})

