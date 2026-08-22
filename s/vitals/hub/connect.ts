
import {signal} from "@e280/strata"
import {Portal} from "@e280/renraku"
import {User} from "@e280/authlocal/protocol"
import {recvPort, webAutoTransfer} from "@e280/renraku/web"
import {consts} from "../../consts.js"
import {HubClientApi, HubHostApi} from "./types.js"

export async function connectHub(src = "https://benev.gg/hub/") {
	const {topic} = consts

	const autoTransfer = webAutoTransfer
	const iframe = document.createElement("iframe")
	const $user = signal<User | undefined>(undefined)

	const {port} = await recvPort({
		topic,
		from: iframe.contentWindow!,
		fromOrigin: new URL(src).origin,
	})

	const fns: HubClientApi = {
		sessionChange: async session => {
			$user(session && new User(session))
		},
	}

	const portal = new Portal<HubHostApi>({port, fns, autoTransfer})
	const session = await portal.remote.getSession()
	$user(session && new User(session))
	const dispose = () => portal.close()

	iframe.sandbox.add(
		"allow-scripts",
		"allow-same-origin",
		"allow-popups",
		"allow-popups-to-escape-sandbox",
	)
	iframe.src = src

	return {iframe, $user, dispose}
}

