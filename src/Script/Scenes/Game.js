class Game extends Phaser.Scene {
	constructor() {
		super({ key: "Game" });
	}

	preload() {
		const assets = "../../../Assets/"
		this.load.image("Amarelo", assets + "Peixes/Amarelo.png"); // "Coin"

		// Enemies
		this.load.image("Medusa", assets + "Peixes/Medusa.png");
		this.load.image("Zebra", assets + "Peixes/Zebra.png");

		// Player
		this.load.image("P1", assets + "Peixes/P1.png");
		this.load.image("P2", assets + "Peixes/P2.png");
	}

	create() {
		const style = {
			fontFamily: "'Press Start 2P'",
			fontSize: 14,
			fill: "#000",
			stroke: '#fff',
			strokeThickness: 2,
			boundsAlignH: "center",
			boundsAlignV: "middle",
		};

		this.bestPointsLabel = this.add.text(400, 600 - 20, localStorage.bestPoints, style).setOrigin(0.5);
		this.p1Points = this.add.text(100, 20, 0, style).setOrigin(0.5);
		if (localStorage.numPlayers == 2) this.p2Points = this.add.text(800 - 100, 20, 0, style).setOrigin(0.5);

		this.players = this.physics.add.group({
			classType: Player,
			collideWorldBounds: true,
			runChildUpdate: true
		});

		for (let i = 0; i < localStorage.numPlayers; i++) {
			const p = this.players.get(400, 300, i);
		}

		this.coin = this.physics.add.sprite(100, 100, "Amarelo");
		this.coin.setCollideWorldBounds(true);

		this.lastEnemy = 200;
		this.enemies = this.physics.add.group({
			classType: Enemy,
			maxSize: 50,
			runChildUpdate: true
		});

		this.physics.add.overlap(this.players, this.enemies, (p, e) => {
			e.destroy();
			p.points = 0;
			this.updatePoints(p.points, p.pId);
		});

		this.physics.add.overlap(this.players, this.coin, (coin, player) => {
			player.points++;
			coin.setPosition(randomNumber(0, 800), randomNumber(0, 600));
			this.updatePoints(player.points, player.pId);
		});
	}

	updatePoints(points, pId) {
		if (localStorage.bestPoints < points) {
			localStorage.bestPoints = points;
			this.bestPointsLabel.setText(localStorage.bestPoints);
		}

		if (pId == 0) this.p1Points.setText(points);
		else if (pId == 1) this.p2Points.setText(points);
	}

	update(time) {
		if (this.lastEnemy < time) this.generateAsteroids(time);
	}

	generateAsteroids(time) {
		this.lastEnemy = time + randomNumber(200, 500);
		const enemy = this.enemies.get();
		if (enemy) enemy.generate();
	}
}
