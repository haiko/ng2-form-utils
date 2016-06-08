import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {FormObjectBuilder} from './FormObjectBuilder';

export class Person {
  name:string;

  male:boolean;

  age:number;

  constructor(name:string, male:boolean, age:number) {
    this.name = name;
    this.male = male;
    this.age = age;
  }

}


export class Family {

  dad: Person;
  mom: Person;
  lastNames: string[];


  constructor(dad: Person, mom: Person, ...lastNames: string[]) {
    this.dad = dad;
    this.mom = mom;
    this.lastNames = lastNames;
  }

}


describe('FormObjectBuilder', () => {

  fit('should create Controls and ControlGroup for a simple Object', () => {
    let simpleObject = new Person('Foobar', true, 27);

    let fob = new FormObjectBuilder();
    fob.createControls(simpleObject);

    expect(fob).toBeDefined();
    expect(fob.controlGroup.contains('name')).toBe(true);
    expect(fob.controlGroup.contains('male')).toBe(true);
    expect(fob.controlGroup.contains('age')).toBe(true);

  });


  it('should create Controls and ControlGroup for nested Objects', () => {
    debugger;
    let dad = new Person('Foo', true, 27);
    let mom = new Person('Bar', false, 27);

    let fam = new Family(dad, mom, 'van der', 'bierbeke');

    let fob = new FormObjectBuilder();
    fob.createControls(fam);

    expect(fob).toBeDefined();
    expect(fob.controlGroup.contains('dad.name')).toBe(true);

  });
})
