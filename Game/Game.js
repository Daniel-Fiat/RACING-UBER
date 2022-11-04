const Game = {

    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,

    background: undefined,
    map: undefined,
    player1: undefined,
    player2: undefined,

    Player1Color: undefined,
    Player2Color: undefined,
    Player1SetKey: undefined,
    Player2SetKey: undefined,
    startPos1: { x: 1050, y: 300 },
    startPos2: { x: 1050, y: 490 },

    Car1Color: undefined,
    Car2Color: undefined,

    map: undefined,
    timer: 60,
    timerToPrint: undefined,

    init(map, Player1Color, Player2Color, Player1SetKey, Player2SetKey) { 
        this.canvas = document.querySelector("#canvas")
        this.ctx = this.canvas.getContext("2d")

        this.width = window.innerWidth
        this.height = window.innerHeight

        this.canvas.width = this.width
        this.canvas.height = this.height

        this.map = map
        this.Player1Color = Player1Color
        this.Player2Color = Player2Color
        this.Player1SetKey = Player1SetKey
        this.Player2SetKey = Player2SetKey

        this.start()
    },

    start() {
        this.generateAll()

        this.intervalID = setInterval(() => {

            this.clearAll()
            this.drawAll()
            this.checkCollisions()
            this.gameOVer()

            this.timer = this.timer - (1 / 60)



        }, 1000 / this.FPS);

    },

    generateAll() {

        this.setColorCar()
        this.background = new background(this.ctx, this.width, this.height)
        this.player1 = new Player(this.ctx, this.width, this.height, this.Car1Color, this.Player1SetKey, this.startPos1, "../Img/Puntero-rojo.png")
        this.player2 = new Player(this.ctx, this.width, this.height, this.Car2Color, this.Player2SetKey, this.startPos2, "../Img/Puntero-azul.png")
        this.map = new Map(this.ctx, this.width, this.height, this.map)
        
    },

    drawAll() {

        this.ctx.fillStyle = "rgba(0, 0, 0, 0)"
        this.map.tunelsLower.forEach(element => element.start.draw())
        this.map.tunelUpper.forEach(element => element.start.draw())
        this.map.tunelRigth.forEach(element => element.start.draw())
        this.map.tunelsLeft.forEach(element => element.start.draw())
        
        this.map.blockMap.forEach(block => block.draw())
        this.background.draw()
        this.screenPoints()
      
       
        this.map.routes.forEach(element => element.start.draw())
        this.player2.draw()
        this.player1.draw()

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    setColorCar() {

        switch (this.Player1Color) {
            case "blue":
                this.Car1Color = {
                    left: '../Img/blue-left.png',
                    right: '../Img/blue-right.png',
                    down: '../Img/blue-down.png',
                    up: '../Img/blue-up.png',
                }
                break;
            case "red":
                this.Car1Color = {
                    left: '../Img/red-left.png',
                    right: '../Img/red-right.png',
                    down: '../Img/red-down.png',
                    up: '../Img/red-Up.png',
                }
                break;
            case "white":
                this.Car1Color = {
                    left: '../Img/white-left.png',
                    right: '../Img/white-right.png',
                    down: '../Img/white-down.png',
                    up: '../Img/white-up.png',
                }
                break;
            case "green":
                this.Car1Color = {
                    left: '../Img/4 - left.png',
                    right: '../Img/4-rigth.png',
                    down: '../Img/4-down.png',
                    up: '../Img/4-up.png',
                }
                break;
            case "orange":
                this.Car1Color = {
                    left: '../Img/7 - left.png',
                    right: '../Img/7 - rigth.png',
                    down: '../Img/7 - down.png',
                    up: '../Img/7-up.png',
                }
                break;
            case "royalBlue":
                this.Car1Color = {
                    left: '../Img/royalBlue - left.png',
                    right: '../Img/royalBlue -right.png',
                    down: '../Img/royalBlue - down.png',
                    up: '../Img/royalBlue-Up.png',
                }
                break;

            default:
                break;
        }
        switch (this.Player2Color) {
            case "blue":
                this.Car2Color = {
                    left: '../Img/blue-left.png',
                    right: '../Img/blue-right.png',
                    down: '../Img/blue-down.png',
                    up: '../Img/blue-up.png',
                }
                break;
            case "red":
                this.Car2Color = {
                    left: '../Img/red-left.png',
                    right: '../Img/red-right.png',
                    down: '../Img/red-down.png',
                    up: '../Img/red-Up.png',
                }
                break;
            case "white":
                this.Car2Color = {
                    left: '../Img/white-left.png',
                    right: '../Img/white-right.png',
                    down: '../Img/white-down.png',
                    up: '../Img/white-up.png',
                }
                break;
            case "green":
                this.Car2Color = {
                    left: '../Img/4 - left.png',
                    right: '../Img/4-rigth.png',
                    down: '../Img/4-down.png',
                    up: '../Img/4-up.png',
                }
                break;
            case "orange":
                this.Car2Color = {
                    left: '../Img/7 - left.png',
                    right: '../Img/7 - rigth.png',
                    down: '../Img/7 - down.png',
                    up: '../Img/7-up.png',
                }
                break;
            case "royalBlue":
                this.Car2Color = {
                    left: '../Img/royalBlue - left.png',
                    right: '../Img/royalBlue -right.png',
                    down: '../Img/royalBlue - down.png',
                    up: '../Img/royalBlue-Up.png',
                }
                break;

            default:
                break;
        }




    },
    checkCollisions() {

        this.map.blockMap.forEach(block => {
            if (this.player1.posX < block.posXMax &&
                this.player1.posY < block.posYMax &&
                this.player1.posY > block.posY - this.player1.height &&
                this.player1.posX > block.posX - this.player1.width) { this.player1.stop() }

            if (this.player2.posX < block.posXMax &&
                this.player2.posY < block.posYMax &&
                this.player2.posY > block.posY - this.player2.height &&
                this.player2.posX > block.posX - this.player2.width) { this.player2.stop() }

            if (this.player2.posX < this.player1.posXMax &&
                this.player2.posY < this.player1.posYMax &&
                this.player2.posY > this.player1.posY - this.player2.height &&
                this.player2.posX > this.player1.posX - this.player2.width) {
                this.player2.stop()
                this.player1.stop()
            }
        })

        this.map.routes.forEach((route, index) => {
            if (!this.player1.mission) {
                if (this.player1.posX < route.start.posXMax &&
                    this.player1.posY < route.start.posYMax &&
                    this.player1.posY > route.start.posY - this.player1.height &&
                    this.player1.posX > route.start.posX - this.player1.width) {
                    this.player1.getfinish(this.player1.mission = route)
                    this.map.routes.splice(index, 1)
                }
            }

        })
        this.map.routes.forEach((route, index) => {
            if (!this.player2.mission) {
                if (
                    this.player2.posX < route.start.posXMax &&
                    this.player2.posY < route.start.posYMax &&
                    this.player2.posY > route.start.posY - this.player2.height &&
                    this.player2.posX > route.start.posX - this.player2.width) {
                    this.player2.getfinish(this.player2.mission = route)
                    this.map.routes.splice(index, 1)
                }
            }

        })

        if (this.player1.mission) {
            if (
                this.player1.posX < this.player1.mission.posXMax &&
                this.player1.posY < this.player1.mission.posYMax &&
                this.player1.posY > this.player1.mission.posY - this.player1.height &&
                this.player1.posX > this.player1.mission.posX - this.player1.width) {
                this.player1.PlayerTotalPoints += this.player1.missionPoints
                this.player1.mission = undefined
               
            }


        }
        if (this.player2.mission) {
            if (
                this.player2.posX < this.player2.mission.posXMax &&
                this.player2.posY < this.player2.mission.posYMax &&
                this.player2.posY > this.player2.mission.posY - this.player2.height &&
                this.player2.posX > this.player2.mission.posX - this.player2.width) {
                this.player2.PlayerTotalPoints += this.player2.missionPoints
                this.player2.mission = undefined
               
            }


        }

        //// tunels ////
        this.map.tunelsLower.forEach(tunel => {

            if (this.player2.Down &&
                this.player2.posX < tunel.start.posXMax &&
                this.player2.posY < tunel.start.posYMax &&
                this.player2.posY > tunel.start.posY &&
                this.player2.posX > tunel.start.posX

            ) {
                this.player2.posX = tunel.redirect[0]
                this.player2.posY = tunel.redirect[1]
            }
        })
        this.map.tunelsLower.forEach(tunel => {

            if (this.player1.Down &&
                this.player1.posX < tunel.start.posXMax &&
                this.player1.posY < tunel.start.posYMax &&
                this.player1.posY > tunel.start.posY &&
                this.player1.posX > tunel.start.posX

            ) {
                this.player1.posX = tunel.redirect[0]
                this.player1.posY = tunel.redirect[1]
            }
        })
        this.map.tunelUpper.forEach(tunel => {

            if (this.player2.Up &&
                this.player2.posX < tunel.start.posXMax &&
                this.player2.posY < tunel.start.posYMax &&
                this.player2.posY > tunel.start.posY &&
                this.player2.posX > tunel.start.posX

            ) {
                this.player2.posX = tunel.redirect[0]
                this.player2.posY = tunel.redirect[1]
            }
        })
        this.map.tunelUpper.forEach(tunel => {

            if (this.player1.Up &&
                this.player1.posX < tunel.start.posXMax &&
                this.player1.posY < tunel.start.posYMax &&
                this.player1.posY > tunel.start.posY &&
                this.player1.posX > tunel.start.posX

            ) {
                this.player1.posX = tunel.redirect[0]
                this.player1.posY = tunel.redirect[1]
            }
        })
        this.map.tunelRigth.forEach(tunel => {

            if (this.player2.Right &&
                this.player2.posX < tunel.start.posXMax &&
                this.player2.posY < tunel.start.posYMax &&
                this.player2.posY > tunel.start.posY &&
                this.player2.posX > tunel.start.posX

            ) {
                this.player2.posX = tunel.redirect[0]
                this.player2.posY = tunel.redirect[1]
            }
        })
        this.map.tunelRigth.forEach(tunel => {

            if (this.player1.Right &&
                this.player1.posX < tunel.start.posXMax &&
                this.player1.posY < tunel.start.posYMax &&
                this.player1.posY > tunel.start.posY &&
                this.player1.posX > tunel.start.posX

            ) {
                this.player1.posX = tunel.redirect[0]
                this.player1.posY = tunel.redirect[1]
            }
        })
        this.map.tunelsLeft.forEach(tunel => {

            if (this.player2.left &&
                this.player2.posX < tunel.start.posXMax &&
                this.player2.posY < tunel.start.posYMax &&
                this.player2.posY > tunel.start.posY &&
                this.player2.posX > tunel.start.posX

            ) {
                this.player2.posX = tunel.redirect[0]
                this.player2.posY = tunel.redirect[1]
            }
        })
        this.map.tunelsLeft.forEach(tunel => {

            if (this.player1.left &&
                this.player1.posX < tunel.start.posXMax &&
                this.player1.posY < tunel.start.posYMax &&
                this.player1.posY > tunel.start.posY - this.player1.width &&
                this.player1.posX > tunel.start.posX - this.player1.width
            ) {
                this.player1.posX = tunel.redirect[0]
                this.player1.posY = tunel.redirect[1]
            }
        })
    },
    gameOVer() {
        if (this.timer < 0) {
            clearInterval(this.intervalID)
            this.clearAll()
            if (this.player1.PlayerTotalPoints > this.player2.PlayerTotalPoints) {
    this.Win = new Image()
                this.Win.src = "../Img/gameOver-player1won.webp"
                this.ctx.drawImage(this.Win, 450, 50, 500, 600)
                document.addEventListener("click", e => location.reload())
            }
            if (this.player1.PlayerTotalPoints < this.player2.PlayerTotalPoints) {
            this.Win = new Image()
                this.Win.src = "../Img/gameOver-player2won.webp"
                this.ctx.drawImage(this.Win, 450, 50, 500, 600)
                document.addEventListener("click", e => location.reload())
            }
            if (this.player1.PlayerTotalPoints === this.player2.PlayerTotalPoints) {
              
                this.Win = new Image()
                this.Win.src = "../Img/keep-calm-it-s-a-tie.png"
                this.ctx.drawImage(this.Win, 450, 50, 500, 600)
                document.addEventListener("click", e => location.reload())
            }
        }
    },
    screenPoints(){
        this.ctx.fillStyle = "red"
        this.ctx.font = "bold 48px cursive ";
        this.ctx.fillText("Player 1 ", 1150,150)
        this.ctx.fillStyle = "green"
        this.ctx.fillText("$ "+this.player1.PlayerTotalPoints, 1150,250)
        this.ctx.fillStyle = "red"
        this.ctx.fillText("Player 2 ", 1150,550)
        this.ctx.fillStyle = "green"
        this.ctx.fillText("$ "+this.player2.PlayerTotalPoints, 1150,650)
        this.ctx.fillStyle = "white"
        this.ctx.fillText(Number.parseInt(this.timer), 1205,400)
        
    }


}

