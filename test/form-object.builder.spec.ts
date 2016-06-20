import {
    it,
    fit,
    iit,
    inject,
    injectAsync,
    describe
} from '@angular/core/testing';

import * as _ from 'lodash';

import { FormObjectBuilder } from '../src/form-object.builder';

import { Address } from './address';
import { Person } from './person';
import { PersonV } from './person-validators';
import {Control} from '@angular/common';

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


        it('should have a ControlGroup with a control for each property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(person);

            expect(fob).toBeDefined();
            expect(fob.getControlGroup().contains('name')).toBe(true);
            expect(fob.getControlGroup().contains('male')).toBe(true);
            expect(fob.getControlGroup().contains('age')).toBe(true);
            expect(fob.getControlGroup().contains('birthDate')).toBe(true);
            expect(fob.getControlGroup().contains('address.street')).toBe(true);
            expect(fob.getControlGroup().contains('address.city')).toBe(true);
            expect(fob.getControlGroup().contains('address.country')).toBe(true);
        });

        it('should retrieve a control for a simple property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(person);

            expect(fob).toBeDefined();
            expect(fob.getControl('name') instanceof Control).toBe(true);

        });

        it('should retrieve a control for a nested property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(person);

            expect(fob).toBeDefined();
            expect(fob.getControl('address.street') instanceof Control).toBe(true);

        });

        it('should retrieve object model', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(person);

            expect(fob).toBeDefined();
            expect(_.isEqual(fob.getFormObject(), person)).toBe(true);

        });


        it('should return invalid control for decorator required on name property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new PersonV('', 21, false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(person);
            let invalidControls:  { [key: string]: Control} = fob.getInvalidControls();
            expect(invalidControls['name']).toBeDefined();
            expect(invalidControls['name'].status).toBe('INVALID');
        });

        it('should return invalid control for decorator numberCheck on age property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new PersonV('john doe', '21', false, new Date('12-12-2000'), 'test@github.com', address);

            let fob = new FormObjectBuilder(person);
            let invalidControls:  { [key: string]: Control} = fob.getInvalidControls();
            expect(invalidControls['age']).toBeDefined();
            expect(invalidControls['age'].status).toBe('INVALID');
        });

        it('should return invalid control for decorator emailCheck on email property', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new PersonV('john doe', 21, false, new Date('12-12-2000'), 'test#github.com', address);

            let fob = new FormObjectBuilder(person);
            let invalidControls:  { [key: string]: Control} = fob.getInvalidControls();
            expect(invalidControls['email']).toBeDefined();
            expect(invalidControls['email'].status).toBe('INVALID');
        });

        it('should dirty all controls', () => {
            let address = new Address('Dam 21', 'Amsterdam', 'Nederland');
            let person = new PersonV('john doe', 21, false, new Date('12-12-2000'), 'test#github.com', address);

            let fob = new FormObjectBuilder(person);
            fob.dirtyControls();


            expect(fob.getControl('email').dirty).toBe(true);
            expect(fob.getControl('name').dirty).toBe(true);
            expect(fob.getControl('address.street').dirty).toBe(true);
        });
    });
}
