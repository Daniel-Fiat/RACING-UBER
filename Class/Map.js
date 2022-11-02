class Map {
  constructor(ctx, ctxWidth, ctxHeight,numMap) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight
        this.numMap = numMap

        this.blockMap = []
        this.routes=[]
        this.tunelsLeft= []
        this.tunelRigth=[]
        this.tunelsLower=[]
        this.tunelUpper=[]
        
        this.setMap()
  }
   setMap(){
    switch (this.numMap) {
        case 1:
            this.blockMap.push(
                // x , y, x, y
                new Block(this.ctx,this.width,this.height,0,0,120,143),        //1
                new Block(this.ctx,this.width,this.height,0,186,173,297),       //3
                new Block(this.ctx,this.width,this.height,0,525,173,197),       //2
                new Block(this.ctx,this.width,this.height,0,764,390,6),        //4
                new Block(this.ctx,this.width,this.height,164,0,172,145),       //5
                new Block(this.ctx,this.width,this.height,220,184,169,176),     //6
                new Block(this.ctx,this.width,this.height,220,402,169,130),     //7
                new Block(this.ctx,this.width,this.height,220,572,169,152),     //8
                new Block(this.ctx,this.width,this.height,380,0,223,48),        //9
                new Block(this.ctx,this.width,this.height,380,87,222,57),      //10
                new Block(this.ctx,this.width,this.height,435,87,168,203),     //11
                new Block(this.ctx,this.width,this.height,435,330,168,298),     //12
                new Block(this.ctx,this.width,this.height,435,669,168,99),     //13
                new Block(this.ctx,this.width,this.height,650,0,380,48),        //14
                new Block(this.ctx,this.width,this.height,650,87,169,105),     //15
                new Block(this.ctx,this.width,this.height,650,233,169,144),     //16
                new Block(this.ctx,this.width,this.height,650,418,169,123),     //17
                new Block(this.ctx,this.width,this.height,650,583,169,94),     //18
                new Block(this.ctx,this.width,this.height,650,717,450,74),     //19
                new Block(this.ctx,this.width,this.height,864,0,169,142),      //20
                new Block(this.ctx,this.width,this.height,864,185,169,104),    //21
                new Block(this.ctx,this.width,this.height,864,330,169,152),    //22
                new Block(this.ctx,this.width,this.height,864,525,115,150),    //23
                new Block(this.ctx,this.width,this.height,1077,0,23,290),       //24
                new Block(this.ctx,this.width,this.height,1077,330,23,153),     //25
                new Block(this.ctx,this.width,this.height,1025,525,76,345),    //26

                )
                
            this.routes.push(
                {
                start:new Passengers(this.ctx,this.width,this.height,250,600,20,15),
                finish:new Destiny(this.ctx,this.width,this.height,490,10,35,35),
                points:250
                },
                {
                start:new Passengers(this.ctx,this.width,this.height,880,600,20,15),
                finish:new Destiny(this.ctx,this.width,this.height,1460,10,35,35),
                points:300
                },
                {
                //start:new Passengers(this.ctx,this.width,this.height,860,700,20,20),
                start:new Passengers(this.ctx,this.width,this.height,100,200,20,15),
                finish:new Destiny(this.ctx,this.width,this.height,600,300,35,35),
                points:500
                },
               
               
              
            )

            this.tunelsLower.push(
                {
                    start : new Block(this.ctx,this.width,this.height,845,1078,70,20),
                    redirect : [870,-15]
                   
                },
                {
                    start : new Block(this.ctx,this.width,this.height,545,1078,70,20),
                    redirect : [500,-15]
                }
            )

            this.tunelUpper.push(
                {
                    start : new Block(this.ctx,this.width,this.height,160,-60,70,21),
                    redirect : [557,1085]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,100,60,70,21),
                    redirect : [557,1085]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,845,60,70,21),
                    redirect : [860,1085]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,1450,60,70,21),
                    redirect : [860,1085]
                },
            )

            this.tunelRigth.push(
                {
                    start : new Block(this.ctx,this.width,this.height,1520,400,21,70),
                    redirect : [-15,220]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,1520,670,21,70),
                    redirect : [-15,700]
                }
            )
            this.tunelsLeft.push(
                {
                    start : new Block(this.ctx,this.width,this.height,-60,197,21,70),
                    redirect : [1530,420]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,-60,675,21,70),
                    redirect : [1530,690]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,-60,1010,21,70),
                    redirect : [1530,690]
                }
            )
             break;
    
        default:
            break;
    }
   }

}