
import {templateString as css} from "@e280/stz"
export default css`

color-scheme: dark;

&:is(html) {
	font-family: sans-serif;
	font-size: var(--benev-font-size);

	scrollbar-gutter: stable;
	scrollbar-width: thin;

	color: var(--benev-text);
	background: var(--benev-bg);
	text-shadow: var(--benev-text-shadow);
}

body {
	min-height: 100dvh;
}

`

