import Head from "next/head"
import Presente from "../components/Presente"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bruno Hubner - Porta Premiada</title>
                <meta name="description" content="Porta Premiada" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Presente></Presente>
        </div>
    )
}
