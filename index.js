const Discord = require('discord.js');
const { token } = require('./config.json');
// const token = 'NTc3ODcyMzY0MzMxNTk3ODc0.XNrXnA.D2Ab4yil4tGDSIxYiUgiBSSXL4M';
const prefix = ('l!');
const client = new Discord.Client();
require('dotenv/config');
client.disabledMembers = new Map();
client.once('ready', async () => {
	console.log('All systems online and active!');
	setTimeout(() => client.user.setPresence({ status: 'online', game: { name: 'with my peepee hole' } }), 60000);
	client.user.setPresence({
		game: {
			name: 'its own suicide',
			type: 'STREAMING',
			url: 'https://www.twitch.tv/cyberludthra',
		},
	});
});

client.login(token);


// START UP BOT

//

// DETECTION COMMANDS

client.on('message', function(message) {
	// Prefix Commands
	if(message.author.bot) return;
	console.log(message.content);
	const args = message.content.slice(prefix.length).split(' ');
	const target = message.mentions.users.first() || message.author;
	const fortunes = [
		'Hmm, check again later',
		'Ah, here we go again',
		'Hell no',
		'No; Thats seriously gay',
		'That seems like an Bruh Moment',
		'My bruhs say yeah',
		'Hell yeah',
		'Jack off and think about that one again',
		'Not sure about that one',
	];

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	switch (args[0].shift().toLowerCase()) {
	case 'niggaball':
		if (args[1]) {
			message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)] + ', my nigga.');
		}
		break;

	case 'help':
		message.channel.send('**━━━━━ Help Panel ━━━━━**\n\n\n			-= Typed Commands =-\n\nl!help | The command you\'re using now, dumbass.\nl!whois[User] | To see who your friends REALLY are.\nl!niggaball [Question] | To ask the NiggaBall:tm: a question you would like answered.\nl!avatar | Displays the mentioned member\'s Avatar in a bigger format.\n\n\n			-= Detection Commands =-\n\n"lmao" | Our kind bot helps you pick up what you have lost.\n"true true" | true true.\n"bruh" | Solidifies a bruh moment.\n(User) out here "clowning" | Exposes a clown nigga.\n[REDACTED INFORMATION] | A secret phrase that allows you to ping EVERYONE on the server without having the permission enabled.');
		break;

	case 'whois':
		message.channel.send('Command Usage: "l!whois(User)"\n\nAvalible Users: Carl, Yono, Arka, Makoto, Kongou, Jericho, Kryo.');
		break;

	case 'whoismakoto':
		message.channel.send('**Makoto** is a Japanese ~~trap~~ shota who transitions in and out of being able to speak english well. Makoto isn\'t Makoto without coming in with a Smash pic or message at the worst timing.');
		break;

	case 'whoiskongou':
		message.channel.send('**Kongou** is an american Weeb/Cheeb who flexes his knowledge about aSiAn cUlTuReS any second he gets. He\'s also Top Tier Pedo.');
		break;

	case 'whoiscarl':
		message.channel.send('**Carl** is a short depressed attention whore who script kiddies 3ds hacks.');
		break;

	case 'whoisyono':
		message.channel.send('**Yono** is an eTrap who draws edgy characters smiling with long legs and also says "does my artstyle look like ____?" alot.');
		break;

	case 'whoischowking':
		message.channel.send('***C h o k e           h e e***');
		break;

	case 'whoisarka':
		message.channel.send('http://www.fleshtunnel.com');
		break;

	case 'whoiskryo':
		message.channel.send('**Kryo** has all your favorite Waifus and is also **Jericho\'s** Mistress.');
		break;

	case 'whoisjericho':
		message.channel.send('**Jericho** tries to be a good therapist but fails terribly, but also xD :smile: xDddd :smile: :smile: :smile: xDdd. Anyways.');
		break;

	case 'avatar':
		message.channel.send({ files: [
			{
				attachment: target.displayAvatarURL,
				name: 'avatar.png',
			},
		] });
		break;


	}
}
);


//


client.on('message', message => {
	// Detection Commands
	if(message.author.bot) return;
	const commandcase = message.content.toLowerCase();
	const pingmentionedmember = message.mentions.users.first();
	const isGay = [
		'It the truth though :pensive: :pensive: :pensive:',
		pingmentionedmember + 'is gay asf tho.',
		'You\'re not wrong... :pensive:',
	];

	// "lmao Detection Bully" Command
	if (commandcase.includes('lmao') || commandcase.includes('l m a o') || commandcase.includes('lmfao') || commandcase.includes('l m f a o')) {
		message.channel.send('Did you lose your ass again? Let me get it for you.');
	}
	// "true true Detection Bully" Command
	if (commandcase.includes('true true') || commandcase.includes('t r u e  t r u e')) {
		message.channel.send('true true', {
			file: 'http://media.discordapp.net/attachments/374885445030510592/567738823191035924/JPEG_20190404_175259.jpg',
		});
	}
	// "wasted Detection Bully" Command
	if (commandcase.includes('wasted') || commandcase.includes('w a s t e d')) {
		message.channel.send('', {
			file: 'https://cdn.discordapp.com/attachments/570537687954751528/570544623827550208/hqdefault.png',
		});
	}
	// "🦀 Detection Bully" Command
	if (commandcase.includes('is gone')) {
		message.channel.send('', {
			file: 'https://cdn.discordapp.com/attachments/374885445030510592/570556768707674132/tenor.gif',
		});
	}
	// "clowning Detection Bully" Command
	if (commandcase.includes('is gay') & commandcase.includes('<@') & commandcase.includes('>') != commandcase.includes('!567328033254408209') || commandcase.includes('be gay') & commandcase.includes('<@') & commandcase.includes('>') != commandcase.includes('!567328033254408209') || commandcase.includes('gay') & commandcase.includes('<@') & commandcase.includes('>') != commandcase.includes('!567328033254408209')) {
		message.channel.send(isGay[Math.floor(Math.random() * isGay.length)]);
	}
	// "TITI Detection Bully" Command
	if (commandcase.includes('titi')) {
		message.channel.send('', {
			file: 'https://cdn.discordapp.com/attachments/570537687954751528/570557477750439936/JPEG_20190424_134841.jpg',
		});
	}
	// "bruh Detection Bully" Command
	if (commandcase.includes('bruh') || commandcase.includes('b r u h') || commandcase.includes('breh') || commandcase.includes('b r e h')) {
		message.channel.send(' ', {
			file: 'https://pbs.twimg.com/profile_images/1066371730074144769/dXKx9agF_400x400.jpg',
		});
	}

	if(message.author.bot) return;
	const args = message.content.trim().split(/ +/g);
	if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im' || args[0].toLowerCase() == 'am') && (args[1]) && !client.disabledMembers.has(message.author.id)) {
		message.channel.send(`Hi ${args.slice(1).join(' ')}, I'm dad`);
	}
	// "bruh Detection Bully" Command
	if (commandcase.includes('rarted')) {
		message.channel.send('Rawr x3 nuzzles how are you pounces on you you\'re so warm o3o notices you have a bulge o: someone\'s happy nuzzles your necky wecky~ murr hehehe rubbies your bulgy wolgy you\'re so big :oooo rubbies more on your bulgy wolgy it doesn\'t stop growing ·www· kisses you and lickies your necky daddy likies (; nuzzles wuzzles I hope daddy really likes $: wiggles butt and squirms I want to see your big daddy meat wiggles butt I have a little itch o3o wags tail can you please get my itch puts paws on your chest nyea its a seven inch itch rubs your chest can you help me pwease squirms pwetty pwease sad face I need to be punished runs paws down your chest and bites lip like I need to be punished really good paws on your bulge as I lick my lips I\'m getting thirsty. I can go for some milk unbuttons your pants as my eyes glow you smell so musky :v licks shaft* mmmm so musky drools all over your daddy meat I like fondles Mr. Fuzzy Balls hehe puts snout on balls and inhales deeply oh god im so hard licks balls punish me daddy nyea squirms more and wiggles butt I love your musky goodness bites lip please punish me licks lips* nyea suckles on your tip so good licks pre of your cock salty goodness eyes role back and goes balls deep mmmm moans and suckles', {
		});
	}
	// "clowning Detection Bully" Command
	if (commandcase.includes('clowning') & commandcase.includes('<@') & commandcase.includes('>') != commandcase.includes('!567328033254408209') || commandcase.includes('clowning') & commandcase.includes('<@') & commandcase.includes('>') != commandcase.includes('!567328033254408209')) {
		message.channel.send(pingmentionedmember + ' out here clowning.', {
			file: 'https://cdn.discordapp.com/attachments/391235516647079938/567982442053632000/clowning.jpg',
		});
	}
	if (commandcase.includes('clowning') & commandcase.includes('<@') & commandcase.includes('>') & commandcase.includes('!567328033254408209')) {
		message.channel.send(message.author + ' is the real clown here.', {
			file: 'https://cdn.discordapp.com/attachments/391235516647079938/567982442053632000/clowning.jpg',
		});
	}
	// "Fuck you BullyBot" Command
	if (commandcase.includes('fuck you') & commandcase.includes('<@') & commandcase.includes('>')) {
		message.channel.send('Nah fuck YOU, ' + message.author, {
		});
	}
	// "@everyone Detection Bully" Command
	if (commandcase.includes ('Supercali')) {
		message.channel.send('Some Faggot: *Pings everyone on the fucking server.*');
		message.channel.send('@everyone: :angry:');
	}
}
);


//

client.on('message', function(message) {
	// Operator Commands
	if(message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
	const taggedUser = message.mentions.members.first() || message.guild.members.get(args[0]);
	const kickMember = message.guild.member(taggedUser);
	const mem = message.member;
	const ImperialR = message.member.guild.roles.find(r => r.name == '🔮 Imperial 🔮'); const ReignSupR = message.member.guild.roles.find(r => r.name == '👑 Reign Supreme 👑');
	const ReignR = message.member.guild.roles.find(r => r.name == '💎 Reign 💎'); const TinkererR = message.member.guild.roles.find(r => r.name == '⚙️ Tinkerer ⚙️');
	const OfficerR = message.member.guild.roles.find(r => r.name == '🚨 Officer 🚨');
	const	HasOperatorRole = mem.roles.has(ImperialR.id) || mem.roles.has(ReignSupR.id) || mem.roles.has(ReignR.id) || mem.roles.has(TinkererR.id) || mem.roles.has(OfficerR.id);
	switch (args[0].toLowerCase()) {
	case 'optest':
		if(!HasOperatorRole) {
			return;
		}
		if(HasOperatorRole) {
			message.channel.send('Either you ARE an operator, or this shit failed.');
		}
		break;
	case 'help':
		if(!HasOperatorRole) {
			return;
		}
		if(HasOperatorRole) {
			message.channel.send('**━━━━━ Operator Help Panel ━━━━━**\n\nl!kick | Allows you to kick the pinged member; EVEN OTHER OPERATORS ;3.\nl!');
		}
		break;
	case 'kick':
		if(!HasOperatorRole) {
			return;
		}
		if(HasOperatorRole) {
			if (taggedUser) {
				if (kickMember) {
					kickMember.kick('Placeholder Argument.').then(() => {
						message.reply('Successfully kicked ' + taggedUser + '!');
					});
				}
			}
		}
		break;
	case 'ban':
		if(!HasOperatorRole) {
			return;
		}
		if(HasOperatorRole) {
			if (taggedUser) {
				if (kickMember) {
					kickMember.ban('Placeholder Argument.').then(() => {
						message.reply('Successfully kicked ' + taggedUser + '!');
					});
				}
			}
		}
		break;

	}
}
);

client.on('message', function(message) {
	// Role Commands
	if(message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
	const commandcase = message.content.toLowerCase();
	const mem = message.member;
	const member = message.mentions.members.first() || message.guild.members.get(args[0]);
	const CRBirthday1 = message.member.guild.roles.find(r=> r.name === 'Birthday Blurple'); const CRBirthday2 = message.member.guild.roles.find(r=> r.name === 'Birthday Cake');
	const CRBirthday3 = message.member.guild.roles.find(r=> r.name === 'Birthday Popper'); const CREquinox1 = message.member.guild.roles.find(r=> r.name === 'Equinox Eclipsus');
	const CRHalloween1 = message.member.guild.roles.find(r=> r.name === 'Halloween Pumpkin'); const CRHalloween2 = message.member.guild.roles.find(r=> r.name === 'Halloween Ghoul');
	const CRHalloween3 = message.member.guild.roles.find(r=> r.name === 'Halloween Poison'); const CRHalloween4 = message.member.guild.roles.find(r=> r.name === 'Halloween Dracula');
	const CRChristmas1 = message.member.guild.roles.find(r=> r.name === 'Christmas Jingle'); const CRChristmas2 = message.member.guild.roles.find(r=> r.name === 'Christmas Present');
	const CRChristmas3 = message.member.guild.roles.find(r=> r.name === 'Christmas Spirit'); const CRLunar1 = message.member.guild.roles.find(r=> r.name === 'Lunar Dragon');
	const CRLunar2 = message.member.guild.roles.find(r=> r.name === 'Lunar Luck'); const CRLunar3 = message.member.guild.roles.find(r=> r.name === 'Lunar Fortune');
	const CRValentine1 = message.member.guild.roles.find(r=> r.name === 'Valentine Arrow'); const CRPattyDay1 = message.member.guild.roles.find(r=> r.name === 'Clover Ireland');
	const CREaster1 = message.member.guild.roles.find(r=> r.name === 'Easter Egg');
	const CR1 = message.member.guild.roles.find(r => r.name == 'Royal Bloom Gold'); const CR2 = message.member.guild.roles.find(r => r.name == 'Spicy Hot Orange');
	const CR3 = message.member.guild.roles.find(r => r.name == 'Citrus Berry Orange'); const CR4 = message.member.guild.roles.find(r => r.name == 'Clash Alloy Orange');
	const CR5 = message.member.guild.roles.find(r => r.name == 'Coral Reef Orange'); const CR6 = message.member.guild.roles.find(r => r.name == 'Flaring Flame Orange');
	const CR7 = message.member.guild.roles.find(r => r.name == 'Ancient Scroll Orange'); const CR8 = message.member.guild.roles.find(r => r.name == 'Mule Dirt Brown');
	const CR9 = message.member.guild.roles.find(r => r.name == 'Earthy Dirt Brown'); const CR10 = message.member.guild.roles.find(r => r.name == 'Lemon Citrus Yellow');
	const CR11 = message.member.guild.roles.find(r => r.name == 'Spicy Mustard Yellow'); const CR12 = message.member.guild.roles.find(r => r.name == 'Canary Spark Yellow');
	const CR13 = message.member.guild.roles.find(r => r.name == 'Soft Mayonnaise Yellow'); const CR14 = message.member.guild.roles.find(r => r.name == 'Glowing Peridot Green');
	const CR15 = message.member.guild.roles.find(r => r.name == 'Chill Mint Green'); const CR16 = message.member.guild.roles.find(r => r.name == 'Aria Aquamarine Green');
	const CR17 = message.member.guild.roles.find(r => r.name == 'Tea Leaf Green'); const CR18 = message.member.guild.roles.find(r => r.name == 'Citrus Leaf Green');
	const CR19 = message.member.guild.roles.find(r => r.name == 'Bright Lime Green'); const CR20 = message.member.guild.roles.find(r => r.name == 'Forest Birch Green');
	const CR21 = message.member.guild.roles.find(r => r.name == 'Soft Arctic Blue'); const CR22 = message.member.guild.roles.find(r => r.name == 'Chilly Arctic Blue');
	const CR23 = message.member.guild.roles.find(r => r.name == 'Chill Lavender Blue'); const CR24 = message.member.guild.roles.find(r => r.name == 'Sparked Neon Aqua');
	const CR25 = message.member.guild.roles.find(r => r.name == 'Low Shallow Aqua'); const CR26 = message.member.guild.roles.find(r => r.name == 'Trinket Teal Aqua');
	const CR27 = message.member.guild.roles.find(r => r.name == 'Deep Sea Aqua'); const CR28 = message.member.guild.roles.find(r => r.name == 'Calmed Ocean Blue');
	const CR29 = message.member.guild.roles.find(r => r.name == 'Deep Ocean Blue'); const CR30 = message.member.guild.roles.find(r => r.name == 'Deep Navy Blue');
	const CR31 = message.member.guild.roles.find(r => r.name == 'Deep Navy Palatinate'); const CR32 = message.member.guild.roles.find(r => r.name == 'Deep Rose Palatinate');
	const CR33 = message.member.guild.roles.find(r => r.name == 'Charming Royal Purple'); const CR34 = message.member.guild.roles.find(r => r.name == 'Malevolent Magenta');
	const CR35 = message.member.guild.roles.find(r => r.name == 'Calm Lavender Purple'); const CR36 = message.member.guild.roles.find(r => r.name == 'Coral Reef Pink');
	const CR37 = message.member.guild.roles.find(r => r.name == 'Aria Bubblegum Quartz'); const CR38 = message.member.guild.roles.find(r => r.name == 'White Rose Quartz');
	const CR39 = message.member.guild.roles.find(r => r.name == 'Hot Rose Quartz'); const CR40 = message.member.guild.roles.find(r => r.name == 'Light Rose Quartz');
	const CR41 = message.member.guild.roles.find(r => r.name == 'Bright Neon Pink'); const CR42 = message.member.guild.roles.find(r => r.name == 'Sour Apple Red');
	const CR43 = message.member.guild.roles.find(r => r.name == 'Cotton Candy Red'); const CR44 = message.member.guild.roles.find(r => r.name == 'Sweet Candy Red');
	const CR45 = message.member.guild.roles.find(r => r.name == 'Sparkling Ruby Red'); const CR46 = message.member.guild.roles.find(r => r.name == 'Elegant Rose Red');
	const CR47 = message.member.guild.roles.find(r => r.name == 'Deep Blood Red'); const CR48 = message.member.guild.roles.find(r => r.name == 'Cosmic Void Black');
	const CR49 = message.member.guild.roles.find(r => r.name == 'Ancient Jade Black'); const CR50 = message.member.guild.roles.find(r => r.name == 'Dark Licorice Black');
	const CR51 = message.member.guild.roles.find(r => r.name == 'Dark Smoke Grey'); const CR52 = message.member.guild.roles.find(r => r.name == 'Sharp Onyx Grey');
	const CR53 = message.member.guild.roles.find(r => r.name == 'Smokey Ash Grey'); const CR54 = message.member.guild.roles.find(r => r.name == 'Sharp Lead Grey');
	const CR55 = message.member.guild.roles.find(r => r.name == 'Perky Graphite Grey'); const CR56 = message.member.guild.roles.find(r => r.name == 'Softened Cream White');
	const CR57 = message.member.guild.roles.find(r => r.name == 'Dazzling Daisy White');

	const HaveColorRole = mem.roles.has(CR1.id) || mem.roles.has(CR2.id) || mem.roles.has(CR3.id) || mem.roles.has(CR4.id) || mem.roles.has(CR5.id) || mem.roles.has(CR6.id) || mem.roles.has(CR7.id) || mem.roles.has(CR8.id) || mem.roles.has(CR9.id) || mem.roles.has(CR10.id) || mem.roles.has(CR11.id) || mem.roles.has(CR12.id) || mem.roles.has(CR13.id) || mem.roles.has(CR14.id) || mem.roles.has(CR15.id) || mem.roles.has(CR16.id) || mem.roles.has(CR17.id) || mem.roles.has(CR18.id) || mem.roles.has(CR19.id) || mem.roles.has(CR20.id) || mem.roles.has(CR21.id) || mem.roles.has(CR22.id) || mem.roles.has(CR23.id) || mem.roles.has(CR24.id) || mem.roles.has(CR25.id) || mem.roles.has(CR26.id) || mem.roles.has(CR27.id) || mem.roles.has(CR28.id) || mem.roles.has(CR29.id) || mem.roles.has(CR30.id) || mem.roles.has(CR31.id) || mem.roles.has(CR32.id) || mem.roles.has(CR33.id) || mem.roles.has(CR34.id) || mem.roles.has(CR35.id) || mem.roles.has(CR36.id) || mem.roles.has(CR37.id) || mem.roles.has(CR38.id) || mem.roles.has(CR39.id) || mem.roles.has(CR40.id) || mem.roles.has(CR41.id) || mem.roles.has(CR42.id) || mem.roles.has(CR43.id) || mem.roles.has(CR44.id) || mem.roles.has(CR45.id) || mem.roles.has(CR46.id) || mem.roles.has(CR47.id) || mem.roles.has(CR48.id) || mem.roles.has(CR49.id) || mem.roles.has(CR50.id) || mem.roles.has(CR51.id) || mem.roles.has(CR52.id) || mem.roles.has(CR53.id) || mem.roles.has(CR54.id) || mem.roles.has(CR55.id) || mem.roles.has(CR56.id) || mem.roles.has(CR57.id);
	switch (args[0].toLowerCase()) {
	case 'crwipe':
		if(commandcase.includes('cr')) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		break;

	case 'crwipeevent':
		if(commandcase.includes('cr')) {
			mem.removeRole(CRBirthday1) & mem.removeRole(CRBirthday2) & mem.removeRole(CRBirthday3) & mem.removeRole(CREquinox1) & mem.removeRole(CRHalloween1) & mem.removeRole(CRHalloween2) & mem.removeRole(CRHalloween3) & mem.removeRole(CRHalloween4) & mem.removeRole(CREaster1) & mem.removeRole(CRChristmas1) & mem.removeRole(CRChristmas2) & mem.removeRole(CRChristmas3) & mem.removeRole(CRLunar1) & mem.removeRole(CRLunar2) & mem.removeRole(CRLunar3) & mem.removeRole(CRValentine1) & mem.removeRole(CRPattyDay1);
		}
		break;

	case 'crevent':
		mem.addRole(CRBirthday1);
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		break;

	case 'crevent2':
		mem.addRole(CRBirthday2);
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		break;
	case 'crevent3':
		mem.addRole(CRBirthday3);
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		break;

	case 'cr1':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR1)) {
			mem.addRole(CR1);
		}
		break;

	case 'cr2':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR2)) {
			mem.addRole(CR2);
		}
		break;

	case 'cr3':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR3)) {
			mem.addRole(CR3);
		}
		break;

	case 'cr4':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR4)) {
			mem.addRole(CR4);
		}
		break;

	case 'cr5':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR5)) {
			mem.addRole(CR5);
		}
		break;

	case 'cr6':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR6)) {
			mem.addRole(CR6);
		}
		break;

	case 'cr7':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR7)) {
			mem.addRole(CR7);
		}
		break;

	case 'cr8':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR8)) {
			mem.addRole(CR8);
		}
		break;

	case 'cr9':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR9)) {
			mem.addRole(CR9);
		}
		break;

	case 'cr10':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR10)) {
			mem.addRole(CR10);
		}
		break;

	case 'cr11':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR11)) {
			mem.addRole(CR11);
		}
		break;

	case 'cr12':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR12)) {
			mem.addRole(CR12);
		}
		break;

	case 'cr13':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR13)) {
			mem.addRole(CR13);
		}
		break;

	case 'cr14':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR14)) {
			mem.addRole(CR14);
		}
		break;

	case 'cr15':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR15)) {
			mem.addRole(CR15);
		}
		break;

	case 'cr16':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR16)) {
			mem.addRole(CR16);
		}
		break;

	case 'cr17':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR17)) {
			mem.addRole(CR17);
		}
		break;

	case 'cr18':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR18)) {
			mem.addRole(CR18);
		}
		break;

	case 'cr19':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR19)) {
			mem.addRole(CR19);
		}
		break;

	case 'cr20':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR20)) {
			mem.addRole(CR20);
		}
		break;

	case 'cr21':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR21)) {
			mem.addRole(CR21);
		}
		break;

	case 'cr22':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR22)) {
			mem.addRole(CR22);
		}
		break;

	case 'cr23':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR23)) {
			mem.addRole(CR23);
		}
		break;

	case 'cr24':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR24)) {
			mem.addRole(CR24);
		}
		break;

	case 'cr25':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR25)) {
			mem.addRole(CR25);
		}
		break;

	case 'cr26':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR26)) {
			mem.addRole(CR26);
		}
		break;

	case 'cr27':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR27)) {
			mem.addRole(CR27);
		}
		break;

	case 'cr28':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR28)) {
			mem.addRole(CR28);
		}
		break;

	case 'cr29':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR29)) {
			mem.addRole(CR29);
		}
		break;

	case 'cr30':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR30)) {
			mem.addRole(CR30);
		}
		break;

	case 'cr31':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR31)) {
			mem.addRole(CR31);
		}
		break;

	case 'cr32':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR32)) {
			mem.addRole(CR32);
		}
		break;

	case 'cr33':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR33)) {
			mem.addRole(CR33);
		}
		break;

	case 'cr34':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR34)) {
			mem.addRole(CR34);
		}
		break;

	case 'cr35':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR35)) {
			mem.addRole(CR35);
		}
		break;

	case 'cr36':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR36)) {
			mem.addRole(CR36);
		}
		break;

	case 'cr37':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR37)) {
			mem.addRole(CR37);
		}
		break;

	case 'cr38':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR38)) {
			mem.addRole(CR38);
		}
		break;

	case 'cr39':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR39)) {
			mem.addRole(CR39);
		}
		break;

	case 'cr40':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR40)) {
			mem.addRole(CR40);
		}
		break;

	case 'cr41':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR41)) {
			mem.addRole(CR41);
		}
		break;

	case 'cr42':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR42)) {
			mem.addRole(CR42);
		}
		break;

	case 'cr43':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR43)) {
			mem.addRole(CR43);
		}
		break;

	case 'cr44':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR44)) {
			mem.addRole(CR44);
		}
		break;

	case 'cr45':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR45)) {
			mem.addRole(CR45);
		}
		break;

	case 'cr46':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR46)) {
			mem.addRole(CR46);
		}
		break;

	case 'cr47':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR47)) {
			mem.addRole(CR47);
		}
		break;

	case 'cr48':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR48)) {
			mem.addRole(CR48);
		}
		break;

	case 'cr49':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR49)) {
			mem.addRole(CR49);
		}
		break;

	case 'cr50':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR50)) {
			mem.addRole(CR50);
		}
		break;

	case 'cr51':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR51)) {
			mem.addRole(CR51);
		}
		break;

	case 'cr52':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR52)) {
			mem.addRole(CR52);
		}
		break;

	case 'cr53':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR53)) {
			mem.addRole(CR53);
		}
		break;

	case 'cr54':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR54)) {
			mem.addRole(CR54);
		}
		break;

	case 'cr55':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR55)) {
			mem.addRole(CR55);
		}
		break;

	case 'cr56':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR56)) {
			mem.addRole(CR56);
		}
		break;

	case 'cr57':
		if(HaveColorRole) {
			mem.removeRole(CR1) & mem.removeRole(CR2) & mem.removeRole(CR3) & mem.removeRole(CR4) & mem.removeRole(CR5) & mem.removeRole(CR6) & mem.removeRole(CR7) & mem.removeRole(CR8) & mem.removeRole(CR9) & mem.removeRole(CR10) & mem.removeRole(CR11) & mem.removeRole(CR12) & mem.removeRole(CR13) & mem.removeRole(CR14) & mem.removeRole(CR15) & mem.removeRole(CR16) & mem.removeRole(CR17) & mem.removeRole(CR18) & mem.removeRole(CR19) & mem.removeRole(CR20) & mem.removeRole(CR21) & mem.removeRole(CR22) & mem.removeRole(CR23) & mem.removeRole(CR24) & mem.removeRole(CR25) & mem.removeRole(CR26) & mem.removeRole(CR27) & mem.removeRole(CR28) & mem.removeRole(CR29) & mem.removeRole(CR30) & mem.removeRole(CR31) & mem.removeRole(CR32) & mem.removeRole(CR33) & mem.removeRole(CR34) & mem.removeRole(CR35) & mem.removeRole(CR36) & mem.removeRole(CR37) & mem.removeRole(CR38) & mem.removeRole(CR39) & mem.removeRole(CR40) & mem.removeRole(CR41) & mem.removeRole(CR42) & mem.removeRole(CR43) & mem.removeRole(CR44) & mem.removeRole(CR45) & mem.removeRole(CR46) & mem.removeRole(CR47) & mem.removeRole(CR48) & mem.removeRole(CR49) & mem.removeRole(CR50) & mem.removeRole(CR51) & mem.removeRole(CR52) & mem.removeRole(CR53) & mem.removeRole(CR54) & mem.removeRole(CR55) & mem.removeRole(CR56) & mem.removeRole(CR57);
		}
		if(!mem.roles.has(CR57)) {
			mem.addRole(CR57);
		}
		break;

	case 'crwheel':
		message.channel.send('━━━━━━━━━━[ Color Menu ]━━━━━━━━━━\n\n<@&375066954098147330> [l!cr1]\n<@&375558767602827274> [l!cr2]\n<@&430632776576794624> [l!cr3]\n<@&461512924641361921> [l!cr4]\n<@&375177666489221130> [l!cr5]\n<@&393739098885586946> [l!cr6]\n<@&416176376379473932> [l!cr7]\n<@&444056562101911552> [l!cr8]\n<@&430248317088169984> [l!cr9]\n<@&375066966391652354> [l!cr10]\n<@&458597216399917057> [l!cr11]\n<@&375563063878746112> [l!cr12]\n<@&445463096673435648> [l!cr13]\n<@&375564866523758593> [l!cr14]\n<@&460336021142503424> [l!cr15]\n<@&375549465303711744> [l!cr16]\n<@&375565315678928897> [l!cr17]\n<@&446301672311095298> [l!cr18]\n<@&375201075835174915> [l!cr19]\n<@&375559480538038273> [l!cr20]\n<@&375563672975572992> [l!cr21]\n<@&461484290467692544> [l!cr22]\n<@&375066967578640384> [l!cr23]\n<@&406309698552201216> [l!cr24]\n<@&375175767442718720> [l!cr25]\n<@&375563782287523841> [l!cr26]\n<@&375561276203728896> [l!cr27]\n<@&375092480359530506> [l!cr28]\n<@&393738508432441344> [l!cr29]\n<@&445543709237313546> [l!cr30]\n<@&442353359786082314> [l!cr31]\n<@&375564062563500032> [l!cr32]\n<@&375066969453494273> [l!cr33]\n<@&443416990040850433> [l!cr34]\n<@&447999551069224960> [l!cr35]\n<@&458600132171137024> [l!cr36]\n<@&375562621165764609> [l!cr37]\n<@&375563503823486976> [l!cr38]\n<@&375560973047824384> [l!cr39]\n<@&441557011583336458> [l!cr40]\n<@&375066964760199168> [l!cr41]\n<@&460336023172415488> [l!cr42]\n<@&458596464826777600> [l!cr43]\n<@&375066964898349058> [l!cr44]\n<@&393740123143143434> [l!cr45]\n<@&375561513945006080> [l!cr46]\n<@&415883713138917396> [l!cr47]\n<@&461512923995439114> [l!cr48]\n<@&375425624950702090> [l!cr49]\n<@&461512926453301248> [l!cr50]\n<@&415881787278098442> [l!cr51]\n<@&460359885847134208> [l!cr52]\n<@&461512925664903178> [l!cr53]\n<@&375066968329551873> [l!cr54]\n<@&375066968614502410> [l!cr55]\n<@&494137130197712905> [l!cr56]\n<@&375066966043525140> [l!cr57]');
		break;
	case 'info':
		message.channel.send('```━━━━━━━━━━[ Color Commands ]━━━━━━━━━━\n\nColor Picker | l!cr(Color Number) | Allows you to equip a color from the list above and display it as your Profile\'s Color.\n\nPickup Event Color | l!crevent | Allows you to equip and keep the current event color (An event color will always be lower than a regular color. This means you HAVE to run "l!crwipe" to use the event color) and display it as your Profile\'s Color.\n\nColor Remover | l!crwipe | Allows you to wipe all the Colors (This does not include event colors) from your Profile and pick a new color from the list.\n\nEvent Color Remover | l!crwipeevent | Allows you to wipe **all** event Colors (This does not include regular colors) from your Profile and pick a new color or event color from the list.```');
		break;
	}
}
);
