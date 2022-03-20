const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const client = new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES],
});

client.once('ready', (bot)=> {
    console.log(`${bot.user.username} esta preparado!`);
    client.user.setActivity(`.help para ayuda.`, {
        type: "WATCHING"
    });
});

client.on('messageCreate', async (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;

    let prefix = "."

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

})

client.login('OTU1MTEwMDI4NTc3MjI2ODQ0.Yjc5hw._GzXUNmjeTWYrphWu4lI6mIQ9HQ')
