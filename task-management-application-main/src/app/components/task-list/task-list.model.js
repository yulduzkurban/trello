import { TaskManagerService } from '../../services/task-manager.service';

export class TaskListModel {
  taskManager = new TaskManagerService();

  tasks = [];

  constructor() {}

  getTasks() {
    return this.taskManager.getTasks()
      .then(tasks => this.tasks = tasks);
  }
}
