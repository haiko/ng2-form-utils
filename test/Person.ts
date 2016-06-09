/**
 * Created by haiko on 9-6-16.
 */

export default class Person {

    name: string;

    age: number;

    male: boolean;

    birthDate : Date;

    email: string;


    constructor(name: string, age: number, male: boolean, birthDate: Date, email: string ) {
        this.name = name;
        this.age = age;
        this.male = male;
        this.birthDate = birthDate;
        this.email = email;

    }


}
