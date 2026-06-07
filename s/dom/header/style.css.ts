
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
	gap: var(--benev-space);
	padding: var(--benev-pad);
}

button {
	display: block;
	margin-right: auto;

	img {
		display: block;
		width: var(--benev-b-size);
		height: var(--benev-b-size);
	}
}

slot {
	display: contents;
}

}`

