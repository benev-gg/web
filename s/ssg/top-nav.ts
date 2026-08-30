
import {html} from "@e280/scute"
import {Zone} from "../types.js"

export function topNav(currentZone: Zone) {
	return html`
		${navlink(currentZone, "games", "/")}
		${navlink(currentZone, "devlog", "/d/")}
	`
}

const navlink = (currentZone: string, zone: string, path: string) => (
	(zone === currentZone)
		? html`<a href="${path}" data-active>${zone}</a>`
		: html`<a href="${path}">${zone}</a>`
)

