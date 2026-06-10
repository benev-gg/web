
import {css} from "lit"
export default css`@layer benev.view {

:host {
	display: block;
	position: relative;
}

.veil {
	position: absolute;
	inset: 0;
	background: var(--benev-bg);
	pointer-events: none;

	opacity: 1;
	visibility: visible;

	transition:
		opacity var(--benev-anim) linear,
		visiblity 0ms linear allow-discrete;
}

:host(:not([loading])) .veil {
	opacity: 0;
	visiblity: hidden;
}

.veil {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--benev-space);

	> img {
		width: 100%;
		max-width: 10em;
		aspect-ratio: 1 / 1;
	}
}

}`

