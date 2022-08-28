import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('대시보드');
  }

  async getHtml() {
    return `
      <h1>환영합니다.</h1>
      <p>
        바닐라 자바스크립트로 구현한 SPA입니다.
      </p>
      <p>
        <a href="/posts" data-link>최근 포스트 보기</a>
      </p>
    `;
  }
}
