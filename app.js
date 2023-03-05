const diceContainer = document.getElementById("dice-container");
const rollBtn = document.getElementById("roll-btn");

const blackDice = [
    "imgs/black-1.png",
    "imgs/black-2.png",
    "imgs/black-3.png",
    "imgs/black-4.png",
    "imgs/black-5.png",
    "imgs/black-6.png",
]

const whiteDice = [
    "imgs/white-1.png",
    "imgs/white-2.png",
    "imgs/white-3.png",
    "imgs/white-4.png",
    "imgs/white-5.png",
    "imgs/white-6.png",
]

function randomDice(imgs){
    return imgs [ Math.floor(Math.random() * imgs.length)]
}

rollBtn.addEventListener('click', ()=> {
    diceContainer.innerHTML = `
        <div class="animation"></div>
    `
    setTimeout(()=> {
        diceContainer.classList.remove('animation');
        diceContainer.innerHTML = `
        <img src="${randomDice(blackDice)}" alt="black done 1">
        <img src="${randomDice(whiteDice)}" alt="black done 1">
    `
    }, 5500)
})

