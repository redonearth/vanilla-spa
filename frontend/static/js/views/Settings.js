import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('설정');
  }

  async getHtml() {
    return `
      <h1>설정</h1>
      <p>
        환경 설정을 관리하세요.
      </p>
    `;
  }
}
