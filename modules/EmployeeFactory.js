const Manager = require('./Manager.js');
const Developer = require('./Developer.js');
const Designer = require('./Designer.js');


// import {Manager} from './Manager';
// import {Developer} from './Developer';
// import {Designer} from './Designer';

module.exports = class EmployeeFactory {
  createEmployees(obj) {
    if(obj.role === 'developer') {
      return new Developer(obj);
    } else if(obj.role === 'designer') {
      return new Designer(obj);
    } else if(obj.role === 'manager') {
      return new Manager(obj);
    }
  }
} 