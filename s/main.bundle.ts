
import {html} from "lit"
import {nap} from "@e280/stz"
import {dom, register, renderIn} from "@e280/sly"

import {setupBenev} from "./vitals/setup.js"
import {Loader} from "./dom/duplexes/loader/loader.js"
import {BenevDashboard} from "./dom/views/dashboard/view.js"

const benev = await setupBenev()
register(benev.elements)

// benev.shell.onAttach.next().then(() => benev.shell.toggle(true))

const loader = new Loader(dom("benev-loader"))

dom(".testloader").onclick = async() => {
	await loader.load(
		() => "loading...",
		async() => nap(1000).then(() => html`<main benev-slice>new content</main>`),
	)
}

renderIn(dom("benev-menu"), BenevDashboard({
	panels: {
		alpha: {
			label: () => "alpha",
			render: () => html`
				<p style="padding: 1em;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante orci, sagittis et nisi vel, rhoncus ultricies neque. Maecenas quis magna condimentum, molestie nulla vel, malesuada ante. Donec dui tortor, porta id sollicitudin vitae, sollicitudin non purus. Quisque dignissim purus eget odio placerat lacinia. Vivamus feugiat metus et est venenatis, at ornare magna bibendum. Curabitur elementum pretium magna, non venenatis ligula pharetra sed. Morbi ante lacus, rhoncus sit amet justo sed, facilisis blandit dolor. In sed arcu nec ligula condimentum porttitor eu eleifend risus. Mauris pharetra elit nec felis venenatis aliquet. Nullam vitae efficitur tortor. Curabitur euismod urna sodales, blandit eros vel, cursus urna. Vivamus lacus diam, imperdiet mollis placerat vitae, volutpat in nibh.</p>
			`,
		},
		bravo: {
			label: () => "bravo",
			render: () => html`
				<p style="padding: 1em;">Nulla at augue dignissim, fermentum leo eu, varius tortor. Suspendisse ullamcorper, orci ornare dictum tincidunt, dui velit tincidunt lectus, quis malesuada ante nunc sed metus. Integer accumsan auctor commodo. Maecenas suscipit pharetra felis, at rutrum dolor pretium non. Curabitur nisl felis, euismod eget porttitor dapibus, accumsan eu neque. Quisque convallis mi quis ex dignissim porttitor. Quisque interdum odio tellus, sed sagittis massa commodo at. Donec eget orci finibus mauris dapibus fermentum eget eget diam. Quisque eget tristique justo. Proin vitae dapibus nunc. Maecenas at augue diam. Duis ut aliquet tellus, id aliquet risus. Suspendisse condimentum, mi vel efficitur consequat, erat nisi elementum massa, id hendrerit arcu est quis eros. Nullam non eros magna. Aenean at suscipit sem.</p>
			`,
		},
	},
}))

