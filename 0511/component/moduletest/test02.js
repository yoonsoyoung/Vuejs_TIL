import cal from './test02_module.js';
console.log(cal.title);
console.log(cal.add(20, 10));
console.log(cal.sub(20, 10));

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
        this.result = cal.add(this.num1, this.num2);
      } else {
        this.result = cal.sub(this.num1, this.num2);
      }
    },
  },
  watch: {
    op(val) {
      if (val === '+') {
        this.result = cal.add(this.num1, this.num2);
      } else {
        this.result = cal.sub(this.num1, this.num2);
      }
    },
  },
});
