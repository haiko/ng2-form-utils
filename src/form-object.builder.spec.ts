import {
    it,
    fit,
    inject,
    injectAsync,
    describe
} from '@angular/core/testing';

import { FormObjectBuilder } from './form-object.builder';

import { Address } from '../test/address';
import { Person } from '../test/person';



describe('FormObjectBuilder', () => {

    fit('should create Controls and ControlGroup for a simple Object', () => {

        let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
        let simpleObject = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

        let fob = new FormObjectBuilder(simpleObject);

        expect(fob).toBeDefined();
        expect(fob.getControlGroup().contains('name')).toBe(true);
        expect(fob.getControlGroup().contains('male')).toBe(true);
        expect(fob.getControlGroup().contains('age')).toBe(true);

    });


    it('should create Controls and ControlGroup for nested Objects', () => {
        debugger;
        let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
        let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

        let fob = new FormObjectBuilder(person);

        expect(fob).toBeDefined();
        expect(fob.getControlGroup().contains('address.street')).toBe(true);
        expect(fob.getControlGroup().contains('address.city')).toBe(true);
        expect(fob.getControlGroup().contains('address.country')).toBe(true);
    });
})
