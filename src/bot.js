require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = 'de%';

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.content.startsWith(PREFIX)) {
        const [CMDNAME, ...args] = msg.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);


        if (CMDNAME === 'kick') {
            if(args.length === 0) return msg.reply("Please provide a ID")
            const member = msg.guild.members.cache.get(args[0]);

            if (member) {
                member.kick();
            } else {
                msg.channel.send('This member was not found')
            }
        }

    }
})


client.login(process.env.TOKEN);