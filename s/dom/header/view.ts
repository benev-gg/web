
import {html} from "lit"
import {shadowDuplex, useCss, useName} from "@e280/sly"

import styleCss from "./style.css.js"
import {Shell} from "../../vitals/shell.js"
import {bDataPng} from "../../assets/b.png.js"
import {themeCss} from "../../css/theme.css.js"

export const [BenevHeader, makeBenevHeaderElement] = shadowDuplex((shell: Shell) => {
	useName("benev-header")
	useCss(themeCss, styleCss)

	const click = () => shell.toggle()

	return html`
		<nav part=nav ?data-opened=${shell.open} ?data-closed=${!shell.open}>
			<button benev-button="naked animated" title="b menu" @click=${click}>
				<img part=img src="${bDataPng}" alt=""/>
			</button>
			<slot></slot>
		</nav>
	`
})

