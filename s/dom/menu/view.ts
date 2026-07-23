
import {html} from "lit"
import {dom, shadowElement, useCss, useMount} from "@e280/sly"
import styleCss from "./style.css.js"
import {Shell} from "../../vitals/shell.js"
import {HeaderView} from "../header/view.js"
import {themeCss} from "../../css/theme.css.js"
import {onKeypress} from "./utils/on-keypress.js"
import {clickBackdrop} from "./utils/click-backdrop.js"
import {useAfterFirstRender} from "./utils/use-after-first-render.js"

export const menuComponent = (shell: Shell) => shadowElement(() => {
	useCss(themeCss, styleCss)
	useAfterFirstRender(shadow => shell.attach(dom("dialog", shadow)))
	useMount(onKeypress(["KeyB", "Escape"], () => shell.toggle()))

	const click = clickBackdrop(() => shell.toggle(false))
	const renderMenuContent = () => html`<slot></slot>`

	return html`
		<dialog @click=${click}>
			<section class=plate autofocus tabindex="-1">
				${shell.dialog?.open
					? renderMenuContent()
					: null}
			</section>

			${HeaderView(shell)}
		</dialog>
	`
})

