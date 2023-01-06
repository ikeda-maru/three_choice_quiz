'use strict';

{
function render(quiz) {
  const main = document.querySelector('main');

  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.textContent = quiz[0];

  const ul = document.createElement('ul');

  section.appendChild(h2);
  section.appendChild(ul);
  main.appendChild(section);
}


// 問題文, 選択肢, 選択肢, 選択肢, 正解(0, 1, 2)
const quiz = ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0];

render(quiz);
}