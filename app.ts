import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PeoplePlusAccount } from "./class/PeoplePlusAccount";

const peopleAccount :  PeopleAccount = new PeopleAccount(1, "Paulo", 123)
const companyAccount : CompanyAccount = new CompanyAccount("Frete-Controle", 1234)
const peoplePlusAccount : PeoplePlusAccount = new PeoplePlusAccount("Jair", 12345)

console.log(peopleAccount.deposit(100))
console.log(peopleAccount.getValue())
console.log(peopleAccount.withDraw(20))
console.log(peopleAccount.getValue())

console.log(companyAccount.deposit(150))
console.log(companyAccount.getValue())
console.log(companyAccount.withDraw(20))
console.log(companyAccount.getValue())

console.log(peoplePlusAccount.deposit(150))
console.log(peoplePlusAccount.getValue())
console.log(peoplePlusAccount.withDraw(20))
console.log(peoplePlusAccount.getValue())

companyAccount.getLoan(1000)
console.log(companyAccount.getValue())
