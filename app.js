const streamNum = document.getElementById('streams');
const money = document.querySelector('h2');
const calc = document.querySelector('button');

const platforms = {
tidal: 0.01284,
appleMusic: 0.01,
spotify: 0.00437,
napster: 0.019,
deezer: 0.0064,
amazon: 0.00402,
youtube: 0.00069,
pandora: 0.00133
}


calc.addEventListener('click', () => {
	const streamingServices = document.querySelector('select').value;

	switch (streamingServices) {
		case 'tidal':
			money.innerHTML = `You earned: $${streamNum.value * platforms.tidal.toFixed(4)}`;
			break;
		case 'apple music':
			money.innerHTML = `You earned: $${
				streamNum.value * platforms.appleMusic.toFixed(4)
			}`;
			break;
		case 'spotify':
			money.innerHTML = `You earned: $${streamNum.value * platforms.spotify.toFixed(4)}`;
			break;
		case 'napster':
			money.innerHTML = `You earned: $${streamNum.value * platforms.napster.toFixed(4)}`;
			break;
		case 'deezer':
			money.innerHTML = `You earned: $${streamNum.value * platforms.deezer.toFixed(4)}`;
			break;
		case 'amazon':
			money.innerHTML = `You earned: $${streamNum.value * platforms.amazon.toFixed(4)}`;
			break;
		case 'youtube':
			money.innerHTML = `You earned: $${streamNum.value * platforms.youtube.toFixed(4)}`;
			break;
		case 'pandora':
			money.innerHTML = `You earned: $${streamNum.value * platforms.pandora.toFixed(4)}`;
			break;
	}
});

const imgRef = document.querySelector('select');

imgRef.addEventListener('change', (e) => {
	e.preventDefault();
	const img = document.querySelector('img');
	if (imgRef.value == 'tidal') {
		img.src = "Assets/tidal.png"
	} else if (imgRef.value == 'apple music') {
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

