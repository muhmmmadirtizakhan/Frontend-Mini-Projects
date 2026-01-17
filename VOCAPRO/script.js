let speech = new SpeechSynthesisUtterance(); // create the object to speak
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // get all available voices
    speech.voice = voices[0]; // default voice

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i); // populate dropdown
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]; // select new voice
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech); // speak the text
});