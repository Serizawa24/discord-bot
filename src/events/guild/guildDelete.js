const client = require('../../index');
const fs = require('fs');
module.exports = {
    name: "guildDelete"
};

client.on('guildDelete', guild => {
    // Delete the guildId and guildName from the guild.json file
    fs.readFile('./src/guild.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
  
      let guildData = JSON.parse(data);
      delete guildData[guild.id];
  
      fs.writeFile('./src/guild.json', JSON.stringify(guildData, null, 2), err => {
        if (err) {
          console.error(err);
          return;
        }
  
        console.log(`Deleted guildId ${guild.id} and guildName ${guild.name} from the guild.json file.`);
      });
    });
  });