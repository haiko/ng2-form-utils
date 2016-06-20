"use strict";
var testing_1 = require('@angular/core/testing');
var common_1 = require('@angular/common');
var form_validators_1 = require('../src/form.validators');
function main() {
    testing_1.describe('FormValidators', function () {
        testing_1.it('should check is value is a number', function () {
            var control = new common_1.Control('123');
            var result = form_validators_1.FormValidators.isNumber(control);
            expect(result).toBeDefined();
            expect(result['nan']).toBe(false);
            // set value to alphanumeric
            control.updateValue('abc');
            result = form_validators_1.FormValidators.isNumber(control);
            expect(result['nan']).toBe(true);
        });
        testing_1.it('should check is value is a valid email', function () {
            var control = new common_1.Control('test@test.nl');
            var result = form_validators_1.FormValidators.isMailAddress(control);
            expect(result).toBeDefined();
            expect(result['mail_format_error']).toBe(false);
            // set value to alphanumeric
            control.updateValue('abc');
            result = form_validators_1.FormValidators.isMailAddress(control);
            expect(result['mail_format_error']).toBe(true);
        });
    });
}
exports.main = main;
//# sourceMappingURL=form.validators.spec.js.map