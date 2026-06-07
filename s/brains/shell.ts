
import {tracker} from "@e280/strata"
import {got, nap} from "@e280/stz"
import {consts} from "../consts.js"

export class Shell {
	#dialog?: HTMLDialogElement
	#closeToken = 0

	get dialog() {
		tracker.read(this)
		return this.#dialog
	}

	get open() {
		const dialog = this.dialog
		return !!dialog?.open && !dialog.hasAttribute("data-closing")
	}

	attach(dialog: HTMLDialogElement) {
		this.#dialog = dialog
		dialog.onclose = () => tracker.write(this)
		dialog.oncancel = event => {
			event.preventDefault()
			this.toggle(false)
		}
	}

	toggle = (please = !this.open) => {
		const dialog = got(this.dialog)

		if (please)
			this.#open(dialog)
		else
			this.#close(dialog)

		tracker.write(this)
	}

	#open(dialog: HTMLDialogElement) {
		this.#closeToken++
		dialog.removeAttribute("data-closing")

		if (!dialog.open)
			dialog.showModal()
	}

	#close(dialog: HTMLDialogElement) {
		if (!dialog.open)
			return

		const token = ++this.#closeToken
		dialog.setAttribute("data-closing", "")

		nap(consts.anim).then(() => {
			if (token !== this.#closeToken)
				return

			if (dialog.hasAttribute("data-closing"))
				dialog.close()

			dialog.removeAttribute("data-closing")
			tracker.write(this)
		})
	}
}

