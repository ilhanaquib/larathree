import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue";

createInertiaApp({
  progress: {
    color: 'red',
    showSpinner: 'true'
  },
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    if(name.startsWith('Auth/')){
      page.default.layout = undefined;
    }else{
      page.default.layout = Layout;
    }
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link", Link)
      .component("Head", Head)
      .mount(el)
  },
  
  title: title => '${title} - My App'
});