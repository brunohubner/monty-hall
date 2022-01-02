import "../styles/globals.css"
import type { AppProps } from "next/app"
import { PortasProvider } from "../context/PortasContext"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PortasProvider>
            <Component {...pageProps} />
        </PortasProvider>
    )
}

export default MyApp
