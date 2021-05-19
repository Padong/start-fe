import sum from './sum';
import avg from './avg';
import random from './random';

document.getElementById('debug').innerHTML = sum(1, 2); // 합
document.getElementById('avg').innerHTML = avg(1, 2); // 평균
document.getElementById('random').innerHTML = random(0, 100); // 난수