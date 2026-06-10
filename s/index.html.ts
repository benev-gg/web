
import {template, html, socialCard, dataSvgEmoji} from "@e280/scute"
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
				@layer base, basis, benev, demo;
				@layer base {
					:root {
						color: #aaa;
						background: #000;
					}
				}
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
			<benev-menu></benev-menu>
			<benev-header>
				<a href="https://benev.gg/">benev.gg</a>
			</benev-header>

			<main benev-slice>
				<benev-loader>
					<h1>benev</h1>
				</benev-loader>
			</main>
		</body>
	</html>
`)

