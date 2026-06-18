
import {templateString as css} from "@e280/stz"
import {consts} from "../../consts.js"
export default css`

--benev-font-size: 18px;
--benev-site-width: 62em;
--benev-copy-width: 70ch;
--benev-headroom: 2.5em;

--benev-bg: #111;
--benev-prime: #ebb935;
--benev-tray: #453e2ca8;
--benev-text: color-mix(in oklch, var(--benev-prime), #fffa 75%);
--benev-intense: white;
--benev-focus: 2px solid cyan;
--benev-link: aqua;
--benev-b-size: 1.5em;
--benev-code: #0f0;

--benev-select-bg: #f60;
--benev-select-color: #ff8;

--benev-line: #ebb93588;
--benev-thin: 1px;
--benev-thick: 3px;
--benev-border: var(--benev-thin) solid color-mix(in oklch, transparent, var(--benev-line) 50%);
--benev-inactive-opacity: 0.8;

--benev-pad: 0.5em;
--benev-space: 1em;
--benev-anim: ${consts.anim}ms;
--benev-round: 0.5em;
--benev-blur: blur(1em);
--benev-backdrop: #0008;

--benev-box-shadow: 0 0.5em 2em #0008;
--benev-text-shadow: 0.04em 0.08em 0.1em #0008;

`

