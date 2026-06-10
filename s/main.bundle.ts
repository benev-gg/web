
import {dom} from "@e280/sly"
import {setupBenev} from "./setup.js"

const {elements} = await setupBenev()
dom.register(elements)

