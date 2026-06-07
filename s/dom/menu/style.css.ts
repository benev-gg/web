
import {css} from "lit"
export default css`@layer benev.view {

dialog {
	border: 0;
	padding: 0;
	background: transparent;
	opacity: 0;

	transition:
		opacity var(--benev-anim) ease,
		overlay var(--benev-anim) ease allow-discrete,
		display var(--benev-anim) ease allow-discrete;
}

dialog[open] {
	opacity: 1;
}

dialog[open][data-closing] {
	opacity: 0;
}

dialog:focus-visible {
	outline: none;
}

dialog::backdrop {
	background: rgb(0 0 0 / 0%);
	backdrop-filter: blur(0);

	transition:
		background var(--benev-anim) ease,
		backdrop-filter var(--benev-anim) ease,
		overlay var(--benev-anim) ease allow-discrete,
		display var(--benev-anim) ease allow-discrete;
}

dialog[open]::backdrop {
	background: var(--benev-backdrop);
	backdrop-filter: var(--benev-blur);
}

dialog[open][data-closing]::backdrop {
	background: rgb(0 0 0 / 0%);
	backdrop-filter: blur(0);
}

@starting-style {
	dialog[open] {
		opacity: 0;
	}

	dialog[open]::backdrop {
		background: rgb(0 0 0 / 0%);
		backdrop-filter: blur(0);
	}
}

}`

