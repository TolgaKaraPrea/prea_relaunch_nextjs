import { getAllPosts, getPostBySlug } from '../../api/wordpress';
import Image from 'next/image'
import Page from '../../components/modules/Page';
import { lightTheme } from '../../utils/styles/themes';

export default function Post({ data }) {
  const post = data.post
  return (
    <Page theme={lightTheme} meta={{title:post.title, description:post.slug}}>
      <h1>{post.title}</h1>
      {post.featuredImage &&
        <Image width={"1500"} height={"1500"} src={post.featuredImage.node.sourceUrl}/>
      }
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </Page>
  );
}

export async function getStaticProps(context) {
  const json = await getPostBySlug(context);

  return {
    props: {
      data: json.data
    }
  };
}

export async function getStaticPaths() {
  const json = await getAllPosts();
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }));

  return { paths, fallback: false };
}
