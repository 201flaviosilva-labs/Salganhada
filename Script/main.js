const jogador = new Jogador();
let moeda = new Moeda();
let tempoNovoinimigo = 1000;
let inimigosArr = [];

inimigosArr[0] = new Inimigo();

window.onload = () => desenhar();
function desenhar() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	ctx.font = "18px monospace";
	ctx.fillStyle = "rgb(0,0,255, 0.7)";
	ctx.fillText(`Pontos: ${jogador.Pontos}`, canvasWidth / 2 - 25, 20);

	ctx.fillStyle = "red";
	for (let i = 0; i < inimigosArr.length; i++) {
		ctx.fillRect(inimigosArr[i].X, inimigosArr[i].Y, inimigosArr[i].Width, inimigosArr[i].Height);
	}
	ctx.fillStyle = "yellow";
	ctx.fillRect(moeda.X, moeda.Y, moeda.Width, moeda.Height);

	ctx.fillStyle = "white";
	ctx.fillRect(jogador.X, jogador.Y, jogador.Width, jogador.Height);
}

setInterval(() => {
	for (let i = 0; i < inimigosArr.length; i++) {
		inimigosArr[i].mover();
		if (inimigosArr[i].X < 0) inimigosArr.splice(i, 1);
	}
	colisao();
}, 50);

function colisao() {
	for (let i = 0; i < inimigosArr.length; i++) {
		if ((jogador.X > inimigosArr[i].X &&
			jogador.X < inimigosArr[i].X + inimigosArr[i].Width &&
			jogador.Y > inimigosArr[i].Y &&
			jogador.Y < inimigosArr[i].Y + inimigosArr[i].Height) ||
			(jogador.X + jogador.Width > inimigosArr[i].X &&
				jogador.X + jogador.Width < inimigosArr[i].X + inimigosArr[i].Width &&
				jogador.Y + jogador.Height > inimigosArr[i].Y &&
				jogador.Y + jogador.Height < inimigosArr[i].Y + inimigosArr[i].Height)
		) jogador.Pontos = 0;
	}

	if ((jogador.X > moeda.X &&
		jogador.X < moeda.X + moeda.Width &&
		jogador.Y > moeda.Y &&
		jogador.Y < moeda.Y + moeda.Height) ||
		(jogador.X + jogador.Width > moeda.X &&
			jogador.X + jogador.Width < moeda.X + moeda.Width &&
			jogador.Y + jogador.Height > moeda.Y &&
			jogador.Y + jogador.Height < moeda.Y + moeda.Height)
	) {
		jogador.Pontos++;
		moeda = new Moeda();
	}
}

setInterval(() => {
	inimigosArr[inimigosArr.length] = new Inimigo();
	if (tempoNovoinimigo > 10) tempoNovoinimigo -= 10;
}, tempoNovoinimigo);