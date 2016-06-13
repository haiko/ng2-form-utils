import { Address }  from  './address';


export class Person {

    name: string;

    age: number;

    male: boolean;

    birthDate: Date;

    email: string;

    address: Address


    constructor(name: string, age: number, male: boolean, birthDate: Date, email: string, address: Address ) {
        this.name = name;
        this.age = age;
        this.male = male;
        this.birthDate = birthDate;
        this.email = email;
        this.address = address;
    }


}
