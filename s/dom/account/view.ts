
import {html} from "lit"
import {shadowElement, useCss} from "@e280/sly"

import {Account} from "./account.js"
import styleCss from "./style.css.js"
import {themeCss} from "../../css/theme.css.js"

export const makeBenevAccount = (_account: Account) => shadowElement(() => {
	useCss(themeCss, styleCss)

	return html`
		<benev-auth>Sign in</benev-auth>
	`
})

