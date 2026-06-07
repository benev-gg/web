
import {css} from "lit"
export default css`@layer benev.view {
	:host {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	.shell {
		display: contents;
	}

	[part="backdrop"] {
		z-index: 1;

		opacity: 0;
		position: absolute;
		inset: 0;
		background: #0008;
		backdrop-filter: blur(var(--benev-blur));

		transition: all var(--benev-anim) linear;

		[data-opened] & {
			opacity: 1;
		}
	}

	[part="header"] {
		z-index: 2;
		position: absolute;
		inset: 0 0 auto 0;

		[part="tray"] {
			height: 0;
			overflow: hidden;
			box-shadow: var(--benev-box-shadow);
			box-shadow: 0 0 4em oklch(from var(--benev-tray) l c h / 60%);
			border-radius: 0 0 var(--benev-round) var(--benev-round);

			background: linear-gradient(
				to bottom right,
				var(--benev-tray),
				oklch(from var(--benev-tray) calc(l * 0.6) calc(c * 1.2) h / alpha)
			);

			border: 0 solid oklch(from var(--benev-tray) calc(l * 1.2) calc(c * 1.2) h / alpha);

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			transition: height var(--benev-anim) ease;

			[data-opened] & {
				border-width: var(--benev-thick);
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
				opacity: 1;
				transition: opacity var(--benev-anim) linear;
				display: block;
				flex: 1 1 auto;

				[data-opened] & {
					opacity: 0;
				}
			}
		}
	}

	.contentslot {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
	}
}`

