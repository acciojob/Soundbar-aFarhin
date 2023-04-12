//your JS code here. If required.

// Create an object containing the sound files
const sounds = {
  applause: new Audio('sounds/applause.mp3'),
  boo: new Audio('sounds/boo.mp3'),
  gasp: new Audio('sounds/gasp.mp3'),
  tada: new Audio('sounds/tada.mp3'),
  victory: new Audio('sounds/victory.mp3'),
  wrong: new Audio('sounds/wrong.mp3')
};

// Play a sound by its name
function playSound(name) {
  // Stop all other sounds
  stopAllSounds();
  // Play the selected sound
  sounds[name].play();
}

// Stop all playing sounds
function stopAllSounds() {
  for (let sound of Object.values(sounds)) {
    sound.pause();
    sound.currentTime = 0;
  }
}

