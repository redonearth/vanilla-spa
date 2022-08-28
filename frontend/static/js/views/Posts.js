import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('포스트 목록');
  }

  async getHtml() {
    return `
      <h1>포스트 목록</h1>
      <p>
        포스트들을 볼 수 있습니다.
      </p>
    `;
  }
}
