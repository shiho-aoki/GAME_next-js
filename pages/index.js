import Head from 'next/head';
import Link from 'next/link';

import Layoyt, {siteTitle} from './component/layout';
import utilStyles from './styles/utils.module.css';

import { getSortedPostData } from '../lib/posts';

export async function getStaticProps(){
  const allPostsData = getSortedPostData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layoyt home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map( ({ id, data, title })=>(
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {data}
            </li>
          ))}
        </ul>
      </section>
      <Link href="/posts/first-post">
        <a>First Page</a>
      </Link>
    </Layoyt>
  )
}