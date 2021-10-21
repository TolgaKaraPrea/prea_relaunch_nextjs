export async function getPostBySlug(context) {
  const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query SinglePost($id:ID!, $idType: PostIdType!) {
            post(id:$id, idType: $idType) {
              title
              slug
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        `,
      variables: {
        id: context.params.slug,
        idType: 'SLUG'
      }
    })
  });
  return await res.json();
}

export async function getAllPosts() {
  const res = await fetch(process.env.WORDPRESS_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query AllPosts {
            posts {
             nodes {
              slug
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
                }
            }
          }
        `
    })
  });

  return await res.json();
}
