
import {html} from "lit"
import {errorString} from "@e280/stz"

import {consts} from "./consts.js"
import {Shell} from "./brains/shell.js"
import {Loader} from "./brains/loader.js"

import {menuComponent} from "./dom/menu/component.js"
import {headerComponent} from "./dom/header/component.js"
import {loaderComponent} from "./dom/loader/component.js"

export async function setupBenev() {
	const shell = new Shell()
	const loader = new Loader({
		transitionDuration: consts.anim,
		errorDisplay: err => html`<div class=error>error: ${errorString(err, "unknown")}</div>`,
	})

	const elements = {
		BenevHeader: headerComponent(shell),
		BenevMenu: menuComponent(shell),
		BenevLoader: loaderComponent(loader),
	}

	return {
		shell,
		loader,
		elements,
	}
}

