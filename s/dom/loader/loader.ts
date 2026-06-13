
import {nap} from "@e280/stz"
import {Content, dom} from "@e280/sly"
import {consts} from "../../consts.js"

export class Loader {
	original

	#loading
	#content
	#operation = 0

	constructor(
			public element: HTMLElement,
			public anim = consts.anim,
		) {

		this.original = document.createElement("template")
		this.original.innerHTML = element.innerHTML

		this.#loading = document.createElement("div")
		this.#loading.style.display = "contents"
		this.#loading.slot = "loading"

		this.#content = document.createElement("div")
		this.#content.style.display = "contents"
		dom.render(this.#content, Array.from(element.childNodes))

		this.element.replaceChildren()
		this.element.append(
			this.#loading,
			this.#content,
		)
	}

	async load(
			getLoading: () => Content,
			getContent: () => Promise<Content>,
		) {

		this.#operation += 1
		const operation = this.#operation
		const isLatest = () => (this.#operation === operation)
		this.element.inert = true
		this.element.toggleAttribute("loading", true)
		dom.render(this.#loading, getLoading())

		try {
			const [content] = await Promise.all([
				getContent(),
				nap(this.anim * 2),
			])

			if (isLatest()) {
				this.element.toggleAttribute("loading", false)
				this.element.inert = false
				dom.render(this.#content, content)
				await nap(this.anim)
			}
		}
		finally {
			if (isLatest()) {
				this.element.toggleAttribute("loading", false)
				this.element.inert = false
				dom.render(this.#loading, null)
			}
		}
	}
}

