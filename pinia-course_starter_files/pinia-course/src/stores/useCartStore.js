import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
    // per saber quins productes afegim al carrito
    state: () => {
        return {
            items: [],
        }
    },
    
    actions: () => {
        const addToCart = (count, product) => {
            count = parseInt(count)
            for (let index = 0; index < count; index++) {
                useCartStore.items.push(product);
            }
        }
    }
});