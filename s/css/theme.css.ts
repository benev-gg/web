
import {basisCssText} from "./basis.css-text.js"
import {benevCoreCssText} from "./benev-core.css-text.js"

export const themeCss = [basisCssText, benevCoreCssText].map(text => {
	const sheet = new CSSStyleSheet()
	sheet.replaceSync(text)
	return sheet
})

