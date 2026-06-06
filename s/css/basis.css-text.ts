
import {templateString as css} from "@e280/stz"
export const basisCssText = css`@layer basis {
	*, ::before, ::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	:root, :host {
		box-sizing: border-box;
		color-scheme: dark;
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
}`

