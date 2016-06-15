import {
    it,
    fit,
    iit,
    inject,
    injectAsync,
    describe
} from '@angular/core/testing';

import { FormObjectBuilder } from '../src/form-object.builder';

import { Address } from './address';
import { Person } from './person';

export function main() {

    describe('FormObjectBuilder', () => {

        it('should create Controls and ControlGroup for a simple Object', () => {

            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let simpleObject = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(simpleObject);

            expect(fob).toBeDefined();
            expect(fob.getControlGroup().contains('name')).toBe(true);
            expect(fob.getControlGroup().contains('male')).toBe(true);
            expect(fob.getControlGroup().contains('age')).toBe(true);
            expect(fob.getControlGroup().contains('birthDate')).toBe(true);

        });


        it('should create Controls and ControlGroup for nested Objects', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(person);

            expect(fob).toBeDefined();
            expect(fob.getControlGroup().contains('address.street')).toBe(true);
            expect(fob.getControlGroup().contains('address.city')).toBe(true);
            expect(fob.getControlGroup().contains('address.country')).toBe(true);
        });
    });
}
