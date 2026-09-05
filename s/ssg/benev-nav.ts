
import {html} from "@e280/scute"
import {Zone} from "../types.js"
import {bconfig} from "../bconfig.js"

export function benevNav(currentZone: Zone) {
	return html`
		${navlink(currentZone, "games")}
		${navlink(currentZone, "devlog")}
	`
}

const navlink = (currentZone: string, zone: Zone) => (
	(zone === currentZone)
		? html`<a href="${bconfig.zones[zone].path}" data-active>${zone}</a>`
		: html`<a href="${bconfig.zones[zone].path}">${zone}</a>`
)

