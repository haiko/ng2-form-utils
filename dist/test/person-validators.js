"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var decorators_1 = require('../src/decorators');
var PersonV = (function () {
    /**
     * Constructor missing age.
     *
     * @param name
     * @param male
     * @param birthDate
     * @param email
     * @param address
     */
    function PersonV(name, age, male, birthDate, email, address) {
        this.name = name;
        this.male = male;
        this.birthDate = birthDate;
        this.email = email;
        this.address = address;
        this.age = age;
    }
    __decorate([
        decorators_1.required, 
        __metadata('design:type', String)
    ], PersonV.prototype, "name", void 0);
    __decorate([
        decorators_1.numberCheck, 
        __metadata('design:type', Object)
    ], PersonV.prototype, "age", void 0);
    __decorate([
        decorators_1.emailCheck, 
        __metadata('design:type', String)
    ], PersonV.prototype, "email", void 0);
    return PersonV;
}());
exports.PersonV = PersonV;
//# sourceMappingURL=person-validators.js.map