
import {benevCssText} from "./benev.csstext.js"

export const themeCss = [benevCssText].map(text => {
	const sheet = new CSSStyleSheet()
	sheet.replaceSync(text)
	return sheet
})

