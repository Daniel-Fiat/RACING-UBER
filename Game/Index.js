onload = () => {
    //(map,player1color,player2color,playerkey,playerkey)
    const startGame = document.querySelector('#startGame')
    const introPage = document.querySelector('.introPage')
    const GameScreen = document.querySelector('.GameScreen')
    const canvas = document.querySelector('#canvas')
    const body = document.querySelector('#body')
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
    let player1Color ="red"
    let player2Color = "blue"


    startGame.addEventListener('click', () => {
        if (blue1.checked)player1Color=blue1.value
        if (red1.checked)player1Color=red1.value
        if (white1.checked)player1Color=white1.value
        if (green1.checked)player1Color=green1.value
        if (orange1.checked)player1Color=orange1.value
        if (royalBlue1.checked)player1Color=royalBlue1.value
        if (blue2.checked)player2Color=blue2.value
        if (red2.checked)player2Color=red2.value
        if (white2.checked)player2Color=white2.value
        if (green2.checked)player2Color=green2.value
        if (orange2.checked)player2Color=orange2.value
        if (royalBlue2.checked)player2Color=royalBlue2.value




        introPage.classList.toggle('nonDisplay')
        canvas.classList.toggle('nonDisplay')
        body.classList.toggle('background')
        body.classList.toggle('background2')


        const map = 1
        const Player1SetKey = 1
        const Player2SetKey = 2


        Game.init(map, player1Color, player2Color, Player1SetKey, Player2SetKey)


    })

}





