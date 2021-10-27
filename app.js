const streamNum = document.getElementById('streams');
const money = document.querySelector('h2');
const calc = document.querySelector('button');
const imgRef = document.querySelector('select');

const platforms = {
tidal: 0.01284,
appleMusic: 0.01,
spotify: 0.00437,
napster: 0.019,
deezer: 0.0064,
amazon: 0.00402,
youtube: 0.00069,
pandora: 0.00133,
getMoney: (streamNum, platform) => streamNum * platform
}

// const platformImages = {
// 	tidal: 'Assets/tidal.png',
// appleMusic: 'Assets/applemusic.png',
// spotify: 'Assets/spotify.png',
// napster: 'Assets/napster.png',
// deezer: 'Assets/deezer.png',
// amazon: 'Assets/amazon.png',
// youtube: 'Assets/youtube.png',
// pandora: 'Assets/pandora.png',

// getImg: () => imgRef 
// }

calc.addEventListener('click', () => {
	const streamingServices = document.querySelector('select').value;
	const showMoney = (streamingServices) => {
	
		const amount =  platforms[`${streamingServices}`] < 0.01 ? platforms[`${streamingServices}`].toFixed(4) : platforms[`${streamingServices}`]
		return money.innerHTML = `You earned: $${platforms.getMoney(streamNum.value, amount)}` 

	}
	showMoney(streamingServices)
});




imgRef.addEventListener('change', (e) => {
	e.preventDefault();
	const img = document.querySelector('img');
// const showImg = (img) => {
// 	if (imgRef) {
// 		img.src = `Assets/${imgRef}.png`
// 	}
// }

	if (imgRef.value == 'tidal') {
		img.src = "Assets/tidal.png"
	} else if (imgRef.value == 'appleMusic') {
		img.src = 'Assets/applemusic.png'
	} else if (imgRef.value == 'spotify') {
		img.src = "Assets/spotify.png"
	} else if (imgRef.value == 'napster') {
		img.src = "Assets/napster.png"
	} else if (imgRef.value == 'deezer') {
		img.src = "Assets/deezer.png"
	} else if (imgRef.value == 'amazon') {
		img.src = "Assets/amazon.png"
	} else if (imgRef.value == 'youtube') {
		img.src = "Assets/youtube.png"
	} else if (imgRef.value == 'pandora') {
		img.src = "Assets/pandora.png"
	}
})

