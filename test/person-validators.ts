import { Address }  from  './address';
import {required, emailCheck, numberCheck} from '../src/decorators';

export class PersonV {

    @required
    name: string;

    @numberCheck
    age: any;

    male: boolean;

    birthDate: Date;

    @emailCheck
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
    constructor(name: string, age: any, male: boolean, birthDate: Date, email: string, address: Address ) {
        this.name = name;
        this.male = male;
        this.birthDate = birthDate;
        this.email = email;
        this.address = address;
        this.age = age;
    }


}
