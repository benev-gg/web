
import {template, html, socialCard, dataSvgEmoji} from "@e280/scute"
import {benevNav} from "./ssg/benev-nav.js"
import {benevCssText} from "./css/benev.csstext.js"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html benev>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>

			<title>@benev/web</title>
			<link rel="icon" href="${dataSvgEmoji("😇")}"/>
			<script type="module" src="${orb.hashurl("main.bundle.min.js")}"></script>
			<style>
				@layer benev, demo;
				${html.raw(benevCssText)}
				${orb.inject("css/demo.css")}
			</style>

			${socialCard({
				themeColor: "#ffdd22",
				siteName: "@benev/web",
				title: "@benev/web",
				description: "benev web ui library",
			})}
		</head>
		<body>
			<benev-menu>
				<benev-account></benev-account>
			</benev-menu>

			<benev-header>
				${benevNav("games")}
			</benev-header>

			<benev-loader>
				<main benev-slice>
					<h1>benev</h1>
					<button class=testloader>test loader</button>
				</main>
			</benev-loader>
		</body>
	</html>
`)

