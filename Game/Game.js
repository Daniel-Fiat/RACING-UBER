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
    block2:undefined,
    block3:undefined,
    block4:undefined,
    block5:undefined,
    block6:undefined,
    block7:undefined,
    block8:undefined,
    block9:undefined,
    block10:undefined,
    block11:undefined,
    block12:undefined,
    block13:undefined,
    block14:undefined,
    block15:undefined,
    block16:undefined,
    block17:undefined,
    block18:undefined,
    block19:undefined,
    block20:undefined,
    block21:undefined,
    block22:undefined,
    blockArray:[],
    


    init() {
        this.canvas = document.querySelector(".canvas")
        this.ctx = this.canvas.getContext("2d")

        this.width = 1478
        this.height = 933

        this.canvas.width = this.width
        this.canvas.height = this.height

        this.start()
    },

    start() {        
        this.generateAll()
       
        this.intervalID = setInterval(() => {           
            
            this.drawAll()
           

            
        }, 1000 / this.FPS);

    },

    generateAll(){
        this.setColorCar()
        this.background= new background (this.ctx, this.width, this.height)
        this.player1= new Player1 (this.ctx, this.width, this.height,this.Car1Color)
        this.player2= new Player2 (this.ctx, this.width, this.height,this.Car2Color)
        
        this.blockArray.push(
        this.block= new Block(this.ctx,this.width,this.height,55,50,185,186),
        this.block2= new Block(this.ctx,this.width,this.height,55,285,185,186),
        this.block3= new Block(this.ctx,this.width,this.height,55,520,185,363),
        this.block4= new Block(this.ctx,this.width,this.height,287,0,130,177),
        this.block5= new Block(this.ctx,this.width,this.height,287,225,185,365),
        this.block6= new Block(this.ctx,this.width,this.height,287,637,185,245),
        this.block7= new Block(this.ctx,this.width,this.height,462,0,185,177),
        this.block8= new Block(this.ctx,this.width,this.height,520,225,185,423),
        this.block9= new Block(this.ctx,this.width,this.height,520,695,185,187),
        this.block10= new Block(this.ctx,this.width,this.height,695,0,243,176),
        this.block11= new Block(this.ctx,this.width,this.height,753,176,185,179),
        this.block12= new Block(this.ctx,this.width,this.height,753,401,185,365),
        this.block13= new Block(this.ctx,this.width,this.height,753,813,185,120),
        this.block14= new Block(this.ctx,this.width,this.height,985,0,240,60),
        this.block15= new Block(this.ctx,this.width,this.height,1219,0,185,177),
        this.block16= new Block(this.ctx,this.width,this.height,985,108,185,127),
        this.block17= new Block(this.ctx,this.width,this.height,985,283,185,540),
        this.block18= new Block(this.ctx,this.width,this.height,985,871,476,61),
        this.block19= new Block(this.ctx,this.width,this.height,1218,225,186,130),
        this.block20= new Block(this.ctx,this.width,this.height,1218,401,186,189),
        this.block21= new Block(this.ctx,this.width,this.height,1218,637,125,187),
        this.block22= new Block(this.ctx,this.width,this.height,1395,637,65,240)
        )


    },

    drawAll(){
        this.background.draw()
        this.player1.draw()
        this.player2.draw()
        this.blockArray.forEach(block => {
            block.draw()
        });
         this.checkCollision()
        
        
        

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
        this.blockArray.forEach(block => {
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
        right:'../Img/red-der.png',
        down:'../Img/red-down.png',
        up :'../Img/red-Up.png',
    
    }