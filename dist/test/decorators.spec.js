"use strict";
var testing_1 = require('@angular/core/testing');
var decorarors = require('../src/decorators');
var address_1 = require('./address');
var person_1 = require('./person');
function main() {
    testing_1.describe('decorators', function () {
        testing_1.it('should check required is add as metadata to object property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            decorarors.required(person, 'name');
            decorarors.required(address, 'street');
            var nameValidators = Reflect.getMetadata(decorarors.VALIDATORS, person, 'name');
            expect(nameValidators).toBeDefined();
            expect(nameValidators[0]).toBe('required');
            var streetValidators = Reflect.getMetadata(decorarors.VALIDATORS, address, 'street');
            expect(streetValidators).toBeDefined();
            expect(streetValidators[0]).toBe('required');
        });
        testing_1.it('should check email is add as metadata to object property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            decorarors.emailCheck(person, 'email');
            var emailValidators = Reflect.getMetadata(decorarors.VALIDATORS, person, 'email');
            expect(emailValidators).toBeDefined();
            expect(emailValidators[0]).toBe('emailCheck');
        });
        testing_1.it('should check multiple decorators are add as metadata to object property', function () {
            var address = new address_1.Address('Dam 21', 'Amsterdam', 'Nederland');
            var person = new person_1.Person('Foobar', 27, false, new Date('12-12-2000'), 'test@github.com', address);
            decorarors.emailCheck(person, 'email');
            decorarors.required(person, 'email');
            var emailValidators = Reflect.getMetadata(decorarors.VALIDATORS, person, 'email');
            expect(emailValidators).toBeDefined();
            expect(emailValidators.length).toBe(2);
        });
    });
}
exports.main = main;
//# sourceMappingURL=decorators.spec.js.map