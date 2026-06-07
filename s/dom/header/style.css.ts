
import {css} from "lit"
export default css`@layer benev.view {

:host {
	width: 100%;
}

nav {
	display: flex;
	flex-wrap: wrap;
	justify-content: end;
	align-items: center;
	gap: var(--benev-pad);
	padding: var(--benev-pad);
}

button {
	display: block;
	margin-right: auto;

	img {
		width: 1.5em;
		height: 1.5em;
	}
}

slot {
	display: contents;
}

}`

