
import {Shell} from "./brains/shell.js"
import {headerElement} from "./dom/header/view.js"
import {BenevLoader} from "./dom/loader/view.js"
import {menuComponent} from "./dom/menu/view.js"

export async function setupBenev() {
	const shell = new Shell()
	// const loader = new Loader({
	// 	transitionDuration: consts.anim,
	// 	errorDisplay: err => html`<div class=error>error: ${errorString(err, "unknown")}</div>`,
	// })

	const elements = {
		BenevHeader: headerElement(shell),
		BenevMenu: menuComponent(shell),
		BenevLoader: BenevLoader,
	}

	return {
		shell,
		elements,
	}
}

