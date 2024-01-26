import { helloWorld } from "@/typeorm/index"
export default eventHandler(() => {
  helloWorld()
  return { nitro: "Is Awesome!" }
})
