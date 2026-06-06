
import {html} from "lit"
import {shadowElement, useCss} from "@e280/sly"
import styleCss from "./style.css.js"
import {bDataPng} from "../../assets/b.png.js"
import {themeCss} from "../../utils/theme.css.js"

export const BenevShell = shadowElement(() => {
	useCss(themeCss, styleCss)

	return html`
		<div class=shell>
			<header benev-slice>
				<button class=b benev-button=naked>
					<img class=b src="${bDataPng}" alt=""/>
				</button>
				<slot name=nav></slot>
			</header>

			<slot></slot>
		</div>
	`
})

