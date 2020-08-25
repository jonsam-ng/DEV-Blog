import { observable } from 'mobx';

const BaseStoreFc =  observable({
  idx: 1,

  get strIdx() {
    return `${this.idx}个`;
  },

   add() {
    this.idx += 1;
  }
})

export default BaseStoreFc;