import { Conta } from "./Account";

export class PeoplePlusAccount extends Conta {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (valor: number): string => {
    if (this.getStatus() && valor > 0) {
      this.setValue(valor + 10);
      return `Depositou ${valor}`;
    }

    throw new Error("Erro ao depositar");
  };
}
