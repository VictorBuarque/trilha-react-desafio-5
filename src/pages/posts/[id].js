import React from 'react';
import { getGlobalData } from '../../utils/global-data';
import { getPostById } from '../../utils/mdx-utils';

import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

const components = {
  p: CustomLink,
  Head,
};

export default function PostPage({ post, globalData }) {
  return (
    <Layout>
      {post ? (
        <>
          <SEO
            title={`${post.title} - ${globalData.name}`}
            description={post.description}
          />
          <Header name={globalData.name} />
          <article className="px-6 md:px-0">
            <header>
              <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
                {post.title}
              </h1>
              {post.description && (
                <p className="text-xl mb-4">{post.description}</p>
              )}
            </header>
            <main>
              <article className="prose dark:prose-dark">
                {post.body}
              </article>
            </main>
          </article>
          <Footer copyrightText={globalData.footerText} />
          <GradientBackground
            variant="large"
            className="absolute -top-32 opacity-30 dark:opacity-50"
          />
          <GradientBackground
            variant="small"
            className="absolute bottom-0 opacity-20 dark:opacity-10"
          />
        </>
      ) : (
        <p className='text-black dark:text-white text-lg'>404 - Post not Found</p>
      )}
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  try {
    const globalData = getGlobalData();
    const postId = params?.id;
    const post = postId ? await getPostById(postId) : null; 

    return {
      props: {
        globalData,
        post,
      },
    };
  } catch (error) {
    console.error('Erro ao obter o post:', error);
    return {
      props: {
        globalData: {},
        post: null,
      },
    };
  }
};

