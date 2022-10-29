const Game = {
    
    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,

    background: undefined,
    player1: undefined,
    player2: undefined,
    Player1Color: "blue",
    Car1Color: undefined,
    


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
        this.selectColorCar()
        this.background= new background (this.ctx, this.width, this.height)
        this.player1= new Player1 (this.ctx, this.width, this.height)
        this.player2= new Player2 (this.ctx, this.width, this.height,this.Car1Color)
        


    },

    drawAll(){
        this.background.draw()
        this.player1.draw()
        this.player2.draw()
        

    },
    selectColorCar(){
        switch (this.Player1Color) {
            case "blue":
                this.Car1Color = carBlue
                break;
            case "red":
                this.Car1Color = carRed
                break;
        
            default:
                break;
        }

    }

}
    const carBlue = {
        left:'../Img/carIzq.png',
        right:'../Img/carDerecha.png',
        down:'../Img/carAbajo.png',
        up :'../Img/car.png',
    
    }
    const carRed = {
        left:'../Img/red-left.png',
        right:'../Img/red-der.png',
        down:'../Img/red-down.png',
        up :'../Img/red-Up.png',
    
    }