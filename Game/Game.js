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

    Player1Color:"red",
    Player2Color: "blue",

    Car1Color: undefined,
    Car2Color:undefined,
   
    map:undefined,

    init(map) {
        this.canvas = document.querySelector(".canvas")
        this.ctx = this.canvas.getContext("2d")

        this.width = 1478
        this.height = 933

        this.canvas.width = this.width
        this.canvas.height = this.height

        this.map = map
        
        this.start()
    },
    
    start() {        
        this.generateAll()
        
        this.intervalID = setInterval(() => {           
            
            this.drawAll()
            this.checkCollisions()

        }, 1000 / this.FPS);

    },

    generateAll(){
        this.setColorCar()
        this.background= new background (this.ctx, this.width, this.height)
        this.player1= new Player1 (this.ctx, this.width, this.height,this.Car1Color)
        this.player2= new Player2 (this.ctx, this.width, this.height,this.Car2Color)
        this.map = new Map (this.ctx, this.width, this.height,this.map)
    },

    drawAll(){
        this.background.draw()
        this.map.arrayMap.forEach(block => {
            block.draw()
        });
        this.player2.draw()
        this.player1.draw()
        console.log(this.map.numMap)

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
    checkCollisions(){
            
        this.map.arrayMap.forEach(block => {
            if(this.player1.posX < block.posXMax &&
                this.player1.posY < block.posYMax&&
                this.player1.posY > block.posY - this.player1.height &&
                this.player1.posX > block.posX - this.player1.width )
                {this.player1.stop()}
                
            if(this.player2.posX < block.posXMax &&
                this.player2.posY < block.posYMax&&
                this.player2.posY > block.posY - this.player2.height &&
                this.player2.posX > block.posX - this.player2.width )
                {this.player2.stop()}
                
            if( this.player2.posX < this.player1.posXMax &&
                this.player2.posY < this.player1.posYMax &&
                this.player2.posY > this.player1.posY - this.player2.height   &&
                this.player2.posX > this.player1.posX - this.player2.width)
                {
                    this.player2.stop()
                    this.player1.stop()
                }
        });
      
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
        right:'../Img/red-right.png',
        down:'../Img/red-down.png',
        up :'../Img/red-Up.png',
    
    }