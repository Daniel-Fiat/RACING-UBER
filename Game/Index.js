onload = () => {
    //Game.init(1, "blue", "red", 1, 2)// (map,player1color,player2color,playerkey,playerkey)
    const startGame = document.querySelector('.startGame')
    const GameScreen = document.querySelector('.GameScreen')
    const introPage = document.querySelector('.introPage')
    const playerOne = document.querySelector('#player1') //input nombre
    const playerTwo = document.querySelector('#player2') //input nombre
    const blue = document.querySelector('#carBlue') // input color coche
    const red = document.querySelector('#carRed') // input color coche
    const white = document.querySelector('#carWhite') // input color coche



    startGame.addEventListener('click', () => {
        introPage.classList.toggle('nonDisplay')
        canvas.classList.toggle('nonDisplay')
        Game.init(1, "blue", "red", 1, 2)
    })
}





