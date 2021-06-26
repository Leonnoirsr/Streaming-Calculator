const streamNum = document.getElementById('streams');
const money = document.querySelector('h2');
const calc = document.querySelector('button');

const tidal = 0.01284;
const appleMusic = 0.01;
const spotify = 0.00437;

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
	}
});
