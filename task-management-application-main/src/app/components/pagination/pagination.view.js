import './pagination.scss';
import { TaskListController } from '../task-list/task-list.controller';
import { DashboardController } from '../dashboard/dashboard.controller';

export class PaginationView {
  selector = 'pagination';

  constructor() {
    this.render();
  }

  render() {
    const nav = document.createElement('section');

    nav.innerHTML = `
      <div class="container">
        <ul class="tab__list">
         <li class="tab__item" data-layout="table">
          <button class="tab__item-btn tab__item-btn--active" type="button">
           Table view
          </button>
         </li>
         <li class="tab__item" data-layout="board">
          <button class="tab__item-btn" type="button">
           Board view
          </button>
         </li>
        </ul>
      </div>
    `;

    nav.addEventListener('click', (e) => {
      let li = e.target;
      if (li.tagName === 'BUTTON') {
        li = li.parentElement;
      }

      const button = li.querySelector('button');

      if ((li.tagName !== 'LI') || (button.classList.contains('tab__item-btn--active'))) {
        return;
      }

      nav.querySelectorAll('li button').forEach(el => {
        el.classList.remove('tab__item-btn--active');
      });


      button.classList.add('tab__item-btn--active');

      const view = li.dataset.layout;

      if(view === 'board') {
        new DashboardController();
        return;
      }

      if(view === 'table') {
        new TaskListController();
        return;
      }
    });
    document.getElementById(this.selector).appendChild(nav);
  }
}
