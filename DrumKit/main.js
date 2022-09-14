function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const pressedKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    //add a new class (playing) after key is pressed
    pressedKey.classList.add('playing');
}

//REMOVE TRANSITION
function removeTransition(e){
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
};

//PLAYSOUND AND ADD TRANSITION CLASS TO THAT DIV
window.addEventListener('keydown', playSound);


//now as soon transition is ended, add for an eventListener for TRANSITIONED(transition has ended) and remove the 'playing' class we have added.

/* 
LISTEN FOR ALL KEYS
One way to do this is by querySelectAll for 'transitoned' event, this will return you a nodeList object of nodes extracted from the document.
You cannot add eventlistener to all nodes at one time, hence loop through it.
*/

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

