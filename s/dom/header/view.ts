
import {html} from "lit"
import {shadow, useCss, useName} from "@e280/sly"
import {Shell} from "../../brains/shell.js"
import {bDataPng} from "../../assets/b.png.js"
import {themeCss} from "../../css/theme.css.js"
import styleCss from "./style.css.js"

export const HeaderView = shadow((shell: Shell) => {
	useName("header")
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

