import {
    it,
    fit,
    iit,
    inject,
    injectAsync,
    describe
} from '@angular/core/testing';

import { Validators, Control, ControlGroup } from '@angular/common';


import { FormValidators, ValidationResult } from '../src/ng2-formobject';

export function main() {

    describe('FormValidators', () => {

        it('should check is value is a number', () => {


            let control = new Control('123');

           let result: ValidationResult = FormValidators.isNumber(control);

            expect(result).toBeDefined();
            expect(result['nan']).toBe(false);

            // set value to alphanumeric
            control.updateValue('abc');

            result = FormValidators.isNumber(control);
            expect(result['nan']).toBe(true);
        });

        it('should check is value is a valid email', () => {


            let control = new Control('test@test.nl');

            let result: ValidationResult = FormValidators.isMailAddress(control);

            expect(result).toBeDefined();
            expect(result['mail_format_error']).toBe(false);

            // set value to alphanumeric
            control.updateValue('abc');

            result = FormValidators.isMailAddress(control);
            expect(result['mail_format_error']).toBe(true);
        });

    });
}
