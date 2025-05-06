// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  
  function populateVoices() {
    const voices = synth.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices(); 
  synth.onvoiceschanged = populateVoices;
  
  synth.onvoiceschanged = populateVoices;
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voiceSelect.value;
    utterance.voice = synth.getVoices().find(voice => voice.name === selectedVoice);
  
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
  
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  
    synth.speak(utterance);
  });
}