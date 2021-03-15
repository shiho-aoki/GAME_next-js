import Head from "next/head";

import Layout from '../component/layout';

export default function FirstPost() {
    return(
        <Layout>
            <Head><title>First post</title></Head>
            <h1>First Post</h1>
        </Layout>
    )
}