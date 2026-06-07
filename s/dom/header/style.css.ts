
import {css} from "lit"
export default css`@layer benev.view {

nav {
	display: flex;
	flex-wrap: wrap;
	justify-content: end;
	align-items: center;
	gap: var(--benev-pad);
	padding: var(--benev-pad);
}

.b {
	display: block;
	margin-right: auto;

	:host([subtle]) & {
		--benev-inactive-opacity: 0.3;
	}

	img {
		width: 1.5em;
		height: 1.5em;
	}
}

slot {
	display: contents;
}

}`

