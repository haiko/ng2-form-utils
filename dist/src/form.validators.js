"use strict";
var FormValidators = (function () {
    function FormValidators() {
    }
    FormValidators.isNumber = function (control) {
        if (control.value !== '' && isNaN(control.value)) {
            return { 'nan': true };
        }
        return { 'nan': false };
    };
    FormValidators.isMailAddress = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value !== '' && !EMAIL_REGEXP.test(control.value)) {
            return { 'mail_format_error': true };
        }
        return { 'mail_format_error': false };
    };
    return FormValidators;
}());
exports.FormValidators = FormValidators;
//# sourceMappingURL=form.validators.js.map