import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-pluginRewriteAll';


export default defineConfig({
    plugins:[react(),pluginRewriteAll()],
})