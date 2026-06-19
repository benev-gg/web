
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

a {
	color: var(--benev-link);
	text-decoration: none;

	&:visited {
		color: var(--benev-link);
	}

	&:hover, &:focus-visible {
		color: color-mix(in srgb, var(--benev-link), white 15%);
		text-decoration: underline;
	}

	&:active {
		color: color-mix(in srgb, var(--benev-link), white 50%);
	}

	&[benev-cardlink] {
		color: inherit;

		&:hover, &:focus-visible {
			color: inherit;
			text-decoration: none;
			filter: brightness(105%);
		}

		&:active {
			color: inherit;
			filter: brightness(95%);
		}
	}
}

`

