//https://nitro.unjs.io/config
import { resolve } from 'path'
export default defineNitroConfig({
  alias: {
    "@": resolve(__dirname, '.')
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        paths: {
          "@": [
            "./../.."
          ],
          "@/*": ["../../*"],
        },
      },
    },
  },
})
