
import {templateString as css} from "@e280/stz"
export default css`

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
		transition: filter anim(--benev-anim) linear;

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

button, [benev-button] {
	font: inherit;
	text-decoration: none;

	display: inline-flex;
	align-items: center;
	flex-wrap: wrap;
	padding: var(--benev-pad) var(--benev-space);

	font-weight: bold;
	text-transform: uppercase;
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
		&:hover, &:focus-visible { opacity: 1; transform: scale(105%); }
		&:active { opacity: var(--benev-inactive-opacity); }
	}

	&[benev-button="naked"] {
		color: inherit;
		background: transparent;
		padding: 0;
		border-radius: 0;
		border: none;
		text-transform: unset;
		font-weight: inherit;
		text-transform: inherit;
	}

	&[benev-button="juicy"] {
		opacity: 1;
		color: black;
		border: var(--benev-thick) solid var(--benev-prime);
		background: linear-gradient(
			to bottom,
			oklch(from var(--benev-prime) calc(l * 1.5) c h),
			oklch(from var(--benev-prime) l calc(c * 1.5) h)
		);
		&:is(:hover, :focus-visible) {
			box-shadow: 0 0 2em color-mix(in oklch, transparent, var(--benev-prime));
		}
	}
}

[benev-slice] {
	width: 100%;
	max-width: var(--benev-site-width);
	margin-left: auto;
	margin-right: auto;
}

benev-header {
	display: flex;
	justify-content: end;
	align-items: center;
	width: 100%;
	max-width: var(--benev-site-width);
	margin: 0 auto;

	&:not(:defined) {
		padding: var(--benev-pad);
		gap: var(--benev-space);

		&::before {
			content: "";
			display: inline-block;
			margin-right: auto;
			width: var(--benev-b-size);
			height: var(--benev-b-size);
		}
	}
}

[benev-prose] {
	h1 {
		font-size: 2.5em;
		color: var(--benev-intense);
		a { color: inherit; }
	}

	h2 {
		font-size: 1.5em;
		color: var(--benev-prime);
	}

	p {
		max-width: var(--benev-copy-width);
	}

	p:has(> img) {
		max-width: 100%;
	}

	img {
		max-width: 100%;
		background: #0004;
		border-radius: var(--benev-round);
		box-shadow: var(--benev-box-shadow);
	}

	blockquote {
		color: oklch(from currentColor l 0 h / 50%);
		padding-left: var(--benev-pad);
		margin-left: var(--benev-pad);
		font-style: italic;
		border-left: var(--benev-thick) solid currentColor;
	}

	hr {
		border: none;
		display: block;
		height: var(--benev-thick);
		background: oklch(from var(--benev-text) l c h / 25%);
		margin: var(--benev-space) 0;
	}
}

`

