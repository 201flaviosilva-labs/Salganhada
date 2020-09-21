document.addEventListener("keydown", (e) => { for (let i = 0; i < jogadors.length; i++) jogadors[i].mudarDirecao(e) });
let startCoordinates = { X: 0, Y: 0 };
if (window.innerWidth < 1000) {
	document.addEventListener("touchstart", (e) => {
		startCoordinates.X = e.changedTouches[0].clientX;
		startCoordinates.Y = e.changedTouches[0].clientY;
	}, false);

	document.addEventListener("touchmove", (e) => {
		const endCoordinates = {
			X: e.changedTouches[0].clientX,
			Y: e.changedTouches[0].clientY
		}
		const xDifference = Math.abs(startCoordinates.X - endCoordinates.X);
		const yDifference = Math.abs(startCoordinates.Y - endCoordinates.Y);

		const event = { keyCode: 0 };
		if (xDifference > 50) {
			if (startCoordinates.X > endCoordinates.X) event.keyCode = 37;
			else event.keyCode = 39;
		} else if (yDifference > 50) {
			if (startCoordinates.Y > endCoordinates.Y) event.keyCode = 38;
			else event.keyCode = 40;
		}
		jogadors[0].mudarDirecao(event);
	}, false);
}
class Jogador {
	constructor(nome) {
		this.nome = nome;
		this.Width = 20;
		this.Height = 20;
		this.X = canvasWidth / 2 + this.Width / 2;
		this.Y = canvasHeight / 2 + this.Height / 2;
		this.Velocidade = 10;
		this.Pontos = 0;
		this.Direcao = "";
		this.sprite = new Image();
		if (nome === "Jogador1") this.sprite.src = "../Assets/SardVermelha.png";
		if (nome === "Jogador2") this.sprite.src = "../Assets/SardVerde.png";
	}

	mudarDirecao(e) {
		const keyCode = e.keyCode;
		console.log(e.keyCode);
		// Jogador 1
		if (this.nome === "Jogador1") {
			if (keyCode === 65) this.Direcao = "Esquerda";
			if (keyCode === 68) this.Direcao = "Direita";
			if (keyCode === 87) this.Direcao = "Cima";
			if (keyCode === 83) this.Direcao = "Baixo";
		}

		// Jogador 2
		if (this.nome === "Jogador2" || localStorage.numJogadores == 1) {
			if (keyCode === 37) this.Direcao = "Esquerda";
			if (keyCode === 39) this.Direcao = "Direita";
			if (keyCode === 38) this.Direcao = "Cima";
			if (keyCode === 40) this.Direcao = "Baixo";
		}

		// Sair
		if (keyCode === 27 || keyCode === 32) window.location.href = "./";
	}

	mover() {
		if (this.Direcao === "Esquerda" && this.X >= 0 + this.Velocidade) this.X -= this.Velocidade;
		if (this.Direcao === "Direita" && this.X <= canvasWidth - this.Width - this.Velocidade) this.X += this.Velocidade;
		if (this.Direcao === "Cima" && this.Y >= 0 + this.Velocidade) this.Y -= this.Velocidade;
		if (this.Direcao === "Baixo" && this.Y <= canvasHeight - this.Height - this.Velocidade) this.Y += this.Velocidade;
	}
}