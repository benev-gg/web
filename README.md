
# @benev/web

sdk toolkit for making an official benev website.

1. **install npm package**
    ```bash
    npm i @benev/web
    ```
    - note that imports from `@benev/web` are browser-centric
    - note that imports from `@benev/web/ssg` are node-safe
1. **scute index.html.ts: install css from `ssg` entrypoint**
    - import benev css
        ```ts
        import {benevCssText} from "@benev/web/ssg"
        ```
    - inject the css into your `<head>` (along with your own styles)
      ```ts
      html`
        <style data-theme>
          @layer benev, app;
          @layer app {
            :root, :host {
              color: #aaa;
              background: #000;
            }
          }
          ${html.raw(benevCssText)}
          ${orb.inject("css/app.css")}
        </style>
      `
      ```
      - benev styles are on the `benev` layer
      - the `app` layer is an example of your own app's styles
1. **html: add `benev` html attribute wherever you want benev styles to apply**
    ```html
    <html benev>
      ...
    </html>
    ```
1. **typescript: install custom elements**
    ```ts
    import {dom} from "@e280/sly"
    import {setupBenev} from "@benev/web"

    const benev = await setupBenev()
    dom.register(benev.elements)
    ```
    - menu (the benev overlay menu)
        ```html
        <benev-menu></benev-menu>
        ```
        - you can control the menu via `benev.shell`, eg, `benev.shell.toggle()`
    - header (standard header with `b` button that opens menu)
        ```html
        <benev-header>
          <a href="https://benev.gg/">benev.gg</a>
        </benev-header>
        ```
    - loader (loading screens)
        ```html
        <benev-loader>
          hello world
        </benev-loader>
        ```
        - you control it by creating a `new Loader(dom("benev-loader"))`

