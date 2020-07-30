class Moeda {
	constructor() {
		const tamanho = Math.floor(Math.random() * 20) + 10;
		this.Width = tamanho;
		this.Height = tamanho;
		do {
			do {
				this.X = Math.floor(Math.random() * canvasWidth - tamanho);
				this.Y = Math.floor(Math.random() * canvasHeight - tamanho);

			} while (this.X < 0);
		} while (this.Y < 0);
	}
}