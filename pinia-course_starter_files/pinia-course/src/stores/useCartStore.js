import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    setItemCount(item, count) {
        count = parseInt(count);
        const index = this.items.indexOf(item);
        if (count === 0) {
            this.items.splice(index, 1);
        } else {
            this.items.splice(index, 1, { ...item });
        }
    },
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(`${authUserStore.username} name just bought ${this.count} items at a total of $${this.total}`)
    },


  },
  getters: {
    /*count(){
      return this.items.length
    },
    isEmpty(){
      return this.count===0;
    }*/
    count: (state) => state.items.length,

    isEmpty: (state) => state.count === 0,

    grouped: (state) => groupBy(state.items, (item) => item.name),

    groupCount: (state) => (name) => state.grouped[name].length,

    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price, 0)
    }
  }
});