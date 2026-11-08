
import {ev} from "@e280/stz"

export function onKeypress(keys: string[], fn: () => void) {
	return () => ev(window, {
		keydown: (event: KeyboardEvent) => {
			const typing = event.composedPath().some(node =>
				node instanceof HTMLElement && (
					node instanceof HTMLInputElement ||
					node instanceof HTMLTextAreaElement ||
					node instanceof HTMLSelectElement ||
					node.isContentEditable
				)
			)

			if (typing)
				return

			if (keys.includes(event.code)) {
				event.preventDefault()
				fn()
			}
		},
	})
}

