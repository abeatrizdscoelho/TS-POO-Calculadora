import Calculo from "./calculo";

export default class Potenciacao extends Calculo {
    public calcular (numero1: number, numero2: number): number {
        return numero1 ** numero2
    }
}