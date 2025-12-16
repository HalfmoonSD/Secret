let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let img = document.getElementById("valentine-img");
const audio = document.getElementById('myAudio');

// Check if autoplay is allowed; if not, prompt user interaction
if (typeof audio.play === 'function') { // Check if play is a function
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay started! Remove the muted attribute
            audio.muted = false;
        }).catch(error => {
            // Autoplay was prevented. Show a play button or message.
            console.log("Autoplay prevented:", error);
            const playButton = document.createElement('button');
            playButton.textContent = 'Play Music';
            document.body.appendChild(playButton);
            playButton.addEventListener('click', () => {
                audio.muted = false;
                audio.play();
                playButton.remove(); // Remove the button after click
            });
        });
    }
}


const messages = [
    "Wait what?",
    "You're supposed to press the yes button... 💖",
    "It's free to say yes!💕",
    "Try again :(",
    "You're almost there...💔",
    "Just. Pick. Yes.",
    "plz",
    "Still????",
    "Okay you can press it yes now."
];
const images = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2gzMTczNm11Y2Z3aG84eTg3bzNnZ2pzMmlnMG52OTMzbzVubXlqayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rZSVXtKx02UjYANUSp/giphy.gif",  // Original
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXVrbXZsazBmeXhzYTBxenQxOTd5ODVtOTAzenRxNXB2cTY2Nm92ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3DcsGVbYz2C69HixCF/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanYwanJmdHoyZnh1ODlvcG0yNWtsaG41MzYxN3pqajUxenJlOTQ1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CPV50y81xO8YVha95V/giphy.gif"];

// Counter to keep track of the current message
let messageIndex = 0;


function growYes() {
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + "px";
    noBtn.innerText = messages[messageIndex];
    img.src = images[1]
    messageIndex = (messageIndex + 1) % messages.length;
    
}

function goToLetter() {
    img.src = images[2]
    yesBtn.innerText = "Yay! 🎉"
    // Hide the No button
    noBtn.style.display = "none";

    // Align the "Yay!" button to the center
    yesBtn.style.display = "block";
    yesBtn.style.margin = "0 auto"; // Center the button horizontally

    setTimeout(() => {
        window.location.href = "letter.html";
    }, 2000);
}