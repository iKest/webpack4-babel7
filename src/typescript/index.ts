import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


const abc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dddddddddddddddddddddddd");
      resolve();
    }, 1000);
  });
};


const foo = (a:object, b:object) => {
  alert("我是foo测试");
 
  return Object.assign(a, b);
};

const bar = (a:object, b:object) => {
  alert("我是bar测试");
  const o = Object;
  const c = [1, 2, 3].includes(3);
  return c && o.assign(a, b);
};



(async ()=>{
  console.log('async环境===================')
  await abc();
})()


// Vue.config.productionTip = false;
// [1, 2, 3].includes(3);
// let b = [1, 2, 3, 4].filter(it => it > 1);
// console.log(b);
// console.log("123456789");
// console.log(Object.assign({ a: 1 }, { b: 2 }));

// new Vue({
//   // router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
