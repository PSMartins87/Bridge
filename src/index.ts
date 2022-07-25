import Facebook from "./Platforms/Facebook";
import IPlataform from "./Platforms/IPlatform";
import Twitch from "./Platforms/Twitch";
import Youtube from "./Platforms/Youtube";
import AdvancedLive from "./Transmissions/AdvancedLive";
import Live from "./Transmissions/Live";

function startLive(_plataform: IPlataform) {
    console.log("Aguarde...");
    const live = new Live(_plataform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(_plataform: IPlataform) {
    console.log("Aguarde...");
    const live = new AdvancedLive(_plataform);
    live.broadcasting();
    live.result();
    live.comments();
    live.subtitle();
}

startAdvancedLive(new Twitch());
console.log();
startAdvancedLive(new Youtube());
console.log();
startAdvancedLive(new Facebook());
