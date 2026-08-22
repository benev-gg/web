
import {Session} from "@e280/authlocal/protocol"

export type HubHostApi = {
	getSession: () => Promise<Session | undefined>
}

export type HubClientApi = {
	sessionChange: (session: Session | undefined) => Promise<void>
}

