const Discord = require("discord.js");
const client = new Discord.Client();

var oyun1 = 'oyun'
var lol1 = 'lol';
var lol2 = 'Lol';
var lol3 = 'LoL';
var csgo1 = 'csgo'
var csgo2 = 'cs:go'
var csgo3 = 'cs'
var csgo4 = 'CS'
var pubg1 = 'pubg'
var pubg2 = 'Pubg'
var pubg3 = 'PUBG'

client.on('ready', () => {
  console.log(`Bot Durumu: ${client.user.tag} Aktif!`);
  
  client.user.setStatus('Online')
  client.user.setGame('Hava Çok Soğuk Kalın Giyin!', 'https://www.twitch.tv/jahrein');

});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Canım! :smile:');
  }
  
  if (msg.content.toLowerCase() === 'slm') {
    msg.reply('Aleyküm Selam Canım! :smile:');
  }
  
  if (msg.content.toLowerCase() === 'nbr') {
    msg.reply('İyidir Senden Naber? :blush:');
  }
  
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyidir Senden Naber? :blush:');
  }

  if (msg.content.toLowerCase() === 'nasilsin') {
    msg.reply('İyidir Senden Naber? :blush:');
  }

  if (msg.content.toLowerCase() === 'nasilsiniz') {
    msg.reply('İyidir Senden Naber? :blush:');
  }

  if (msg.content.toLowerCase() === 'nasılsın') {
    msg.reply('İyidir Senden Naber? :blush:');
  }

  if (msg.content.toLowerCase() === 'nasılsınız') {
    msg.reply('İyidir Senden Naber? :blush:');
  }

  if (msg.content.toLowerCase() === '+ping') {
    msg.reply('Bot Pingi: **' +client.ping+'** ms');
  }

  if (msg.content.startsWith(oyun1)) {
    msg.reply(':sparkles:**LoL**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(lol1)) {
    msg.reply(':sparkles:**LoL**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(lol2)) {
    msg.reply(':sparkles:**LoL**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(lol3)) {
    msg.reply(':sparkles:**LoL**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(csgo1)) {
    msg.reply('sparkles**CS:GO**sparkles Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(csgo2)) {
    msg.reply(':sparkles:**CS:GO**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(csgo3)) {
    msg.reply(':sparkles:**CS:GO**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(csgo4)) {
    msg.reply(':sparkles:**CS:GO**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(pubg1)) {
    msg.reply(':sparkles:**PUBG**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(pubg2)) {
    msg.reply(':sparkles:**PUBG**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

  if (msg.content.startsWith(pubg3)) {
    msg.reply(':sparkles:**PUBG**:sparkles: Oynamak İçin Birilerini Arıyor! :video_game: | Oto Etiket: :speaking_head: @here');
  }

});

client.login(process.evn.BOT_TOKEN);
