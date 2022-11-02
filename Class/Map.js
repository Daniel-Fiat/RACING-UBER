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
                new Block(this.ctx,this.width,this.height,0,0,170,204),         //1
                new Block(this.ctx,this.width,this.height,0,256,246,425),       //2
                new Block(this.ctx,this.width,this.height,0,735,246,285),       //3
                new Block(this.ctx,this.width,this.height,0,1074,549,6),        //4
                new Block(this.ctx,this.width,this.height,230,0,243,204),       //5
                new Block(this.ctx,this.width,this.height,306,256,243,253),     //6
                new Block(this.ctx,this.width,this.height,306,562,243,188),     //7
                new Block(this.ctx,this.width,this.height,306,805,243,215),     //8
                new Block(this.ctx,this.width,this.height,530,0,322,70),        //9
                new Block(this.ctx,this.width,this.height,530,120,100,85),      //10
                new Block(this.ctx,this.width,this.height,607,120,245,290),     //11
                new Block(this.ctx,this.width,this.height,607,462,245,425),     //12
                new Block(this.ctx,this.width,this.height,607,939,245,140),     //13
                new Block(this.ctx,this.width,this.height,908,0,400,70),        //14
                new Block(this.ctx,this.width,this.height,908,120,245,152),     //15
                new Block(this.ctx,this.width,this.height,908,325,245,208),     //16
                new Block(this.ctx,this.width,this.height,908,585,245,180),     //17
                new Block(this.ctx,this.width,this.height,908,816,245,138),     //18
                new Block(this.ctx,this.width,this.height,908,1005,635,74),     //19
                new Block(this.ctx,this.width,this.height,1210,0,245,205),      //20
                new Block(this.ctx,this.width,this.height,1210,256,245,150),    //21
                new Block(this.ctx,this.width,this.height,1210,462,245,220),    //22
                new Block(this.ctx,this.width,this.height,1210,735,168,219),    //23
                new Block(this.ctx,this.width,this.height,1512,0,35,408),       //24
                new Block(this.ctx,this.width,this.height,1512,462,35,220),     //25
                new Block(this.ctx,this.width,this.height,1435,735,111,345),    //26

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
                    start : new Block(this.ctx,this.width,this.height,468,-60,70,21),
                    redirect : [557,1085]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,845,-60,70,21),
                    redirect : [860,1085]
                },
                {
                    start : new Block(this.ctx,this.width,this.height,1450,-60,70,21),
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