import "core-js/modules/es6.promise";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.array.from";
import "core-js/modules/es6.array.find";
import "core-js/modules/es6.array.find-index";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es6.array.reduce";
import "core-js/modules/es6.array.map";
import "core-js/modules/_array-includes";
import "core-js/modules/_array-reduce";
import "core-js/modules/es6.number.is-nan";


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


(async ()=>{
  console.log('async环境===================')
  await abc();
})()


Vue.config.productionTip = false;
[1, 2, 3].includes(3);
let b = [1, 2, 3, 4].filter(it => it > 1);
console.log(b);
console.log("123456789");
console.log(Object.assign({ a: 1 }, { b: 2 }));

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount("#app");
