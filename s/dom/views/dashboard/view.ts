
import {html} from "lit"
import {got} from "@e280/stz"
import {Content, shadowView, useCss, useName, useSignal} from "@e280/sly"
import styleCss from "./style.css.js"
import {Account} from "../../duplexes/account/account.js"
import {themeCss} from "../../../css/theme.css.js"
import {BenevAccount} from "../../duplexes/account/view.js"

export type Dashpanels = Record<string, {
	label: () => Content
	render: () => Content
}>

export const BenevDashboard = shadowView((account: Account, panels: Dashpanels) => {
	useName("benev-dashboard")
	useCss(themeCss, styleCss)

	const $activeKey = useSignal<keyof typeof panels>(got(Object.keys(panels).at(0)))

	const activeKey = Object.hasOwn(panels, $activeKey())
		? $activeKey()
		: got(Object.keys(panels).at(0))

	const activePanel = panels[activeKey]

	return html`
		<header>
			<nav>
				${Object.entries(panels).map(([key, panel]) => html`
					<button
						benev-button=naked
						data-active="${key === activeKey}"
						@click="${() => $activeKey(key)}">
							${panel.label()}
					</button>
				`)}
			</nav>

			${BenevAccount(account)}
		</header>

		<section class=panel>
			${activePanel?.render()}
		</section>
	`
})

