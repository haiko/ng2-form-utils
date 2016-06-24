
# ng2-form-utils
[![Build Status](https://travis-ci.org/haiko/ng2-formobject.svg?branch=master)](https://travis-ci.org/haiko/ng2-formobject)
[![Coverage Status](https://coveralls.io/repos/github/haiko/ng2-formobject/badge.svg?branch=master)](https://coveralls.io/github/haiko/ng2-formobject?branch=master)
[![peerDependency Status](https://david-dm.org/haiko/ng2-formobject/peer-status.svg)](https://david-dm.org/haiko/ng2-formobject#info=peerDependencies)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/haiko/ng2-formobject/master/LICENSE)

Utility functions to assist you dealing with Angular2 Forms.
ng2-form-utils uses the model-driven form approach for building Angular2 forms. Large forms with more then 10 fields are tedious to code out. ng2-formobject does the heavy lifting of creating the Angular2 Controls. It only needs an form model object.


* [Installation](#installation)

## Installation
First you need to install the npm module:
```sh
npm install ng2-form-utils --save
```

## Usage

Create an object and feed to FormObjectBuilder. Then in your template you define the ngControls with as value the name of the corresponding fields of the object. This is best illustrated with an example.  


