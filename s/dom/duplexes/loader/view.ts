
import {html} from "lit"
import {shadowDuplex, useCss, useName} from "@e280/sly"

import styleCss from "./style.css.js"
import {themeCss} from "../../../css/theme.css.js"
import {bDataPng} from "../../../assets/b.png.js"

export const [BenevLoader, makeBenevLoaderElement] = shadowDuplex(() => {
	useName("benev-loader")
	useCss(themeCss, styleCss)

	return html`
		<slot></slot>

		<div class=veil>
			<div class=scalar>
				<img class=logo src="${bDataPng}" alt="" draggable="false"/>
				<slot name=loading></slot>
			</div>
		</div>
	`
})

