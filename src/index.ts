const SteamUser = require("steam-user");
const SteamTopt = require("steam-totp");
const SteamCommunity = require("steamcommunity");
const TradeOfferManager = require("steam-tradeoffer-manager");

const {accountName, password} = require("./config/user-info.json");

const client = new SteamUser();
const community = new SteamCommunity();
const tradeManager = new TradeOfferManager({
  steam: client,
  community,
  language: "en",
});

client.logOn({
  accountName,
  password,
});

client.gamesPlayed([440]);

client.on("loggedOn", () => {
  console.log("Logged successfully to the bot");
  client.setPersona(SteamUser.Steam.EPersonaState.Online, ["Glaze [Trading Bot]"]);
});

client.on("webSession", (sessionid, cookies) => {
  tradeManager.setCookies(cookies);
  community.setCookies(cookies);
  community.startConfirmationChecker(5000, "your_identity_secret");
});
