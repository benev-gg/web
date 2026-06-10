
import {Shell} from "./brains/shell.js"
import {BenevLoader} from "./dom/loader/component.js"
import {menuComponent} from "./dom/menu/component.js"
import {headerComponent} from "./dom/header/component.js"

export async function setupBenev() {
	const shell = new Shell()
	// const loader = new Loader({
	// 	transitionDuration: consts.anim,
	// 	errorDisplay: err => html`<div class=error>error: ${errorString(err, "unknown")}</div>`,
	// })

	const elements = {
		BenevHeader: headerComponent(shell),
		BenevMenu: menuComponent(shell),
		BenevLoader: BenevLoader,
	}

	return {
		shell,
		elements,
	}
}

