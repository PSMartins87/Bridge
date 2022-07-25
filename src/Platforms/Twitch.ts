import IPlataform from "./IPlatform";

export default class Twitch implements IPlataform {
    constructor() {
        this.configureRMTP();
        console.log("Twitch: transmissão iniciada");
    }

    configureRMTP(): void {
        this.authYoken();
        console.log("Twitch: configurando Broadcast");
    }
    
    authYoken(): void {
        console.log("Twitch: autorizando aplicação");
    }
}
