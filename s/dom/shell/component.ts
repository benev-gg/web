
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

	const open = shell.$open()

	return html`
		<div class=shell ?data-opened=${open}>
			<div part=backdrop ?inert=${!open} @click=${shell.close}></div>

			<header part=header benev-slice>
				<div part=tray benev-slice>
					${shell.$open() ? html`
						<p>b menu</p>
						<p>coming soon</p>
					` : null}
				</div>

				<div part=bar>
					<button class=b benev-button=naked title="b menu" @click=${shell.toggle}>
						<img part=b-img src="${bDataPng}" alt="b"/>
					</button>
					<slot class=navslot name=nav ?inert=${open}></slot>
				</div>
			</header>

			<slot class=contentslot></slot>
		</div>
	`
})

