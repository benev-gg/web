
import {html} from "lit"
import {nap} from "@e280/stz"
import {dom, register, renderIn} from "@e280/sly"
import {setupBenev} from "./vitals/setup.js"
import {Loader} from "./dom/duplexes/loader/loader.js"
import { BenevDashboard } from "./dom/views/dashboard/view.js"

const benev = await setupBenev()
register(benev.elements)

benev.shell.onAttach.next().then(() => benev.shell.toggle(true))

const loader = new Loader(dom("benev-loader"))

dom(".testloader").onclick = async() => {
	await loader.load(
		() => "loading...",
		async() => nap(1000).then(() => html`<main benev-slice>new content</main>`),
	)
}

renderIn(dom("benev-menu"), BenevDashboard(benev.account, {
	alpha: {
		label: () => "alpha",
		render: () => "panel for alpha",
	},
	bravo: {
		label: () => "bravo",
		render: () => "panel for bravo",
	},
}))

