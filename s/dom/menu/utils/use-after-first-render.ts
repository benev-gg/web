
import {useRendered, useShadow, useWake} from "@e280/sly"

export function useAfterFirstRender(fn: (shadow: ShadowRoot) => void) {
	const shadow = useShadow()
	const rendered = useRendered()
	useWake(() => rendered.then(() => fn(shadow)))
}

