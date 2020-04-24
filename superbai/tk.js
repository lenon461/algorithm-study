function isDiffOne(a, b) {
  return Math.abs(a - b) === 1;
}

function isAnswer(str) {
  return [...str].reduce((acc, curr, i, arr) => {
    const [a, b] = [Number(acc), Number(curr)];
    const isEndArray = () => arr.length === i + 1;

    if (!isDiffOne(a, b)) arr.splice(1);

    if (isEndArray()) return str;

    return isDiffOne(a, b) ? b : false;
  });
}

let count = 1;

for (let i = 1; i < 1000000; i++) {
  const _isAnswer = isAnswer(String(i));
  if (_isAnswer) console.log(count++, _isAnswer);
}
