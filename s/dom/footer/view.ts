
import {html} from "lit"
import {shadowDuplex, useCss, useName} from "@e280/sly"

import styleCss from "./style.css.js"
import {themeCss} from "../../css/theme.css.js"

export const [FooterView, makeBenevFooter] = shadowDuplex(() => {
	useName("benev-footer")
	useCss(themeCss, styleCss)
	return html`<slot></slot>`
})

