onload = () => {
   //(map,player1color,player2color,playerkey,playerkey)
    const startGame = document.querySelector('.startGame')
    const GameScreen = document.querySelector('.GameScreen')
    const introPage = document.querySelector('.introPage')
    const playerOne = document.querySelector('#player1') //input nombre
    const playerTwo = document.querySelector('#player2') //input nombre
    const blue = document.querySelector('#carBlue') // input color coche
    const red = document.querySelector('#carRed') // input color coche
    const white = document.querySelector('#carWhite') // input color coche
    const green = document.querySelector('#carGreen')
    const orange = document.querySelector('#carOrange')
    
    introPage.classList.toggle('nonDisplay')
    canvas.classList.toggle('nonDisplay')
    //const Player1Color= ??
    //const Player2Color= ??
    //const player1Name = ??
    //const player2Name= ??
    const map= 1
    const Player1SetKey=1
    const Player2SetKey=2
    Game.init(map,"red", "blue", Player1SetKey, Player2SetKey)
    
    
    startGame.addEventListener('click', () => {
        
    })
}





