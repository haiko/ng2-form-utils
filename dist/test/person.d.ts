import { Address } from './address';
export declare class Person {
    name: string;
    age: number;
    male: boolean;
    birthDate: Date;
    email: string;
    address: Address;
    constructor(name: string, age: number, male: boolean, birthDate: Date, email: string, address: Address);
}
