export class DashboardModel {
  constructor() {}
}

// export class DashboardModel {
//   constructor() {
//     this.tasks = [
//       {
//         id: 1,
//         title: 'Requirement Analysis',
//         description: 'Thoroughly analyze the user stories to understand the requirements, goals, and tasks users need to perform.',
//         status: 'To Do',
//         priority: 'Low',
//         dueDate: 'May 21, 2024'
//       },
//       {
//         id: 2,
//         title: 'Visual Design',
//         description: 'Establish a design system that includes color palettes, typography, iconography, and other visual elements.',
//         status: 'To Do',
//         priority: 'Medium',
//         dueDate: 'May 21, 2024'
//       },
//       {
//         id: 3,
//         title: 'Wireframing',
//         description: 'Create low-fidelity sketches to brainstorm and iterate on different layout ideas quickly.',
//         status: 'In Progress',
//         priority: 'Low',
//         dueDate: 'May 21, 2024'
//       },
//       {
//         id: 4,
//         title: 'Development Handoff',
//         description: 'Prepare detailed design specifications and guidelines for developers.',
//         status: 'In Progress',
//         priority: 'Medium',
//         dueDate: 'May 21, 2024'
//       },
//       {
//         id: 5,
//         title: 'Research',
//         description: 'Conduct research to understand the target audience, including their preferences, pain points, and behaviors.',
//         status: 'Review',
//         priority: 'Top',
//         dueDate: 'May 21, 2024'
//       }
//     ];
//   }

//   getTasks(status) {
//     return this.tasks.filter(task => task.status === status);
//   }

//   addTask(task) {
//     this.tasks.push(task);
//   }

//   updateTask(updatedTask) {
//     const index = this.tasks.findIndex(task => task.id === updatedTask.id);
//     if (index !== -1) {
//       this.tasks[index] = updatedTask;
//     }
//   }

//   deleteTask(taskId) {
//     this.tasks = this.tasks.filter(task => task.id !== taskId);
//   }
// }





