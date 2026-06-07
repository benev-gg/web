
import {tracker} from "@e280/strata"
import {defer, Deferred, got, nap} from "@e280/stz"
import {consts} from "../consts.js"

export class Shell {
	#dialog?: HTMLDialogElement
	#closing?: Deferred

	get dialog() {
		tracker.read(this)
		return this.#dialog
	}

	get open() {
		return !!this.dialog?.open
	}

	attach(dialog: HTMLDialogElement) {
		this.#dialog = dialog
		dialog.onclose = () => tracker.write(this)
		dialog.oncancel = () => tracker.write(this)
	}

	async toggle(please = !this.open) {
		const dialog = got(this.dialog)

		if (please) {
			dialog.removeAttribute("data-closing")
			this.#closing?.resolve()
			this.#closing = undefined

			if (!dialog.open)
				dialog.showModal()

			tracker.write(this)
			return
		}

		if (!dialog.open)
			return

		if (this.#closing)
			return this.#closing.promise

		this.#closing = defer()
		dialog.setAttribute("data-closing", "")

		try {
			await nap(consts.anim)

			if (dialog.hasAttribute("data-closing"))
				dialog.close()
		}
		finally {
			dialog.removeAttribute("data-closing")
			this.#closing.resolve()
			this.#closing = undefined
			tracker.write(this)
		}
	}
}

