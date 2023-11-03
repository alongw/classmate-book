import '@/assets/style/base.less'
import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Prism from 'prismjs'
import VMdEditor from '@kangc/v-md-editor'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

const app = createApp(App)

VMdEditor.use(vuepressTheme, {
    Prism
})

app.use(createPinia())
app.use(router)
app.use(VMdEditor)

app.mount('#app')
