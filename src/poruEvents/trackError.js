const { EmbedBuilder } = require('discord.js');

module.exports.run = (client, player, track, error) => {
  const embed = new EmbedBuilder()
    .setTitle(`${error.exception.message}`)
    .setDescription(`[${track.info.title}](${track.info.uri})`)
    .setColor(`Blue`)
    .setFooter({
      text: `Seziwaza Version: v${require("../../package.json").version}`,
      iconURL: "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif"

      })
      .setTimestamp()

  const channel = client.channels.cache.get(player.textChannel);
  return channel?.send({ embeds: [embed] });
};