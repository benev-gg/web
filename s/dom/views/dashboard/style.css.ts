
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
		flex: 1 1 auto;
		display: flex;
		flex-wrap: wrap;

		button {
		}
	}
}

:host > section {
	flex: 1 1 auto;
}

}`

