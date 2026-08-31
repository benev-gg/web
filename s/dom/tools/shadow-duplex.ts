
import {Content, shadow, shadowElement, useName} from "@e280/sly"

export function shadowDuplex<P extends any[]>(name: string, render: (...p: P) => Content) {
	const view = shadow((...p: P) => {
		useName(name)
		return render(...p)
	})

	const makeElement = (...p: P) => shadowElement(() => render(...p))

	return [view, makeElement] as [
		view: typeof view,
		makeElement: typeof makeElement,
	]
}

