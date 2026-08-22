
import {Portal} from "@e280/renraku"
import {Kv, StorageMagazine} from "@e280/kv"
import {Auth, Session} from "@e280/authlocal/protocol"
import {sendPort, webAutoTransfer} from "@e280/renraku/web"
import {consts} from "../../consts.js"
import {HubClientApi, HubHostApi} from "./types.js"

export async function hostHub(options: {
		allowedOrigins: Set<string>
	}) {

	const {topic} = consts
	const {port, origin} = await sendPort({topic, to: window.parent})

	if (!options.allowedOrigins.has(origin))
		throw new Error(`forbidden origin "${origin}"`)

	const autoTransfer = webAutoTransfer
	const magazine = new StorageMagazine(localStorage)
	const kv = new Kv(magazine)
	const sessionCubby = kv.scope("benev", "auth").cell<Session>("session")

	const auth = new Auth({sessionCubby})
	await auth.remember()
	const getSession = () => (auth.user?.session ?? undefined)

	const fns: HubHostApi = {
		getSession: async() => getSession(),
	}

	const portal = new Portal<HubClientApi>({port, fns, autoTransfer})
	auth.on(() => portal.remote.sessionChange(getSession()))

	const dispose = () => {
		portal.close()
		auth.dispose()
	}

	return {auth, dispose}
}

