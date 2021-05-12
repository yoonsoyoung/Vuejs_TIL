import { title, add, sub } from './test01_module1.js';
// import { title, add, sub } from './test01_module2.js';
console.log(title);
console.log(add(20, 10));
console.log(sub(20, 10));

new Vue({
  el: '#app',
  data: {
    num1: 0,
    num2: 0,
    op: '-',
    result: 0,
  },
  methods: {
    doCal() {
      if (this.op === '+') {
        this.result = add(this.num1, this.num2);
      } else {
        this.result = sub(this.num1, this.num2);
      }
    },
  },
  watch: {
    op(val) {
      if (val === '+') {
        this.result = add(this.num1, this.num2);
      } else {
        this.result = sub(this.num1, this.num2);
      }
    },
  },
});
