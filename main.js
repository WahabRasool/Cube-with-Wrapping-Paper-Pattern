document.addEventListener('DOMContentLoaded', function () {
    generatePattern(); // Generate initial pattern for cube faces

    document.getElementById('generateButton').addEventListener('click', function () {
        generatePattern(); // Regenerate pattern on button click
    });
});

function generatePattern() {
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
const emojis = ['🎁', '🌼', '🌟', '💫', '💐', '❄️', '🕸️', '👻','🦑','🧨','✨','🖌️', '🎭','🍩','🌞','🍎','🌙', '🥑', '🎶'];
    // Emoji set to be used in patterns
   // const emojis = ['🎁', '🎉', '🌟', '💫', '🎊', '💖', '🎈', '🎀'];
 // const emojis = ['🌸', '🌺', '🌼', '🌻', '🌷', '🌹', '💐', '🌹'];

//const emojis = ['🐶', '🐱', '🐰', '🐼', '🐦', '🌳', '🌻', '🍃'];
//const emojis = ['🍎', '🍔', '🍕', '🍩', '🍓', '🍷', '🥑', '🍪'];
//const emojis = ['🌞', '🌧️', '❄️', '🌨️', '🌪️', '🌈', '🌬️', '⛅'];
//const emojis = ['⚽', '🏀', '🏈', '🎾', '🏋️‍♂️', '🚴‍♂️', '🏅', '🥇'];
 // const emojis = ['🎃', '👻', '🕸️', '🕷️', '🧛‍♂️', '🧙‍♀️', '🦇', '⚰️'];

//const emojis = ['🌙', '🌍', '🪐', '🌑', '🌒', '🌔', '🌕', '🌖'];
//const emojis = ['🎸', '🎶', '🎤', '🎧', '🎨', '🖌️', '🎭', '🎬'];
//const emojis = ['💎', '💍', '🪙', '🪄', '🔮', '🪞', '💎', '💎'];
///const emojis = ['🐠', '🐡', '🐙', '🦑', '🦀', '🐚', '🐋', '🐬'];
//const emojis = ['🔥', '💥', '🌋', '🔥', '💣', '🧨', '⚡', '🌟'];
//const emojis = ['🧙‍♂️', '🧚‍♀️', '🧝‍♂️', '🦄', '✨', '🔮', '🦋', '🌟'];
//  const emojis = ['🧗‍♂️', '🏕️', '🏞️', '⛺', '🌍', '🗺️', '🏔️', '🌄'];


    // Number of emojis per face (grid size)
    const emojiCount = 40;

    // Select a random emoji for the face
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Loop through faces and add emojis
    faces.forEach(face => {
        const faceElement = document.getElementById(face);
        faceElement.innerHTML = ''; // Clear existing emojis

        // Add multiple divs for emojis
        for (let i = 0; i < emojiCount; i++) {
            const emojiDiv = document.createElement('div');
            emojiDiv.classList.add('emoji');
            emojiDiv.textContent = randomEmoji;
            faceElement.appendChild(emojiDiv);
        }
    });
}
