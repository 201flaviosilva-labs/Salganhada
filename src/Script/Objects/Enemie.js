class Enemy extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "Zebra");
	}

	generate() {
		const size = randomNumber(8, 32) / 32;
		this.setScale(size);

		const x = randomNumber(0, 2);
		const y = randomNumber(0, 600);
		this.setPosition(x * 800, y);

		const texture = Math.random() > 0.5 ? "Medusa" : "Zebra";
		this.setTexture(texture);

		this.flipX = !x;

		const multiplier = size < 32 ? 2 : 1;
		const minX = (x ? -50 : 25) * multiplier;
		const maxX = (x ? -25 : 50) * multiplier;
		const speedX = randomNumber(minX, maxX);

		this.setVelocity(speedX, 0);
	}

	update() {
		if (this.x < 0 - this.width ||
			this.x > 800 + this.width ||
			this.y < 0 - this.height ||
			this.y > 600 + this.height) {
			this.destroy();
		}
	}
}