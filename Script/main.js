const jogador = new Jogador();
let moeda = new Moeda();
let inimigosArr = [];

inimigosArr[0] = new Inimigo();

window.onload = () => desenhar();
setInterval(desenhar, 1000 / 24);
function desenhar() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	jogador.mover();

	ctx.font = "18px monospace";
	ctx.fillStyle = "rgb(0,0,255, 0.7)";
	ctx.fillText(`Pontos: ${jogador.Pontos}`, canvasWidth / 2 - 25, 20);

	ctx.fillStyle = "red";
	for (let i of inimigosArr) {
		ctx.fillRect(i.X, i.Y, i.Width, i.Height);
		ctx.drawImage(i.sprite, i.X, i.Y, i.Width, i.Height);
	}

	ctx.fillStyle = "yellow";
	ctx.fillRect(moeda.X, moeda.Y, moeda.Width, moeda.Height);
	ctx.drawImage(moeda.sprite, moeda.X, moeda.Y, moeda.Width, moeda.Height);

	ctx.fillStyle = "white";
	ctx.fillRect(jogador.X, jogador.Y, jogador.Width, jogador.Height);
	ctx.drawImage(jogador.sprite, jogador.X, jogador.Y, jogador.Width, jogador.Height);
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
		) {
			jogador.Pontos = 0;
			canvas.style.border = "1px solid red";
			canvas.style.boxShadow = "0 0 20px red";
		}
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
		canvas.style.border = "1px solid yellow";
		canvas.style.boxShadow = "0 0 20px yellow";
	}
}

setInterval(() => inimigosArr.push(new Inimigo()), 1000);

let mudarCorIntervalo = setTimeout(mudarCorBorder, 1000);
function mudarCorBorder() {
	canvas.style.border = "1px solid green";
	canvas.style.boxShadow = "0 0 20px green";
}

setInterval(() => {
	if (canvas.style.border !== "1px solid green") mudarCor = setTimeout(() => mudarCorBorder(), 1000);
}, 100);