import './app.scss';

export class AppView {
  selector = 'app';

  constructor() {
    this.render();
  }

  render() {
    document.getElementById(this.selector).innerHTML = `
      <header id="header"></header>
      <main id="main">
        <div id="pagination"></div>
        <div id="content"></div>
      </main>
    `;
  }
}
