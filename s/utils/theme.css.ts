
import {basisCssText} from "../css/basis.css-text.js"
import {benevCoreCssText} from "../css/benev-core.css-text.js"

export const themeCss = [basisCssText, benevCoreCssText].map(text => {
	const sheet = new CSSStyleSheet()
	sheet.replaceSync(text)
	return sheet
})

