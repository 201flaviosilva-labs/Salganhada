document.addEventListener("keydown", (e) => jogador.mudarDirecao(e));
class Jogador {
	constructor() {
		this.Width = 20;
		this.Height = 20;
		this.X = canvasWidth / 2 + this.Width / 2;
		this.Y = canvasHeight / 2 + this.Height / 2;
		this.Velocidade = 10;
		this.Pontos = 0;
		this.Direcao = "";
		this.sprite = new Image();
		this.sprite.src = "../Assets/Sardinha.png";
	}

	mudarDirecao(e) {
		const keyCode = e.keyCode;
		if (keyCode === 37 || keyCode === 65) this.Direcao = "Esquerda";
		if (keyCode === 39 || keyCode === 68) this.Direcao = "Direita";
		if (keyCode === 38 || keyCode === 87) this.Direcao = "Cima";
		if (keyCode === 40 || keyCode === 83) this.Direcao = "Baixo";
	}

	mover() {
		if (this.Direcao === "Esquerda" && this.X >= this.Width) this.X -= this.Velocidade;
		if (this.Direcao === "Direita" && this.X <= canvasWidth - this.Width - this.Velocidade) this.X += this.Velocidade;
		if (this.Direcao === "Cima" && this.Y >= this.Height) this.Y -= this.Velocidade;
		if (this.Direcao === "Baixo" && this.Y <= canvasHeight - this.Height - this.Velocidade) this.Y += this.Velocidade;
	}
}