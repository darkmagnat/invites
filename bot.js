const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
	client.user.setGame(`-Universe Town`,'https://www.twitch.tv/v5bz');
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** [ https://discord.gg/MfsDEhC ]   [user]   [قلوبهمّ تفيض احتراما وتقديرا لك♡الأشخاص  يبحُثون عن مكان جَميل والبّعض يجعل المكان اجمَل:black_heart: . حياكم الله معناالدعووة خاصة لك...:revolving_hearts:]  ** ')

}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
