document.addEventListener("keydown", (e) => jogador.mover(e));
class Jogador {
	constructor() {
		this.Width = 10;
		this.Height = 10;
		this.X = 0 + this.Width / 2;
		this.Y = canvasHeight / 2 + this.Height / 2;
		this.Velocidade = 10;
		this.Pontos = 0;
	}
	mover(e) {
		const keyCode = e.keyCode;
		if (keyCode === 37 && this.X >= this.Width) this.X -= this.Velocidade;
		if (keyCode === 39 && this.X <= canvasWidth - this.Width - this.Velocidade) this.X += this.Velocidade;
		if (keyCode === 38 && this.Y >= this.Height) this.Y -= this.Velocidade;
		if (keyCode === 40 && this.Y <= canvasHeight - this.Height - this.Velocidade) this.Y += this.Velocidade;
		desenhar();
	}
}