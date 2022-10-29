const Game = {

    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,

    background: undefined,
    player1: undefined,
    player2: undefined,


    init() {
        this.canvas = document.querySelector(".canvas")
        this.ctx = this.canvas.getContext("2d")

        this.width = window.innerWidth/1.0005
        this.height = window.innerHeight/1.004

        this.canvas.width = this.width
        this.canvas.height = this.height

        this.start()
    },

    start() {        
        this.generateAll()
       
        this.intervalID = setInterval(() => {           
             this.ctx.clearRect(0, 0, this.width, this.height)
            this.drawAll()
            

            
        }, 1000 / this.FPS);

    },

    generateAll(){
        this.background= new background (this.ctx, this.width, this.height)
        this.player1= new Player1 (this.ctx, this.width, this.height)
        this.player2= new Player2 (this.ctx, this.width, this.height)


    },

    drawAll(){
        this.background.draw()
        this.player1.draw()
        this.player2.draw()

    }




}