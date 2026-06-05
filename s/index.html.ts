
import {template, html, socialCard, dataSvgEmoji} from "@e280/scute"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>
			<style>@layer base{html{background:#000;color:#aaa;}}</style>

			<title>@benev/web</title>
			<link rel="icon" href="${dataSvgEmoji("😇")}"/>
			<script type="module" src="${orb.hashurl("main.bundle.min.js")}"></script>

			<style data-theme>@layer base, basis, benev;</style>
			<style data-theme>${orb.inject("css/basis.css")}</style>
			<style data-theme>${orb.inject("css/benev.css")}</style>

			${socialCard({
				themeColor: "#ffdd22",
				siteName: "@benev/web",
				title: "@benev/web",
				description: "benev web ui library",
			})}
		</head>
		<body>
			<h1>benev</h1>
		</body>
	</html>
`)

