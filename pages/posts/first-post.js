import Head from "next/head";
import Link from "next/link";

import Layout from '../component/layout';

export default function FirstPost() {
    return(
        <Layout>
            <Head><title>First post</title></Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}