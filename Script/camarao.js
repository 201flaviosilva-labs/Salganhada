class Camarao {
	constructor() {
		const tamanho = Math.floor(Math.random() * 15) + 20;
		this.Width = tamanho;
		this.Height = tamanho;
		do this.Y = Math.floor(Math.random() * canvasHeight - tamanho); while (this.Y < 0);
		do this.X = Math.floor(Math.random() * canvasWidth - tamanho); while (this.X < 0);
		this.sprite = new Image();
		this.sprite.src = "../Assets/camarao.png";
	}
}