
import {css} from "lit"
export default css`@layer benev.view {

:host {
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100%;
}

:host > header {
	display: flex;
	flex-wrap: wrap;

	> nav {
		user-select: none;
		flex: 1 1 auto;
		display: flex;
		flex-wrap: wrap;
		border-bottom: var(--benev-border);

		button {
			cursor: pointer;
			padding: var(--benev-nib) var(--benev-space);
			border-bottom: var(--benev-thick) solid transparent;

			&:is(:hover, :focus-visible) {
				background: color-mix(in oklch, transparent, var(--benev-prime) 10%);
			}

			&[data-active] {
				background: color-mix(in oklch, transparent, var(--benev-prime) 20%);
				border-bottom-color: var(--benev-prime);
			}
		}
	}
}

:host > section {
	flex: 1 1 auto;
	overflow: auto;
	scrollbar-gutter: stable;
}

}`

