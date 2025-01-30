import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
    // per saber quins productes afegim al carrito
    state: () => {
        return {
            items: [],
        }
    },
    
    actions: {
        addItems(count, item) {
            count = parseInt(count);
            for (let index = 0; index < count; index++) {
                this.items.push(item);
            }
        }
    }
});