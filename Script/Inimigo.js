class Inimigo {
	constructor() {
		const tamanho = Math.floor(Math.random() * 10) + 20;
		this.Width = tamanho;
		this.Height = tamanho;
		this.Y = 0;
		this.Direction = Math.random() < 0.5 ? "esquerda" : "direita";
		this.X = this.Direction === "esquerda" ? canvasWidth : 0;
		this.Velocidade = Math.floor(Math.random() * 10) + 5;

		do {
			this.Y = Math.floor(Math.random() * canvasHeight - tamanho);
		} while (this.Y < 0);

		this.sprite = new Image();
		if (tamanho > 25) {
			if (this.Direction === "esquerda") this.sprite.src = "../Assets/BacalhaoEsq.png";
			else this.sprite.src = "../Assets/Bacalhao.png";
		} else {
			if (this.Direction === "esquerda") this.sprite.src = "../Assets/FininhoEsq.png";
			else this.sprite.src = "../Assets/Fininho.png";
		}
	}

	mover() {
		if (this.Direction === "esquerda") this.X -= this.Velocidade;
		else this.X += this.Velocidade;
	}
}