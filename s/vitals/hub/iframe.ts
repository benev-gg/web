
import {signal} from "@e280/strata"
import {Portal} from "@e280/renraku"
import {User} from "@e280/authlocal/protocol"
import {recvPort, webAutoTransfer} from "@e280/renraku/web"
import {consts} from "../../consts.js"
import {HubClientApi, HubHostApi} from "./types.js"

export function hubIframe(options: {src: string}) {
	const $user = signal<User | undefined>(undefined)
	const iframe = document.createElement("iframe")

	iframe.sandbox.add(
		"allow-scripts",
		"allow-same-origin",
		"allow-popups",
		"allow-popups-to-escape-sandbox",
	)

	iframe.src = options.src

	async function connect() {
		const {topic} = consts
		const autoTransfer = webAutoTransfer
		const {port} = await recvPort({
			topic,
			from: iframe.contentWindow!,
			fromOrigin: new URL(options.src).origin,
		})

		const fns: HubClientApi = {
			sessionChange: async session => {
				$user(session && new User(session))
			},
		}

		const portal = new Portal<HubHostApi>({port, fns, autoTransfer})
		const session = await portal.remote.getSession()
		$user(session && new User(session))
		return () => portal.close()
	}

	return {iframe, $user, connect}
}

