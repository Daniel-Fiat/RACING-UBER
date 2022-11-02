onload = () => {
   //(map,player1color,player2color,playerkey,playerkey)
    const startGame = document.querySelector('.startGame')
    const GameScreen = document.querySelector('.GameScreen')
    const introPage = document.querySelector('.introPage')
    
    
    
    startGame.addEventListener('click', () => {
        introPage.classList.toggle('nonDisplay')
        canvas.classList.toggle('nonDisplay')
        //const Player1Color= ??
        //const Player2Color= ??
        //const player1Name = ??
        //const player2Name= ??
        const map= 1
        const Player1SetKey=1
        const Player2SetKey=2
        Game.init(map,"blue", "red", Player1SetKey, Player2SetKey)
    })
}





