
import {css} from "lit"
export default css`@layer benev.view {

:host {
	display: block;
	position: relative;
}

.veil, .scalar {
	position: absolute;
	inset: 0;
	transition:
		opacity var(--benev-anim) linear,
		transform var(--benev-anim) ease,
		visiblity 0ms linear allow-discrete;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--benev-space);
}

.veil {
	pointer-events: all;
	background: var(--benev-bg);

	opacity: 1;
	visibility: visible;

	.scalar {
		transform: scale(100%);
	}

	.logo {
		width: 100%;
		max-width: 10em;
		aspect-ratio: 1 / 1;
	}
}

:host(:not([loading])) .veil {
	pointer-events: none;
	opacity: 0;
	visiblity: hidden;

	.scalar {
		transform: scale(0%);
	}
}

}`

