
import {Content} from "@e280/sly"
import {nap, sub} from "@e280/stz"
import {signal} from "@e280/strata"

export class Loader {
	$loading = signal<null | string>(null)
	loaded = sub<[Content]>()

	constructor(public options: {
		transitionDuration: number
		errorDisplay: (err: unknown) => Content
	}) {}

	async load(label: string, fn: () => Promise<Content>) {
		this.$loading(label)
		try {
			const [content] = await Promise.all([
				fn().catch(this.options.errorDisplay),
				nap(this.options.transitionDuration),
			])
			await this.loaded.publish(content)
			return content
		}
		finally {
			this.$loading(null)
			return null
		}
	}
}

