class Inimigo {
	constructor() {
		const tamanho = Math.floor(Math.random() * 10) + 10;
		this.Width = tamanho;
		this.Height = tamanho;
		this.X = canvasWidth;
		this.Y = Math.floor(Math.random() * canvasHeight - tamanho);
		this.Velocidade = Math.floor(Math.random() * 20) + 5;
	}
	mover() {
		this.X -= this.Velocidade;
		desenhar();
	}
}