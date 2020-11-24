import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				{postData.title}
				<br />
				{postData.id}
				<br />
				<Date dateString={postData.date} />
				<br />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

// getStaticPaths() - defines a list of paths rendered to HTML at build time
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	};
}
