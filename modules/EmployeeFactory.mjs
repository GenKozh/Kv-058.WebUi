import {Manager} from './Manager';
import {Developer} from './Developer';
import {Designer} from './Designer';

export class EmployeeFactory {
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