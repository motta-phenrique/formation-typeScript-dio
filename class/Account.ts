export abstract class Conta {
    readonly name: string
    readonly accountNumber: number
    private balance : number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getValue = (): number  => {
        return this.balance
    }

    getStatus = (): boolean  => {
        return this.status
    }

    setValue = (valor : number): void => {
        this.balance += valor
    }

    deposit = (valor : number): string => {
        if(this.validStatus() && valor > 0){
            this.balance += valor
            return `Depositou ${valor}`
        }

        throw new Error("Erro ao depositar")
    }

    withDraw = (valor : number): string  => {
        if(this.validStatus() && valor <= this.balance){
            this.balance -= valor
            return `Sacou ${valor}`
        }

        throw new Error("Erro ao depositar")
    }

    private validStatus = () : boolean => {
        if(this.status){
            return true
        }
        throw new Error("Conta inválida")
    }

}