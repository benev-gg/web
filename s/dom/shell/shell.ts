
import {signal} from "@e280/strata"

export class Shell {
	$open = signal(false)
	toggle = () => this.$open(!this.$open())
	open = () => this.$open(true)
	close = () => this.$open(false)
}

