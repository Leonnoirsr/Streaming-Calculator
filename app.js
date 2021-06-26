const streamNum = document.getElementById('streams');
const money = document.querySelector('h2');
const calc = document.querySelector('button');

const tidal = 0.01284;
const appleMusic = 0.01;
const spotify = 0.00437;
const napster = 0.019;
const deezer = 0.0064;
const amazon = 0.00402;
const youtube = 0.00069;
const pandora = 0.00133;

calc.addEventListener('click', function () {
	const streamingServices = document.querySelector('select').value;

	switch (streamingServices) {
		case 'tidal':
			money.innerHTML = `You earned: $${streamNum.value * tidal.toFixed(4)}`;
			break;
		case 'apple music':
			money.innerHTML = `You earned: $${
				streamNum.value * appleMusic.toFixed(4)
			}`;
			break;
		case 'spotify':
			money.innerHTML = `You earned: $${streamNum.value * spotify.toFixed(4)}`;
			break;
		case 'napster':
			money.innerHTML = `You earned: $${streamNum.value * napster.toFixed(4)}`;
			break;
		case 'deezer':
			money.innerHTML = `You earned: $${streamNum.value * deezer.toFixed(4)}`;
			break;
		case 'amazon':
			money.innerHTML = `You earned: $${streamNum.value * amazon.toFixed(4)}`;
			break;
		case 'youtube':
			money.innerHTML = `You earned: $${streamNum.value * youtube.toFixed(4)}`;
			break;
		case 'pandora':
			money.innerHTML = `You earned: $${streamNum.value * pandora.toFixed(4)}`;
			break;
	}
});
