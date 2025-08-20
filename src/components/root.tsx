import { defineComponent } from "vue";

const _root = defineComponent({
    name: "Root",
    setup(_props, { slots }) {
        console.log("slots", slots)
        return () => (
              <>
                <html lang="en">
                    <head>
                        <link
                            rel="apple-touch-icon"
                            sizes="192x192"
                            href="/assets/images/web-app-manifest-192x192.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="96x96"
                            href="/assets/images/favicon-96x96.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="180x180"
                            href="/assets/images/apple-touch-icon.png"
                        />
                        <link rel="manifest" href="/site.webmanifest" />
                        <link rel="icon" href="/assets/images/favicon.ico" />
                        <meta charset="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        
                    </head>
                    <body>{slots.default ? slots.default() : null}</body>
                </html>
            </>
        )
    },
});

export default _root;