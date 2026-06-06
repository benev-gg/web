
import {html} from "lit"
import {ev} from "@e280/stz"
import {shadowElement, useCss, useMount} from "@e280/sly"
import {Shell} from "./shell.js"
import {bDataPng} from "../../assets/b.png.js"
import {themeCss} from "../../css/theme.css.js"
import styleCss from "./style.css.js"

export const shellComponent = (shell: Shell) => shadowElement(() => {
	useCss(themeCss, styleCss)

	useMount(() => ev(window, {
		keydown: (event: KeyboardEvent) => {
			const target = event.target as HTMLElement
			const typing = (
				target instanceof HTMLInputElement ||
				target instanceof HTMLTextAreaElement ||
				target.isContentEditable
			)
			if (typing)
				return
			if (event.code === "KeyB" || event.code === "Escape")
				shell.toggle()
		},
	}))

	return html`
		<div class=shell ?data-opened=${shell.$open()}>
			<div part=backdrop @click=${shell.close}></div>

			<header part=header benev-slice>
				<div part=tray benev-slice>
					${shell.$open() ? html`
						<p>wip, settings and stuff will go here</p>
					` : null}
				</div>

				<div part=bar>
					<button class=b benev-button=naked @click=${shell.toggle}>
						<img class=b src="${bDataPng}" alt=""/>
					</button>
					<slot class=navslot name=nav></slot>
				</div>
			</header>

			<slot class=contentslot></slot>
		</div>
	`
})

