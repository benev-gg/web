
import {nap} from "@e280/stz"
import {Content, dom} from "@e280/sly"
import {consts} from "../../consts.js"

export class Loader {
	#busy = false

	constructor(
		public element: HTMLElement,
		public transitionDuration = consts.anim,
	) {}

	get busy() {
		return this.#busy
	}

	async load(
			getLoading: () => Content,
			getContent: () => Promise<Content>,
		) {

		if (this.#busy)
			throw new Error("loader is busy")

		try {
			this.#busy = true
			this.element.inert = true
			this.#addLoading(getLoading())
			this.element.toggleAttribute("loading", true)

			const [content] = await Promise.all([
				getContent(),
				nap(this.transitionDuration),
			])

			this.#swapContent(content)
			this.element.toggleAttribute("loading", false)
			this.element.inert = false
			await nap(this.transitionDuration)
		}
		finally {
			this.element.toggleAttribute("loading", false)
			this.#removeLoading()
			this.element.inert = false
			this.#busy = false
		}
	}

	#addLoading(loading: Content) {
		const div = document.createElement("div")
		div.slot = "loading"
		dom.render(div, loading)
		this.element.append(div)
	}

	#removeLoading() {
		for (const child of [...this.element.children]) {
			if (child.slot === "loading")
				child.remove()
		}
	}

	#swapContent(content: Content) {
		for (const child of [...this.element.childNodes]) {
			if (!(child instanceof HTMLElement && child.slot === "loading"))
				child.remove()
		}
		dom.render(this.element, content)
	}
}

