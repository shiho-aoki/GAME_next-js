import Head from 'next/head';
import Link from 'next/link';

import Layoyt, {siteTitle} from './component/layout';
import utilStyles from './styles/utils.module.css';

export default function Home() {
  return (
    <Layoyt home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[My Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layoyt>
  )
}