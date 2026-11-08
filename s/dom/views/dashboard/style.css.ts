
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

	> nav {
		flex: 1 1 auto;
		display: flex;
	}
}

:host > section {
	flex: 1 1 auto;
}

}`

