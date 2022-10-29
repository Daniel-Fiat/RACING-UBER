const Game = {
    
    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,

    background: undefined,
    player1: undefined,
    player2: undefined,

    Player1Color:"red",
    Player2Color: "blue",

    Car1Color: undefined,
    Car2Color:undefined,

    block:undefined,
    


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
            
            this.drawAll()
            this.checkCollision()

            
        }, 1000 / this.FPS);

    },

    generateAll(){
        this.setColorCar()
        this.background= new background (this.ctx, this.width, this.height)
        this.player1= new Player1 (this.ctx, this.width, this.height,this.Car1Color)
        this.player2= new Player2 (this.ctx, this.width, this.height,this.Car2Color)
        this.block= new Block(this.ctx,this.width,this.height,60,70,50,50)


    },

    drawAll(){
        this.background.draw()
        this.player1.draw()
        this.player2.draw()
        this.block.draw()
        

    },

    setColorCar(){

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

        switch (this.Player2Color) {
            case "blue":
                this.Car2Color = carBlue
                break;
            case "red":
                this.Car2Color = carRed
                break;
        
            default:
                break;
        }
        

    },
    checkCollision(){
        if(this.player1.posX < this.block.posXMax+100){this.player1.stop()}
    }

}

    const carBlue = {
        left:'../Img/blue-left.png',
        right:'../Img/blue-right.png',
        down:'../Img/blue-down.png',
        up :'../Img/blue-up.png',
    
    }
    const carRed = {
        left:'../Img/red-left.png',
        right:'../Img/red-der.png',
        down:'../Img/red-down.png',
        up :'../Img/red-Up.png',
    
    }