const game = {
	levels: [
		{
			description: 'You are in a dark forest. There are paths to the north and east.',
			choices: [
				{
					text: 'Go north',
					nextLevel: 1
				},
				{
					text: 'Go east',
					nextLevel: 2
				}
			]
		},
		{
			description: 'You come to a lake. There are paths to the north and west.',
			choices: [
				{
					text: 'Go north',
					nextLevel: 1
				},
				{
					text: 'Go west',
					nextLevel: 2
				}
			]
		},
		{
			description: 'You reach a mountain. There are paths to the south and east.',
			choices: [
				{
					text: 'Go south',
					nextLevel: 1
				},
				{
					text: 'Go east',
					nextLevel: 2
				}
			]
		}
	],
	currentLevel: 0,
	start: function() {
		const gameContainer = document.getElementById('game');
		const level = this.levels[this.currentLevel];
		gameContainer.innerHTML = level.description;
		for (const choice of level.choices) {
			const button = document.createElement('button');
			button.textContent = choice.text;
			button.addEventListener('click', () => {
				this.currentLevel = choice.nextLevel;
				this.start();
			});
			gameContainer.appendChild(button);
		}
	}
};

game.start();
