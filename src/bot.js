require('dotenv').config();
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const gameManager = require('./gameManager');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


// 处理 Slash 命令
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;


    if (interaction.commandName === 'play') {
        const game = interaction.options.getString('game');
        gameManager.startGame(interaction, game);
    }
});


client.once('ready', async () => {
    console.log(`✅ Logged in as ${client.user.tag}`);


    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);


    try {
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: [{ name: 'play', description: 'Play a game', options: [{ name: 'game', type: 3, description: 'Game name', required: true }] }] }
        );
        console.log('✅ Slash commands registered');
    } catch (error) {
        console.error('❌ Failed to register commands:', error);
    }
});


client.login(process.env.DISCORD_TOKEN);