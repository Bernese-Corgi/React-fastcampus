// 모듈 주입(injection)
// (function main(window, Euid, DOM) {
// ('use strict');
import Euid from './modules/Euid/index.js';
import { getNode, createElement, render } from './modules/DOM.js';
/* -------------------------------------------------------------------------- */

const {
  logger: { success, error },
  tester: { test, expect },
  utils: { isFunction },
} = Euid;

// Euid 모듈 멤버 추출
// const logger = Euid.logger;
// const tester = Euid.tester;
// const utils = Euid.utils;
// const { logger, tester, utils } = Euid;

// logger 모듈 멤버 추출
// const success = logger.success;
// const error = logger.error;
// const { success, error } = Euid;

// tester 모듈 멤버 추출
// const test = tester.test;
// const expect = tester.expect;
// const { test, expect } = Euid;

// utils 모듈 멤버 추출
// const isFunction = utils.isFunction;
// const { isFunction } = Euid;

/* -------------------------------------------------------------------------- */

// DOM 모듈 추출
// const getNode = DOM.getNode;
// const createElement = DOM.createElement;
// const render = DOM.render;
// const { getNode, createElement, render } = DOM;

/* -------------------------------------------------------------------------- */

// 유효성 검사 조건 변수
const isValid = isFunction(getNode);

// 타이머 설정
window.setTimeout(() => {
  console.group('MODULE → 모듈 관리 상태');
  isValid
    ? success('의존성 모듈 관리에 문제가 없어 앱이 정상 작동합니다.')
    : error('의존성 모듈 관리에 문제가 있어 앱이 정상 작동하지 않습니다.');
});

/* -------------------------------------------------------------------------- */
// 테스트

test('createElement() 전달 속성', () => {
  const vNode = createElement('h3', { className: 'heading-3' }, 'TDD');

  expect(vNode.type).toBe('h3');
  expect(vNode.props.children[0].toLowerCase()).toBe('tdd');
});

/* -------------------------------------------------------------------------- */

// vNode 생성

const moduleLink = createElement(
  'a',
  {
    href: 'https://bit.ly/3brDMBS',
    rel: 'noopener noreferrer',
    target: '_blank',
    className: 'externalLink',
  },
  '모듈'
);

const cube = createElement('img', {
  className: 'cube',
  alt: '',
  src: './src/assets/cube.gif',
  height: 32,
});

const headline = createElement(
  'h1',
  { className: 'headline' },
  moduleLink,
  ' 관리',
  cube
);

const slogan = createElement(
  'p',
  { className: 'slogan' },
  '웹 브라우저 환경에서의 모듈 관리는 까다롭습니다.'
);

const container = createElement(
  'div',
  { className: 'container' },
  headline,
  slogan
);

/* -------------------------------------------------------------------------- */
// 렌더링

render(container, getNode('#root'));
// })(window, window.Euid, window.DOM);
