import { tasks } from '../../assets/mocks/tasks.js';

export class TaskManagerService {
  constructor() {}

  getTasks() {
    return Promise.resolve(tasks.items);

    // return fetch('http://localhost:4200') // Use a port of your locally started back-end application
    //   .then(response => response.json())
    //   .then(json => json.items);
  }
}
