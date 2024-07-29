import { ModalView } from './modal.view';
import { ModalModel } from './modal.model';
import { eventBus } from '../../../utils/event-bus';

export class TaskModalController {

  view = new ModalView();
  model = new ModalModel();

  constructor() {
    eventBus.subscribe('open-modal', (task) => {
      this.view.render(task);
    })
  }
}
