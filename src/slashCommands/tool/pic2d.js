const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const fs = require('fs');

module.exports = {
    name: "pic2d",
    description: "Send a 2D NSFW picture",
    run: async (client, interaction, args, app) => {
        let files = fs.readdirSync("src/2d")
        let picture = files[Math.floor(Math.random() * files.length)];
        
        const actionRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('NEW')
                .setEmoji("🔄")
                .setStyle(ButtonStyle.Primary)
        )

        const reply = await interaction.reply({files: [`./src/2d/${picture}`], components:[actionRow]})
        const filter = x => x.user.id == interaction.member.id;
        const collector = reply.createMessageComponentCollector({filter, idle: 120000})
        collector.on("collect",async(x) => {
            picture = files[Math.floor(Math.random() * files.length)]
            await x.update({files: [`./src/2d/${picture}`], components:[actionRow]})
        });
        collector.on("end",async(x) => {
            await interaction.followUp("Your were idle for to long")
        })
    }
}