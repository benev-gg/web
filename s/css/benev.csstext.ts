
import {templateString as css} from "@e280/stz"
import varsCsstext from "./parts/vars.csstext.js"
import coreCsstext from "./parts/core.csstext.js"
import pageCsstext from "./parts/page.csstext.js"
import commonCsstext from "./parts/common.csstext.js"

export const benevCssText = css`
@layer benev.core, benev.view;

@layer benev.core {
	[benev], :host {
		${varsCsstext}
		${coreCsstext}
	}
}

@layer benev.view {
	[benev], :host {
		${pageCsstext}
		${commonCsstext}
	}
}
`

