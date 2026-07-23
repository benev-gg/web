
import {Shell} from "./shell.js"
import {BenevLoader} from "../dom/loader/view.js"
import {menuComponent} from "../dom/menu/view.js"
import {headerElement} from "../dom/header/view.js"

export async function setupBenev() {
	const shell = new Shell()

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

