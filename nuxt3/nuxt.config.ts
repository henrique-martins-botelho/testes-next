// https://nuxt.com/docs/api/configuration/nuxt-config
import federation from '@originjs/vite-plugin-federation';

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  devServer: {
    port: 3004
  },
  vite: {
    build: {
      target: 'esnext',
      minify: false,
    },
    plugins: [
      federation({
        name: 'nuxt3',
        exposes: {
          "./app": "./app.vue"
        }
        // remotes: {
        //   remote_app: 'http://localhost:8080/remoteEntry.js',
        // },
      }),
    ],
  },
})
