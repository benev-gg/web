
import {Shell} from "./shell.js"
import {Account} from "../dom/account/account.js"
import {BenevLoader} from "../dom/loader/view.js"
import {makeBenevMenu} from "../dom/menu/view.js"
import {makeBenevFooter} from "../dom/footer/view.js"
import {makeBenevHeader} from "../dom/header/view.js"
import {makeBenevAccount} from "../dom/account/view.js"

export async function setupBenev() {
	const shell = new Shell()
	const account = new Account()

	const elements = {
		BenevLoader,
		BenevFooter: makeBenevFooter(),
		BenevMenu: makeBenevMenu(shell),
		BenevHeader: makeBenevHeader(shell),
		BenevAuth: makeBenevAccount(account),
	}

	return {account, shell, elements}
}

