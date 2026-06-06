
import {template, html, socialCard, dataSvgEmoji} from "@e280/scute"
import {basisCssText} from "./css/basis.css-text.js"
import {benevCoreCssText} from "./css/benev-core.css-text.js"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>

			<title>@benev/web</title>
			<link rel="icon" href="${dataSvgEmoji("😇")}"/>
			<script type="module" src="${orb.hashurl("main.bundle.min.js")}"></script>
			<style data-theme>
				@layer base, basis, benev, demo;
				@layer base {
					:root {
						color:#aaa;
						background:#000;
					}
				}
				${basisCssText}
				${benevCoreCssText}
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
			<benev-shell>
				<nav class=topnav slot=nav>
					<a href="https://benev.gg/">benev.gg</a>
				</nav>

				<main benev-slice>
					<benev-loader>
						<h1>benev</h1>
					</benev-loader>
				</main>
			</benev-shell>
		</body>
	</html>
`)

