const Game = {

    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    backgroundImg: undefined,


    init() {
        this.canvas = document.querySelector(".canvas")
        this.ctx = this.canvas.getContext("2d")

        this.width = window.innerWidth
        this.height = window.innerHeight

        this.canvas.width = this.width
        this.canvas.height = this.height

        this.start()
    },

    start() {
        this.intervalID = setInterval(() => {

            this.backgroundImg = new Image()
            this.backgroundImg.src = "../Img/Mapa.png"
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.width, this.height)

            console.log('HOOLIIIIIIWIIIIII')
            console.log('holaaaaaaaaaaaaaaaaaaaaaaaaaa')
        }, 1000 / this.FPS);

    }




}