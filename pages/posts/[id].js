import Head from "next/head";

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return(
        <Layout>
            <Head><title>Second post</title></Head>
            <h1>Second Post</h1>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.data}
        </Layout>
    )
};

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
};

export async function getStaticProps( {params} ){
    const postData = getPostData(params.id);
    return {
        props:{
            postData
        }
    }
};