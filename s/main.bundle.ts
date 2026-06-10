
import {html} from "lit"
import {dom} from "@e280/sly"
import {nap} from "@e280/stz"
import {setupBenev} from "./setup.js"
import {Loader} from "./dom/loader/loader.js"

const {elements} = await setupBenev()
dom.register(elements)

const loader = new Loader(dom("benev-loader"))

dom(".testloader").onclick = async() => {
	await loader.load(
		() => "loading...",
		async() => nap(1000).then(() => html`<main benev-slice>new content</main>`),
	)
}

