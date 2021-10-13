import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link'


const BlogOverview = ({posts}) => {
  const { t } = useTranslation();
  return (
    <div>

      <h1>{t('blog:metaTitle')}</h1>
      <ul>
        {posts.nodes.map((post) => <li><Link href={'blog/'+post.slug}>{post.title}</Link></li>)}
      </ul>


    </div>
  );
};

export default BlogOverview;
