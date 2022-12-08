import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const app = createApp({
    data() {
        return {
            a: 0,
            b: 0,
            expression: '',
        }
    },
    computed: {
        calc() {
            switch(this.expression) {
                case 'sum': 
                    return this.a + this.b
                    break
                case 'subtract':
                    return this.a - this.b
                    break
                case 'multiply':
                    return this.a * this.b
                    break
                case 'divide': 
                    return this.a / this.b
                    break
            }
        }
    }
}).mount('#app');