
import {html} from "lit"
import {dom} from "@e280/sly"
import {errorString} from "@e280/stz"
import {Shell} from "./brains/shell.js"
import {Loader} from "./brains/loader.js"
import {loaderComponent} from "./dom/loader/component.js"
import {headerComponent} from "./dom/header/component.js"
import {menuComponent} from "./dom/menu/component.js"

const shell = new Shell()
const loader = new Loader({
	transitionDuration: 200,
	errorDisplay: err => html`<div class=error>error: ${errorString(err, "unknown")}</div>`,
})

dom.register({
	BenevMenu: menuComponent(shell),
	BenevHeader: headerComponent(shell),
	BenevLoader: loaderComponent(loader),
})

