
import {templateString as css} from "@e280/stz"
export default css`

box-sizing: border-box;
color-scheme: dark;
scrollbar-width: thin;

&, *, ::before, ::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
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

