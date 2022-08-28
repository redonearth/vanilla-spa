import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('포스트');
  }

  async getHtml() {
    return `
      <h1>포스트</h1>
      <h3>${this.params.id}번</h3>
      <p>
        포스트입니다.
      </p>
    `;
  }
}
