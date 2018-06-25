// const arr = [];
// for (let index = 0; index < 10; index++) {
//   arr.push(_.floor(Math.random() * 100));
// }

// console.log(rank(arr, 2), arr);

const WIDTH = 200, HEIGHT = 200;
const canvas = document.getElementById('c');
canvas.setAttribute('width', WIDTH + 'px');
canvas.setAttribute('height', HEIGHT + 'px');
const ctx = canvas.getContext('2d');

ctx.strokeRect(5, 5, 190, 190);

var x_start = 20, y_start = 100;
let t = 0;
let timer = setInterval(() => {
  draw(createArray());
  t++;
  if (t > 5) clearInterval(timer)
}, 500)

function draw(arr) {
  ctx.clearRect(10, 10, 75, 150);
  ctx.beginPath();
  arr.map((ii, index) => {
    let x = x_start + index * 5;
    ctx.moveTo(x, y_start);
    ctx.lineTo(x, y_start - ii * 5);
  })
  ctx.stroke();
}

function createArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}

var arr123 = createArray();
arr123 = arr123.sort((a, b) => a - b);
    console.log(arr123);
console.info(rank_(arr123, 4));


// 牛顿迭代法
var niu = niudun(2);
console.log('根号2',niu);