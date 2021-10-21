import Page from '../../components/modules/Page';
import { lightTheme } from '../../utils/styles/themes';
import BlogOverview from '../../components/content/Blog';
import useTranslation from 'next-translate/useTranslation';
import { getAllPosts } from '../../api/wordpress';

export default function Blog({ posts }) {
  const { t } = useTranslation();
  return (
    <Page
      theme={lightTheme}
      meta={{ title: t('blog:metaTitle'), description: t('blog:metaDescription') }}
    >
      <BlogOverview posts={posts} />
    </Page>
  );
}

export async function getStaticProps() {
  const json = await getAllPosts();

  return {
    props: {
      posts: json.data.posts
    }
  };
}
