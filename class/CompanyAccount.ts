import { Conta } from "./Account"

export class CompanyAccount extends Conta {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (valor : number): string => {
        if(this.getStatus() && valor > 0){
            this.setValue(valor)
            return "pegou emprestimo"
        }

        throw new Error("Erro ao pegar emprestimo")
    }
}