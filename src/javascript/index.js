const asyncFn = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(console.log("abc"));
    }, 1000);
  });
};

const asyncFn1 = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reject("err");
    }, 1000);
  });
};

async function f() {
  try {
    const [a, b] = await Promise.all([
      Promise.resolve("hello world"),
      Promise.reject("出错了")
    ]);
    console.log(a, b);
    console.log("ddddddddd");
  } catch (error) {
    console.log(error);
  }
}

f();

let arr = ["a", "b", "c", "d", "e", "f", "g"];
for (const iterator of arr) {
  console.log(arr.entries(iterator));
  console.log(iterator)
}


