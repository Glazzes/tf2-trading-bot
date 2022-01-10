const SteamUserInventory = require("steam-user-inventory");

SteamUserInventory("76561198114402400", "/440/2").then((data) => {
  const rifles = data.filter((item) => item.marketHashName.includes("Mann Co. Supply Crate Key"));
  console.log(rifles);
});
