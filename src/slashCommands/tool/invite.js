const { EmbedBuilder } = require('discord.js');
const client_id = require("../../config/config.json")

module.exports = {
  name: 'invite',
  description: 'Invite me to ur sever!',
  userPermission: [],
  run: (client, interaction) => {
   
    const embed = new EmbedBuilder()
      .setTitle('Click Here')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=902376617731563521&permissions=0&scope=bot')
      .setAuthor({
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag
      })
      .setColor('Blue')
      .setDescription(`Invite me to ur sever now!`);

    return interaction.reply({
      embeds: [embed],
    });
  },
};
