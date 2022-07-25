import IPlataform from "./IPlatform";

export default class Facebook implements IPlataform {
    constructor() {
        this.configureRMTP();
        console.log("Facebook: transmissão iniciada");
    }

    configureRMTP(): void {
        this.authYoken();
        console.log("Facebook: configurando Broadcast");
    }

    authYoken(): void {
        console.log("Facebook: autorizando aplicação");
    }
}
