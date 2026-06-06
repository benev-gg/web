
import {html} from "lit"
import {dom} from "@e280/sly"
import {errorString} from "@e280/stz"
import {Shell} from "./dom/shell/shell.js"
import {Loader} from "./dom/loader/loader.js"
import {shellComponent} from "./dom/shell/element.js"
import {loaderComponent} from "./dom/loader/element.js"

const shell = new Shell()
const loader = new Loader({
	transitionDuration: 200,
	errorDisplay: err => html`<div class=error>error: ${errorString(err, "unknown")}</div>`,
})

dom.register({
	BenevShell: shellComponent(shell),
	BenevLoader: loaderComponent(loader),
})

