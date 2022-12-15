
let position = [];
let data;
let lim = 10;
let textLabel = document.getElementById("search-text");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb30d84d14msh1ee3e11174da921p1016b6jsn33c684df1ff9',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
function home() {
	fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
	.then(gamesJson => gamesJson.json())
	.then(gamesJson => handler(gamesJson))
	.catch(err => console.error(err));
	
}
// filterGames();
home();
function filterGamesByCategiry(category) {
	console.log(category);
	// return category;
}
function filterGamesByPlataform(platafor) {
	console.log(platafor);
	// return platafor;
}
function filterGames(category) {
	// var test = documment.getElementById("cat-1");
var platafor = filterPlataform(k);
var category = filterCategory();
console.log(platafor);
	fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataform}&category=${category}&sort-by=release-date`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

function handler(gamesJson) {
	search(gamesJson);
	addGeneralGamesToHTML(gamesJson);
	addHighlightGamesToHTML(gamesJson);
	console.log(gamesJson);

}

	// document.getElementById("search-text").addEventListener("inputs", search() );
function search(gamesJson) {
	for(var i=0; i<Object.keys(gamesJson).length; i++) {
		if(gamesJson[i].title.toLowerCase() === textLabel.value.toLowerCase()) {
		 	position.push(i);
			console.log(i);
		}
	}
}

function addHighlightGamesToHTML(gamesJson) {
	var displayGames = document.getElementById("high-light-game");
		displayGames.innerHTML =   
			`<img src="${gamesJson[0].thumbnail}">`;
			// <h1>${gamesJson[0].title}</h1>
			// <h2>${gamesJson[0].short_description}</h2>
			// <h3>${gamesJson[0].release_date}</h3>`;
}
function addGeneralGamesToHTML(gamesJson) {
	var displayGames = document.getElementById("display-game");
	for(let i=0; i<lim; i++) {
		displayGames.innerHTML +=
		`<a href="${gamesJson[i].freetogame_profile_url}" target="_blank">
		<img src="${gamesJson[i].thumbnail}"><a>`
		// <h1>${gamesJson[i].title}</h1>
		// <h2>${gamesJson[i].short_description}</h2>
		// <h3>${gamesJson[i].release_date}</h3>`;
	}
}
