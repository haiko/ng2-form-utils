
# ng2-form-utils
[![npm version](https://img.shields.io/npm/v/ng2-form-utils.svg?style=flat)](https://www.npmjs.com/package/ng2-form-utils)
[![Build Status](https://travis-ci.org/haiko/ng2-form-utils.svg?branch=master)](https://travis-ci.org/haiko/ng2-form-utils)
[![Coverage Status](https://coveralls.io/repos/github/haiko/ng2-form-utils/badge.svg?branch=master)](https://coveralls.io/github/haiko/ng2-form-utils?branch=master)
[![peerDependency Status](https://david-dm.org/haiko/ng2-form-utils/peer-status.svg)](https://david-dm.org/haiko/ng2-form-utils#info=peerDependencies)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/haiko/ng2-form-utils/master/LICENSE)

### ng2-form-utils assists with creating Angular2 Forms using the model-driven form approach.

Large forms with more then 10 fields are tedious to code out. ng2-form-utils offers functions to do the heavy lifting of creating the Angular2 Controls. 


* [Installation](#installation)
* [Usage](#usage)
* [API](#api)

## Installation
First you need to install the npm module:
```sh
npm install ng2-form-utils --save
```

## Usage

Create object(s) that captures your form fields and feed it to `FormObjectBuilder`. Then in your template you define the `ngControls` with the name of the corresponding properties of the object. 
`FormObjectBuilder` is able to deal with nested objects. It takes the property name of the nested object as prefix.
See example below.

### Example
Let's say you need to have a person's details and address.
```html
<form>
    firstname: <input type="text"  ngControl="firstName"/>
    lastname:  <input type="text"  ngControl="lastName"/>
    birthDate: <input type="date"  ngControl="birthDate"/>
    street:    <input type="text"  ngControl="address.street"/>
    city:      <input type="text"  ngControl="address.city"/>
    country:   <input type="text"  ngControl="address.country"/>
</form>    
```

When you have these Objects,

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

Now you only have to instantiate `FormObjectBuilder` with the object

```typescript

@Component(
  {
    selector: 'personForm',

     template: require('./personForm.html')
  }
)

export class PersonForm {


  fob: FormObjectBuilder<Person>;


  constructor() {

    this.fob = new FormObjectBuilder(new Person());
   ...
```

`FormObjectBuilder` will create for every property in the given Object a `Control` and one `ControlGroup`  where the controls will have been add. 
It has some functions to retrieve the `ControlGroup` and `Controls`.

## API

`FormObjectBuilder` has the following methods:

- *getFormObject*    - Retrieves given Object updated with last values from the form.

- *getControlGroup*  - Gives the `ControlGroup`

- *getControl(propertyName: string)* - Gives the `Control` for a particular property of the object.

- *dirtyControls* - Make all `Controls` dirty.

- *getInvalidControls* - Retrieve all invalid controls.
