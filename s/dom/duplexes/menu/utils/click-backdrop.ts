
export function clickBackdrop(fn: (event: Event) => void) {
	return (event: Event) => {
		if (event.target === event.currentTarget)
			fn(event)
	}
}

