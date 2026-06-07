
import {dom} from "@e280/sly"
import {setup} from "./setup.js"
import {nap} from "@e280/stz"

await nap(1000)

dom.register(setup().components)

