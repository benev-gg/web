
import {css} from "lit"
export default css`@layer benev.view {
	:host {
		display: contents;
	}

	.shell {
		position: relative;

		height: 100dvh;
		display: flex;
		flex-direction: column;

		> header {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;

			display: flex;
			justify-content: space-between;
			padding: calc(var(--benev-pad) / 2) var(--benev-pad);

			border: 1px solid yellow;

			.b {
				:host([subtle]) & {
					--benev-inactive-opacity: 0.3;
				}

				img {
					width: 1.5em;
					height: 1.5em;
				}
			}
		}

		> slot {
			display: block;
			flex: 1 1 auto;
		}
	}
}`

