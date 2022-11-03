onload = () => {
    //(map,player1color,player2color,playerkey,playerkey)
    const startGame = document.querySelector('.startGame')
    const GameScreen = document.querySelector('.GameScreen')
    const introPage = document.querySelector('.introPage')
    const blue1 = document.querySelector('#carBlue1')
    const red1 = document.querySelector('#carRed1')
    const white1 = document.querySelector('#carWhite1')
    const green1 = document.querySelector('#carGreen1')
    const orange1 = document.querySelector('#carOrange1')
    const royalBlue1 = document.querySelector('#carRoyalBlue1')
    const blue2 = document.querySelector('#carBlue2')
    const red2 = document.querySelector('#carRed2')
    const white2 = document.querySelector('#carWhite2')
    const green2 = document.querySelector('#carGreen2')
    const orange2 = document.querySelector('#carOrange2')
    const royalBlue2 = document.querySelector('#carRoyalBlue2')

    startGame.addEventListener('click', () => {
        SetColorCar()
        introPage.classList.toggle('nonDisplay')
        canvas.classList.toggle('nonDisplay')
        // let player1Color =
        // let player2Color = 

        const map = 1
        const Player1SetKey = 1
        const Player2SetKey = 2


        Game.init(map, "red", "blue", Player1SetKey, Player2SetKey)

    })

}





