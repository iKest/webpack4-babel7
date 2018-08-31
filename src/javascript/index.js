
import Vue from "vue";
import App from "./App";
import router from "./router";

const foo = (a, b) => {
  alert("我是foo测试");
  return Object.assign(a, b);
};

const bar = (a, b) => {
  alert("我是bar测试");
  const o = Object;
  const c = [1, 2, 3].includes(3);
  return c && o.assign(a, b);
};

// foo({
//   abc: 1
// }, {
//   cde: 2
// });
// bar({
//   abc: 1
// }, {
//   cde: 2
// });
//广度遍历
const traverse = (ndRoot, index) => {
  let i = index ? index : 1;
  const stack = [
    {
      index: i,
      node: ndRoot
    }
  ];

  while (stack.length) {
    const obj = stack.shift();
    const { node, index } = obj;
    printInfo(node, index);

    if (!node.children.length) {
      continue;
    }
    i++;
    Array.from(node.children).forEach(x =>
      stack.push({
        index: i,
        node: x
      })
    );
  }
};

//深度遍历
const abc = (ndRoot, index) => {
  if (ndRoot) {
    let i = index ? index : 1;
    printInfo(ndRoot, i);
    if (ndRoot.children.length) {
      i++;
      Array.from(ndRoot.children).forEach(x => {
        abc(x, i);
      });
    }
  }
};

const printInfo = (node, index) => {
  console.log(node.tagName, `.${node.className}`, index ? index : "");
};

// kickoff
traverse(document.querySelector(".root"));

// abc(document.querySelector('.root'),0)



const asyncFn = () =>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(console.log('abc'))
    },1000)
  })
}


;(async ()=>{
 await asyncFn()

})()

















new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
//用template: '<App/>'写法需要编译环境。    换成函数写法。
