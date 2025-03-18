const button = document.getElementById('magicButton');

const messages = ["Keep going!", "You got this!", "Magic!", "Wow!", "Amazing!", "Keep it up!"];

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, "0");
}

function changePageStyle() {
    document.body.style.backgroundColor = getRandomColor();

    document.body.style.color = getRandomColor();

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    button.innerText = randomMessage;
}

button.addEventListener('click', changePageStyle);
