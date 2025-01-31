const ai = require('./ai');


module.exports = {
    startGame: async (interaction, game) => {
        await interaction.reply(`🎮 Starting ${game}...`);
        ai.playGame(interaction, game);
    }
};