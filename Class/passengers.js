class Passengers {
  constructor(ctx, ctxWidth, ctxHeight, posX, posY, width, height) {
    this.ctx = ctx;
    this.ctxWidth = ctxWidth;
    this.ctxHeight = ctxHeight;

    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.posYMax = this.posY + this.height;
    this.posXMax = this.posX + this.width;

    this.passengerIMG = new Image();
    this.passengerIMG.src = "./Img/passengers.png";
  }

  draw() {
    this.ctx.drawImage(
      this.passengerIMG,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
}
