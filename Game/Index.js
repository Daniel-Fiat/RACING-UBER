onload = () => {
    Game.init(1, "blue", "red", 1, 2)// (map,player1color,player2color,playerkey,playerkey)
    const startGame = document.querySelector('.startGame')
    const canvas = document.querySelector('#canvas')

    startGame.addEventListener('click', () => {
        introPage.classList.toggle('nonDisplay')
        canvas.classList.toggle('nonDisplay')
        Game.init()
    })
}





