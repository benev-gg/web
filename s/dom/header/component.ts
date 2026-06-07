
import {html} from "lit"
import {shadowElement} from "@e280/sly"
import {Shell} from "../../brains/shell.js"
import {HeaderView} from "./view.js"

export const headerComponent = (shell: Shell) => shadowElement(() => {
	return HeaderView.with({
		props: [shell],
		children: html`<slot></slot>`,
	})
})

