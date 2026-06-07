
import {css} from "lit"
export default css`@layer benev.view {

dialog {
	border: 0;
	padding: 0;
	background: transparent;
	overflow: visible;
	max-height: unset;
	font: inherit;
	color: inherit;

	position: absolute;
	inset: 0 0 auto 0;
	width: 100%;
	max-width: var(--benev-site-width);
	margin: auto;

	transition: all var(--benev-anim) ease allow-discrete;
	opacity: 0;
	transform: translateY(-100%);
}

dialog > section {
	--theight: min(20em, calc(100dvh - var(--benev-headroom)));
	width: 100%;
	height: var(--theight);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: linear-gradient(
		to bottom right,
		var(--benev-tray),
		oklch(from var(--benev-tray) calc(l * 0.6) calc(c * 1.2) h / alpha)
	);
	box-shadow: var(--benev-box-shadow);
	box-shadow: 0 0 4em oklch(from var(--benev-tray) l c h / 60%);
	border-radius: 0 0 var(--benev-round) var(--benev-round);
	border: var(--benev-thick) solid oklch(from var(--benev-tray) calc(l * 1.2) calc(c * 1.2) h / alpha);
	border-top: 0;
}

dialog[open] {
	opacity: 1;
	transform: translateY(0);
}

dialog[open][data-closing] {
	opacity: 0;
	transform: translateY(-100%);
}

dialog:focus-visible {
	outline: none;
}

dialog::backdrop {
	background: rgb(0 0 0 / 0%);
	backdrop-filter: blur(0);
	transition: all var(--benev-anim) ease allow-discrete;
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
		transform: translateY(-100%);
	}

	dialog[open]::backdrop {
		background: rgb(0 0 0 / 0%);
		backdrop-filter: blur(0);
	}
}

}`

