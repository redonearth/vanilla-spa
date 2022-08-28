import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('포스트');
  }

  async getHtml() {
    return `
      <h1>포스트</h1>
      <p>
        포스트를 볼 수 있습니다.
      </p>
    `;
  }
}
