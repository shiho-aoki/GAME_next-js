import Head from "next/head";

import Layout from '../component/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
    return(
        <Layout>
            <Head><title>Second post</title></Head>
            <h1>Second Post</h1>
        </Layout>
    )
}

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps( {params} ){}