import { Address } from './address';
export declare class PersonV {
    name: string;
    age: any;
    male: boolean;
    birthDate: Date;
    email: string;
    address: Address;
    /**
     * Constructor missing age.
     *
     * @param name
     * @param male
     * @param birthDate
     * @param email
     * @param address
     */
    constructor(name: string, age: any, male: boolean, birthDate: Date, email: string, address: Address);
}
