(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "MerileStudiosOfficial";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.ryukoCommand = {
            command: 'ryuko',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("https://33.media.tumblr.com/a6acee846f7f64f54b2ee0f9ef5c6321/tumblr_n9vz4p20qG1r32an8o1_500.gif");
                }
              }
            };
            
        bot.commands.baconCommand = {
            command: 'leone',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("http://data.whicdn.com/images/148927367/large.gif");
                }
              }
            };
            
        bot.commands.aboosCommand = {
            command: 'aboos',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("http://i.imgur.com/dALhxat.gif");
                }
              }
            };
            
        bot.commands.tailsCommand = {
            command: 'tails',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("http://mixingthetracks.com/gallery/f6efc0bb80dcfeda64de5b62bcdb4c3a_90x90.gif");
                }
              }
            };
            
        bot.commands.grillCommand = {
            command: 'grill',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("http://orig14.deviantart.net/2979/f/2009/097/8/c/tails_in_a_dress_o_o_by_lottelemmers.jpg");
                }
              }
            };
            
        bot.commands.icspCommand = {
            command: 'icsp',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("I CLEAN SHITPOSTS DAILY http://orig05.deviantart.net/bbdc/f/2015/129/a/4/t_maid_by_unbreakablebond-d8stg59.png");
                }
              }
            };
            
        bot.commands.kltCommand = {
            command: 'nerd',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("http://i.imgur.com/eaC8M40.jpg");
                }
              }
            };
            
        bot.commands.kitsuneCommand = {
            command: 'killlatails',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("http://orig02.deviantart.net/88c7/f/2012/115/c/7/rick_dress_by_unbreakablebond-d4xk5hs.jpg");
                }
              }
            };

        bot.commands.ktCommand = {
            command: 'kappa',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("https://pbs.twimg.com/media/B8W6wUPCYAEmWjy.png");
                }
              }
            };

        bot.commands.kteCommand = {
            command: 'derp',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("https://lh3.googleusercontent.com/-l047245cEBI/VaqPkYP72gI/AAAAAAAAA3c/aEHApEu6KQk/w640-h480/standalone.gif");
                }
              }
            };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "Ryuko ~<3",
      language: "english",
      chatLink: "https://rawgit.com/bscBot/source/master/lang/en.json",
      scriptLink: "https://rawgit.com/bscBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: true, // true or false
      autowoot: false,
      autoskip: false,
      smartSkip: false,
      cmdDeletion: false,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: false,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: false,
      voteSkipLimit: 10,
      historySkip: false,
      timeGuard: false,
      maximumSongLength: 10,
      autodisable: false,
      commandCooldown: 30,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Temporary Message of the Day",
      filterChat: false,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: [],
      messageInterval: 5,
      songstats: true,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/bscBot/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/bscBot/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/bscBot/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/bscBot/source/master/basicBot.js", extend);

}).call(this);
