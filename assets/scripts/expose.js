// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const hornImage = document.querySelector('img');
  const hornAudio = document.querySelector('audio');

  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
  
    if (selected === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } else if (selected === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    } else if (selected === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    }
  });

  const volumeImage = document.querySelector('#volume-controls img');
volumeSlider.addEventListener('input', () => {
  const volumeValue = volumeSlider.value;
  hornAudio.volume = volumeValue / 100;

  if (volumeValue == 0) {
    volumeImage.src = 'assets/icons/volume-level-0.svg';
  } else if (volumeValue < 33) {
    volumeImage.src = 'assets/icons/volume-level-1.svg';
  } else if (volumeValue < 67) {
    volumeImage.src = 'assets/icons/volume-level-2.svg';
  } else {
    volumeImage.src = 'assets/icons/volume-level-3.svg';
  }
});

const playButton = document.querySelector('button');
const jsConfetti = new JSConfetti();

playButton.addEventListener('click', () => {
  hornAudio.play();
  if (hornSelect.value === 'party-horn') {
    jsConfetti.addConfetti();
  }
});
}