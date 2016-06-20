import {
    it,
    fit,
    iit,
    inject,
    injectAsync,
    describe
} from '@angular/core/testing';


import * as decorarors from '../src/decorators';
import { Address } from './address';
import { Person } from './person';

export function main() {

    describe('decorators', () => {

        it('should check required is add as metadata to object property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            decorarors.required(person, 'name');
            decorarors.required(address, 'street');

            let nameValidators: Array<string> = Reflect.getMetadata(decorarors.VALIDATORS, person, 'name');
            expect(nameValidators).toBeDefined();
            expect(nameValidators[0]).toBe('required');

            let streetValidators: Array<string> = Reflect.getMetadata(decorarors.VALIDATORS, address, 'street');
            expect(streetValidators).toBeDefined();
            expect(streetValidators[0]).toBe('required');
        });

        it('should check email is add as metadata to object property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            decorarors.emailCheck(person, 'email');

            let emailValidators: Array<string> = Reflect.getMetadata(decorarors.VALIDATORS, person, 'email');
            expect(emailValidators).toBeDefined();
            expect(emailValidators[0]).toBe('emailCheck');
        });

        it('should check multiple decorators are add as metadata to object property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            decorarors.emailCheck(person, 'email');
            decorarors.required(person, 'email');

            let emailValidators: Array<string> = Reflect.getMetadata(decorarors.VALIDATORS, person, 'email');
            expect(emailValidators).toBeDefined();
            expect(emailValidators.length).toBe(2);
        });


    });
}
