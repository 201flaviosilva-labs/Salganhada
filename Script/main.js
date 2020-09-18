let jogadors = [];
for (let i = 0; i < localStorage.numJogadores; i++) jogadors.push(new Jogador(`Jogador${i + 1}`));
let camarao = new Camarao();
let inimigosArr = [new Inimigo()];

window.onload = () => desenhar();
setInterval(desenhar, 1000 / 24);
function desenhar() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	for (let i = 0; i < jogadors.length; i++) jogadors[i].mover();

	ctx.font = "18px monospace";
	// ctx.fillStyle = "rgb(0,0,255, 0.7)";
	for (let i = 0; i < jogadors.length; i++) {
		if (jogadors[i].nome === "Jogador1") {
			ctx.fillStyle = "red";
			ctx.fillText(`Pontos: ${jogadors[i].Pontos}`, canvasWidth / 3 - 25, 20);
		}
		if (jogadors[i].nome === "Jogador2") {
			ctx.fillStyle = "green";
			ctx.fillText(`Pontos: ${jogadors[i].Pontos}`, canvasWidth / 3 * 2 - 25, 20);
		}
	}
	ctx.fillStyle = "rgba(0, 0, 0, 0.0)";

	// ctx.fillStyle = "red";
	for (let i = 0; i < inimigosArr.length; i++) {
		inimigosArr[i].mover();
		if (inimigosArr[i].X < 0) inimigosArr.splice(i, 1);
		ctx.fillRect(inimigosArr[i].X, inimigosArr[i].Y, inimigosArr[i].Width, inimigosArr[i].Height);
		ctx.drawImage(inimigosArr[i].sprite, inimigosArr[i].X, inimigosArr[i].Y, inimigosArr[i].Width, inimigosArr[i].Height);
	}

	// ctx.fillStyle = "yellow";
	ctx.fillRect(camarao.X, camarao.Y, camarao.Width, camarao.Height);
	ctx.drawImage(camarao.sprite, camarao.X, camarao.Y, camarao.Width, camarao.Height);

	// ctx.fillStyle = "white";

	for (let i = 0; i < jogadors.length; i++) {
		ctx.fillRect(jogadors[i].X, jogadors[i].Y, jogadors[i].Width, jogadors[i].Height);
		ctx.drawImage(jogadors[i].sprite, jogadors[i].X, jogadors[i].Y, jogadors[i].Width, jogadors[i].Height);
		colisao(jogadors[i]);
	}
}

function colisao(jog) {
	for (let i = 0; i < inimigosArr.length; i++) {
		if ((jog.X > inimigosArr[i].X &&
			jog.X < inimigosArr[i].X + inimigosArr[i].Width &&
			jog.Y > inimigosArr[i].Y &&
			jog.Y < inimigosArr[i].Y + inimigosArr[i].Height) ||
			(jog.X + jog.Width > inimigosArr[i].X &&
				jog.X + jog.Width < inimigosArr[i].X + inimigosArr[i].Width &&
				jog.Y + jog.Height > inimigosArr[i].Y &&
				jog.Y + jog.Height < inimigosArr[i].Y + inimigosArr[i].Height)
		) {
			jog.Pontos = 0;
			inimigosArr.splice(i, 1);
			canvas.style.border = "1px solid red";
			canvas.style.boxShadow = "0 0 20px red";
		}
	}

	if ((jog.X > camarao.X &&
		jog.X < camarao.X + camarao.Width &&
		jog.Y > camarao.Y &&
		jog.Y < camarao.Y + camarao.Height) ||
		(jog.X + jog.Width > camarao.X &&
			jog.X + jog.Width < camarao.X + camarao.Width &&
			jog.Y + jog.Height > camarao.Y &&
			jog.Y + jog.Height < camarao.Y + camarao.Height)
	) {
		jog.Pontos++;
		camarao = new Camarao();
		canvas.style.border = "1px solid yellow";
		canvas.style.boxShadow = "0 0 20px yellow";
	}
}

setInterval(() => inimigosArr.push(new Inimigo()), 500);

let mudarCorIntervalo = setTimeout(mudarCorBorder, 1000);
function mudarCorBorder() {
	canvas.style.border = "1px solid blue";
	canvas.style.boxShadow = "0 0 20px blue";
}

setInterval(() => { if (canvas.style.border !== "1px solid blue") mudarCor = setTimeout(() => mudarCorBorder(), 1000); }, 100);