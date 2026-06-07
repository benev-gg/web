
import {html} from "lit"
import {ev} from "@e280/stz"
import {dom, shadowElement, useCss, useMount, useRendered, useShadow, useWake} from "@e280/sly"
import {Shell} from "../../brains/shell.js"
import {themeCss} from "../../css/theme.css.js"
import styleCss from "./style.css.js"

export const menuComponent = (shell: Shell) => shadowElement(() => {
	useCss(themeCss, styleCss)

	const shadow = useShadow()
	const rendered = useRendered()
	useWake(() => rendered.then(() => shell.attach(dom("dialog", shadow))))

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
			if (event.code === "KeyB" || event.code === "Escape") {
				event.preventDefault()
				shell.toggle()
			}
		},
	}))

	const click = (event: Event) => {
		if (event.target === event.currentTarget)
			shell.toggle(false)
	}

	return html`
		<dialog @click=${click}>
			<section>
				hello
			</section>
		</dialog>
	`
})

