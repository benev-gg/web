
import {Auth} from "@e280/authlocal"
import {Shell} from "./shell.js"
import {Account} from "../dom/account/account.js"
import {makeBenevMenuElement} from "../dom/menu/view.js"
import {makeBenevLoaderElement} from "../dom/loader/view.js"
import {makeBenevFooterElement} from "../dom/footer/view.js"
import {makeBenevHeaderElement} from "../dom/header/view.js"
import {makeBenevAccountElement} from "../dom/account/view.js"

export async function setupBenev() {
	const shell = new Shell()
	const account = new Account(new Auth())

	const elements = {
		BenevLoader: makeBenevLoaderElement(),
		BenevFooter: makeBenevFooterElement(),
		BenevMenu: makeBenevMenuElement(shell),
		BenevHeader: makeBenevHeaderElement(shell),
		BenevAccount: makeBenevAccountElement(account),
	}

	await account.auth.remember()

	return {shell, account, elements}
}

