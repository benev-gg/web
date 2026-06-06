
import {templateString as css} from "@e280/stz"
export const benevCoreCssText = css`@layer benev.core, benev.view; @layer benev.core {
	:root, :host {
		--benev-font-size: 18px;
		--benev-site-width: 62em;
		--benev-copy-width: 70ch;

		--benev-bg: #111;
		--benev-prime: #ebb935;
		--benev-text: color-mix(in oklch, var(--benev-prime), #fffa 75%);
		--benev-intense: white;
		--benev-focus: 2px solid cyan;
		--benev-link: color-mix(in oklch, var(--benev-prime), white 25%);

		--benev-select-bg: #f60;
		--benev-select-color: #ff8;

		--benev-line: #ebb93588;
		--benev-thin: 1px;
		--benev-thick: 2px;
		--benev-border: var(--benev-thin) solid color-mix(in oklch, transparent, var(--benev-line) 50%);
		--benev-inactive-opacity: 0.8;

		--benev-pad: 0.5em;
		--benev-space: 1em;
		--benev-anim: 200ms;
		--benev-round: 0.5em;
		--benev-blur: 0.5em;

		--benev-box-shadow: 0 0.5em 2em #0008;
		--benev-text-shadow: 0.04em 0.08em 0.1em #0008;
	}

	[benev-link] {
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
	}

	[benev-slice] {
		width: 100%;
		max-width: var(--benev-site-width);
		margin-left: auto;
		margin-right: auto;
	}

	[benev-button] {
		font: inherit;
		text-decoration: none;

		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		padding: var(--benev-pad) var(--benev-space);

		color: var(--benev-prime);
		background: oklch(from var(--benev-bg) l c h / 50%);
		border: var(--benev-thick) solid currentColor;
		border-radius: var(--benev-round);

		&[disabled] {
			opacity: 0.3;
		}

		&:not([disabled]) {
			opacity: var(--benev-inactive-opacity);
			cursor: pointer;
			transform: scale(100%);
			transition: transform var(--benev-anim) ease;
			&:hover, &:focus-visible { opacity: 1; transform: scale(110%); }
			&:active { opacity: var(--benev-inactive-opacity); }
		}

		&[benev-button="naked"] {
			color: inherit;
			background: transparent;
			border-radius: 0;
			border: none;
			text-transform: unset;
		}
	}

	benev-shell:not(:defined) {
		.topnav {
			position: absolute;
			inset: 0 0 auto 0;

			display: flex;
			justify-content: end;
			width: 100%;
			max-width: var(--benev-site-width);

			margin: 0 auto;
			padding: calc(var(--benev-pad) / 2) var(--benev-pad);
		}
	}
}`

