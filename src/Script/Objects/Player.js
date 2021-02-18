const controllers = [
	{
		left: "LEFT",
		right: "RIGHT",
		up: "UP",
		down: "DOWN"
	},
	{
		left: "A",
		right: "D",
		up: "W",
		down: "S"
	},
];

class Player extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, pId) {
		const texture = pId ? "P2" : "P1";
		super(scene, x, y, texture);

		const { left, right, up, down } = controllers[pId];

		this.speed = 150;
		this.points = 0;
		this.pId = pId;

		this.keys = this.scene.input.keyboard.addKeys({
			left: left,
			right: right,
			up: up,
			down: down,
		});
	}

	update() {
		if (this.keys.left.isDown) {
			this.setVelocity(-this.speed, 0);
			this.flipX = false;
		} else if (this.keys.right.isDown) {
			this.setVelocity(this.speed, 0);
			this.flipX = true;
		}
		if (this.keys.up.isDown) this.setVelocity(0, -this.speed);
		else if (this.keys.down.isDown) this.setVelocity(0, this.speed);
	}
}
