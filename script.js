const games = [
    { id: 1, name: 'Game One', category: 'Action' },
    { id: 2, name: 'Game Two', category: 'Puzzle' },
    { id: 3, name: 'Game Three', category: 'Adventure' },
    // Add more games as needed
];

// Function to display games
function displayGames(gamesToDisplay) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    gamesToDisplay.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.innerText = game.name;
        gameContainer.appendChild(gameElement);
    });
}

// Function to search games
function searchGames(query) {
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));
    displayGames(filteredGames);
}

// Function to filter games by category
function filterGames(category) {
    const filteredGames = games.filter(game => game.category === category);
    displayGames(filteredGames);
}

// Sample usage
displayGames(games); // Initial display
