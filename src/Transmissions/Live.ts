import IPlataform from "../Platforms/IPlatform";
import ITransmission from "./Itransmission";

export default class Live implements ITransmission {
    constructor(private _plataform: IPlataform) {}

    broadcasting(): void {
        console.log("Iniciando a transmissão");
    }

    result(): void {
        console.log("A live está no ar");
    }
}
