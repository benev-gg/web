
import {html} from "lit"
import {shadowElement, useCss} from "@e280/sly"
import {themeCss} from "../../css/theme.css.js"
import {bDataPng} from "../../assets/b.png.js"
import styleCss from "./style.css.js"

export const BenevLoader = shadowElement(() => {
	useCss(themeCss, styleCss)

	return html`
		<slot></slot>

		<div class=veil>
			<img src="${bDataPng}" alt="" draggable="false"/>
			<slot name=loading></slot>
		</div>
	`
})

