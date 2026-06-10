
import {dom} from "@e280/sly"
import {setup} from "./setup.js"

const {elements} = await setup()
dom.register(elements)

