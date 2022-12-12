
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb30d84d14msh1ee3e11174da921p1016b6jsn33c684df1ff9',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
		.then(gamesJson => gamesJson.json())
		.then(gamesJson => handler(gamesJson))
		.catch(err => console.error(err));
let data;
let textLabel = document.getElementById("search-text").value;
// search(gamesJson);
function handler(gamesJson) {
	search(gamesJson);
	addGamesToHTML(gamesJson);
}


function search(gamesJson) {
	console.log(gamesJson);
	console.log(textLabel);

	for(var i=0; i<Object.keys(gamesJson).length; i++) {
		if(gamesJson[i].title === textLabel) {
		 	var position = i;
			console.log(i);
		}
	}

}

function addGamesToHTML(gamesJson) {
	var displayGames; 
	displayGames.innerHTML =    `<img src="${gamesJson[0].thumbnail}">
            <h1>${gamesJson[0].title}</h1>
            <h2>${gamesJson[0].short_description}</h2>
            <h3>${gamesJson[0].release_date}</h3>`;
	var s;
	s.document.getElementById()
	console.log(typeof(displayGames));
	// displayGames = s.document.getElementById("high-light-games").innerHTML;
}