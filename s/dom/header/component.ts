
import {html} from "lit"
import {shadowElement, useCss} from "@e280/sly"
import {Shell} from "../../brains/shell.js"
import {bDataPng} from "../../assets/b.png.js"
import {themeCss} from "../../css/theme.css.js"
import styleCss from "./style.css.js"

export const headerComponent = (shell: Shell) => shadowElement(() => {
	useCss(themeCss, styleCss)

	return html`
		<nav part=nav ?data-opened=${shell.open} ?data-closed=${!shell.open}>
			<button class=b benev-button=naked title="b menu" @click=${shell.toggle}>
				<img part=img src="${bDataPng}" alt=""/>
			</button>

			<slot></slot>
		</nav>
	`
})

