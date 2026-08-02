
import {html} from "lit"
import {addressEmoji} from "@e280/authlocal"
import {shadowElement, useCss} from "@e280/sly"

import {Account} from "./account.js"
import styleCss from "./style.css.js"
import {themeCss} from "../../css/theme.css.js"

export const makeBenevAccount = (account: Account) => shadowElement(() => {
	useCss(themeCss, styleCss)
	const {auth} = account
	const {user} = auth

	if (user) {
		return html`
			<p>${addressEmoji(user.id)} ${user.alias}</p>
			<button @click="${() => auth.logout()}">logout</button>
		`
	}
	else {
		return html`
			<button @click="${() => auth.loginViaPopup()}">login</button>
		`
	}
})

