
import {html} from "lit"
import {useCss} from "@e280/sly"

import styleCss from "./style.css.js"
import {Shell} from "../../vitals/shell.js"
import {bDataPng} from "../../assets/b.png.js"
import {themeCss} from "../../css/theme.css.js"
import {shadowDuplex} from "../tools/shadow-duplex.js"

export const [HeaderView, makeBenevHeader] = shadowDuplex("benev-header", (shell: Shell) => {
	useCss(themeCss, styleCss)

	const click = () => shell.toggle()

	return html`
		<nav part=nav ?data-opened=${shell.open} ?data-closed=${!shell.open}>
			<button benev-button=naked title="b menu" @click=${click}>
				<img part=img src="${bDataPng}" alt=""/>
			</button>
			<slot></slot>
		</nav>
	`
})

