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

        iit('should check required is add as metadata to object property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            decorarors.required(person, 'name');
            decorarors.required(address, 'street');

            let validators: Array<string> = Reflect.getMetadata(decorarors.VALIDATORS, person, 'name');
            expect(validators).toBeDefined();
            expect(validators[0]).toBe('required');
        });


    });
}
