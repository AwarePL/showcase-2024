import { defineConfig } from 'cypress'
import { env } from './env.mjs'

export default defineConfig({
    e2e: {
        baseUrl: env.ploomGB,
        retries: { runMode: 2, openMode: 0 },
        video: true,
        viewportHeight: 1080,
        viewportWidth: 1920,
        defaultCommandTimeout: 10000,
    },
})
