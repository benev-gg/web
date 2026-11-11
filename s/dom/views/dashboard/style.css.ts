
import {css} from "lit"
export default css`@layer benev.view {

:host {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-height: 0;
}

:host > header {
	display: flex;
	flex-wrap: wrap;
	gap: var(--benev-nib);

	> nav {
		user-select: none;
		flex: 1 1 auto;
		display: flex;
		border-bottom: var(--benev-border);
		overflow-x: auto;

		button {
			cursor: pointer;
			padding: var(--benev-nib) var(--benev-space);
			border-bottom: var(--benev-thick) solid transparent;

			&:is(:hover, :focus-visible) {
				background: color-mix(in oklch, transparent, var(--benev-prime) 10%);
			}

			&[data-active] {
				color: var(--benev-prime);
				background: color-mix(in oklch, transparent, var(--benev-prime) 20%);
				border-bottom-color: var(--benev-prime);
				text-shadow: 0 0 0.5em var(--benev-prime);
			}
		}
	}

	slot {
		display: flex;
		gap: var(--benev-nib);
		margin-left: auto;
	}
}

:host > section {
	flex: 1 1 auto;
	overflow: auto;
	scrollbar-gutter: stable;
}

}`

