
# ng2-form-utils
[![Build Status](https://travis-ci.org/haiko/ng2-form-utils.svg?branch=master)](https://travis-ci.org/haiko/ng2-form-utils)
[![Coverage Status](https://coveralls.io/repos/github/haiko/ng2-form-utils/badge.svg?branch=master)](https://coveralls.io/github/haiko/ng2-form-utils?branch=master)
[![peerDependency Status](https://david-dm.org/haiko/ng2-form-utils/peer-status.svg)](https://david-dm.org/haiko/ng2-form-utils#info=peerDependencies)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/haiko/ng2-form-utils/master/LICENSE)

ng2-form-utils assists with creating Angular2 Forms using the model-driven form approach.

Large forms with more then 10 fields are tedious to code out. ng2-form-utils offers functions to do the heavy lifting of creating the Angular2 Controls. 


* [Installation](#installation)

## Installation
First you need to install the npm module:
```sh
npm install ng2-form-utils --save
```

## Usage

Create object(s) that captures your form fields and feed it to FormObjectBuilder. Then in your template you define the ngControls with the name of the corresponding fields of the object. See example below.

Let's say you need to have a person's details and address.
```html
<form>
    firstname: <input type="text" name="firstName" ngControl="firstName"/>
    lastname:  <input type="text" name="lastName"  ngControl="lastName"/>
    birthDate: <input type="date" name="birthDate" ngControl="birthDate"/>
    street:    <input type="text" name="street"    ngControl="address.street"/>
    city:      <input type="text" name="city"      ngControl="address.city"/>
    country:   <input type="text" name="country"   ngControl="address.country"/>
</form>    
```

When you have these Objects

Person.ts
```typescript
import { Address }  from  './address';

export class Person{

    firstName: string;
    lastName: string
    birthDate: Date;
    address: Address
}
```

Address.ts
```typescript
export class Address {

    street: string;
    city: string;
    country: string;
}
```

    






