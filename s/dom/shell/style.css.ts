
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
	}

	.header {
		position: absolute;
		inset: 0 0 auto 0;

		.tray {
			overflow: hidden;
			transition: height var(--benev-anim) ease;
			height: 0;
			background: #00f4;

			[data-opened] & {
				height: min(20em, calc(100dvh - 3em));
			}
		}

		.bar {
			display: flex;
			justify-content: space-between;
			padding: calc(var(--benev-pad) / 2) var(--benev-pad);

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
	}

	.contentslot {
		display: block;
		flex: 1 1 auto;
	}
}`

