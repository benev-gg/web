
import {templateString as css} from "@e280/stz"
export default css`

&, *, ::before, ::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scrollbar-width: thin;
}

:focus-visible {
	outline: var(--benev-focus);
	outline-offset: 0.2em;
}

::selection {
	color: var(--benev-select-color);
	background: var(--benev-select-bg);
}

`

