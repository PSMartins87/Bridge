import IPlataform from "../Platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {
    constructor(plataform: IPlataform) {
        super(plataform);
    }

    subtitle(): void {
        console.log("Legendas ativadas");
    }

    comments(): void {
        console.log("Comentarios Liberados");
    }
}
