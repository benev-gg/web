
import {ev} from "@e280/stz"

export function onKeypress(keys: string[], fn: () => void) {
	return () => ev(window, {
		keydown: (event: KeyboardEvent) => {
			const target = event.target as HTMLElement
			const typing = (
				target instanceof HTMLInputElement ||
				target instanceof HTMLTextAreaElement ||
				target.isContentEditable
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

