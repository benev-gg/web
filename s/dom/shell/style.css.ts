
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

	[part="backdrop"] {
		pointer-events: none;
		opacity: 0;
		position: absolute;
		inset: 0;
		background: #0008;
		backdrop-filter: blur(var(--benev-blur));

		transition: all var(--benev-anim) linear;

		[data-opened] & {
			pointer-events: all;
			opacity: 1;
		}
	}

	[part="header"] {
		position: absolute;
		inset: 0 0 auto 0;

		[part="tray"] {
			height: 0;
			overflow: hidden;
			background: #4448;
			box-shadow: var(--benev-box-shadow);
			border-radius: 0 0 var(--benev-round) var(--benev-round);

			display: flex;
			justify-content: center;
			align-items: center;
			transition: height var(--benev-anim) ease;

			[data-opened] & {
				height: min(20em, calc(100dvh - 3em));
			}
		}

		[part="bar"] {
			display: flex;
			align-items: center;
			gap: var(--benev-pad);
			padding: calc(var(--benev-pad) / 2) var(--benev-pad);

			.b {
				display: block;

				:host([subtle]) & {
					--benev-inactive-opacity: 0.3;
				}

				img {
					width: 1.5em;
					height: 1.5em;
				}
			}

			.navslot {
				display: block;
				flex: 1 1 auto;
			}
		}
	}

	.contentslot {
		display: block;
		flex: 1 1 auto;
	}
}`

