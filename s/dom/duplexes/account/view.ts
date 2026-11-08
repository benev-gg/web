
import {html} from "lit"
import {Widget} from "@e280/authlocal"
import {shadowDuplex, useCss} from "@e280/sly"

import {Account} from "./account.js"
import styleCss from "./style.css.js"
import {themeCss} from "../../../css/theme.css.js"

export const [BenevAccount, makeBenevAccountElement] = shadowDuplex((account: Account) => {
	useCss(themeCss, styleCss)

	return Widget.with({
		props: [account.auth],
		children: html`sign in`,
	})
})

