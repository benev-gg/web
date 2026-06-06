
import {html} from "lit"
import {shadowElement, useCss} from "@e280/sly"
import {Loader} from "./loader.js"
import {themeCss} from "../../css/theme.css.js"
import styleCss from "./style.css.js"

export const loaderComponent = (loader: Loader) => shadowElement(() => {
	useCss(themeCss, styleCss)

	void loader

	return html`
		<slot></slot>
	`
})

