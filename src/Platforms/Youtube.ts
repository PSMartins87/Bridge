import IPlataform from "./IPlatform";

export default class Youtube implements IPlataform {
    constructor() {
        this.configureRMTP();
        console.log("YouTube: transmissão iniciada");
    }

    configureRMTP(): void {
        this.authYoken();
        console.log("Youtube: configurando Broadcasting");
    }
    
    authYoken(): void {
        console.log("Youtube autorizando autenticação");
    }
}
