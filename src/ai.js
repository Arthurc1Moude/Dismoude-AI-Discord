module.exports = {
    playGame: async (interaction, game) => {
        await interaction.followUp(`🤖 AI is now playing ${game} with you!`);
    }
};