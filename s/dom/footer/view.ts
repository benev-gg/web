
import {html} from "lit"
import {useCss} from "@e280/sly"

import styleCss from "./style.css.js"
import {themeCss} from "../../css/theme.css.js"
import {shadowDuplex} from "../tools/shadow-duplex.js"

export const [FooterView, makeBenevFooter] = shadowDuplex("benev-footer", () => {
	useCss(themeCss, styleCss)
	return html`<slot></slot>`
})

