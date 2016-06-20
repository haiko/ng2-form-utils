"use strict";
var testing_1 = require('@angular/core/testing');
var _ = require('lodash');
var form_object_builder_1 = require('../src/form-object.builder');
var address_1 = require('./address');
var person_1 = require('./person');
var person_validators_1 = require('./person-validators');
var common_1 = require('@angular/common');
function main() {
    testing_1.describe('FormObjectBuilder', function () {
        testing_1.it('should create Controls and ControlGroup for a simple Object', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var simpleObject = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(simpleObject);
            expect(fob).toBeDefined();
            expect(fob.getControlGroup().contains('name')).toBe(true);
            expect(fob.getControlGroup().contains('male')).toBe(true);
            expect(fob.getControlGroup().contains('age')).toBe(true);
            expect(fob.getControlGroup().contains('birthDate')).toBe(true);
        });
        testing_1.it('should create Controls and ControlGroup for nested Objects', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            expect(fob).toBeDefined();
            expect(fob.getControlGroup().contains('address.street')).toBe(true);
            expect(fob.getControlGroup().contains('address.city')).toBe(true);
            expect(fob.getControlGroup().contains('address.country')).toBe(true);
        });
        testing_1.it('should have a ControlGroup with a control for each property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            expect(fob).toBeDefined();
            expect(fob.getControlGroup().contains('name')).toBe(true);
            expect(fob.getControlGroup().contains('male')).toBe(true);
            expect(fob.getControlGroup().contains('age')).toBe(true);
            expect(fob.getControlGroup().contains('birthDate')).toBe(true);
            expect(fob.getControlGroup().contains('address.street')).toBe(true);
            expect(fob.getControlGroup().contains('address.city')).toBe(true);
            expect(fob.getControlGroup().contains('address.country')).toBe(true);
        });
        testing_1.it('should retrieve a control for a simple property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            expect(fob).toBeDefined();
            expect(fob.getControl('name') instanceof common_1.Control).toBe(true);
        });
        testing_1.it('should retrieve a control for a nested property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            expect(fob).toBeDefined();
            expect(fob.getControl('address.street') instanceof common_1.Control).toBe(true);
        });
        testing_1.it('should retrieve object model', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            expect(fob).toBeDefined();
            expect(_.isEqual(fob.getFormObject(), person)).toBe(true);
        });
        testing_1.it('should return invalid control for decorator required on name property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_validators_1.PersonV('', 21, false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            var invalidControls = fob.getInvalidControls();
            expect(invalidControls['name']).toBeDefined();
            expect(invalidControls['name'].status).toBe('INVALID');
        });
        testing_1.it('should return invalid control for decorator numberCheck on age property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_validators_1.PersonV('john doe', '21', false, new Date('12-12-2000'), 'test@github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            var invalidControls = fob.getInvalidControls();
            expect(invalidControls['age']).toBeDefined();
            expect(invalidControls['age'].status).toBe('INVALID');
        });
        testing_1.it('should return invalid control for decorator emailCheck on email property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_validators_1.PersonV('john doe', 21, false, new Date('12-12-2000'), 'test#github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            var invalidControls = fob.getInvalidControls();
            expect(invalidControls['email']).toBeDefined();
            expect(invalidControls['email'].status).toBe('INVALID');
        });
        testing_1.it('should dirty all controls', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_validators_1.PersonV('john doe', 21, false, new Date('12-12-2000'), 'test#github.com', address);
            var fob = new form_object_builder_1.FormObjectBuilder(person);
            fob.dirtyControls();
            expect(fob.getControl('email').dirty).toBe(true);
            expect(fob.getControl('name').dirty).toBe(true);
            expect(fob.getControl('address.street').dirty).toBe(true);
        });
    });
}
exports.main = main;
//# sourceMappingURL=form-object.builder.spec.js.map