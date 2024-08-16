import 'virtual:uno.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
// import type App from './App.vue';
import AppVue from './App.vue';
import router from '@/router/index';

let app: App<Element>;

let errorHandle;

function render(base?: string) {
    app = createApp(AppVue);
    if (errorHandle) {
        app.config.errorHandle = errorHandle;
    }
    app.use(router);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
    }
    app.use(createPinia());

    app.mount('#settle-fe');
}
/* eslint-disable no-console */
renderWithQiankun({
    mount(props) {
        console.log('um-market-settlement-fe mount', props);
        errorHandle = props.errorHandle;
        render(props.BASE_URL);
    },
    bootstrap() {
        console.log('um-market-settlement-fe bootstrap');
    },
    update() {
        console.log('um-market-settlement-fe update');
    },
    unmount(props: any) {
        console.log('um-market-settlement-fe unmount');
        app.unmount();
        const { container } = props;
        container?.remove();
    },
});
/* eslint-enable no-console */

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
}

// const app = createApp(App);

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component);
// }

// app.use(createPinia());
// app.use(router);

// app.mount('#app');
