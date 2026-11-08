
import {Auth} from "@e280/authlocal"
import {Shell} from "./shell.js"
import {Account} from "../dom/duplexes/account/account.js"
import {makeBenevMenuElement} from "../dom/duplexes/menu/view.js"
import {makeBenevLoaderElement} from "../dom/duplexes/loader/view.js"
import {makeBenevFooterElement} from "../dom/duplexes/footer/view.js"
import {makeBenevHeaderElement} from "../dom/duplexes/header/view.js"
import {makeBenevAccountElement} from "../dom/duplexes/account/view.js"

export type Benev = Awaited<ReturnType<typeof setupBenev>>

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

