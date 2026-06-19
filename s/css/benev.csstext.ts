
import {templateString as css} from "@e280/stz"
import varsCsstext from "./parts/vars.csstext.js"
import coreCsstext from "./parts/core.csstext.js"
import pageCsstext from "./parts/page.csstext.js"
import commonCsstext from "./parts/common.csstext.js"

export const benevCssText = css`

@layer
	benev.vars,
	benev.core,
	benev.common,
	benev.page;

@layer benev.vars {
	[benev], :host {
		${varsCsstext}
	}
}

@layer benev.core {
	[benev], :host {
		${coreCsstext}
	}
}

@layer benev.common {
	[benev], :host {
		${commonCsstext}
	}
}

@layer benev.page {
	[benev], :host {
		${pageCsstext}
	}
}

`

