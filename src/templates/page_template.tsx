import * as React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { MDXProvider } from '@mdx-js/react';
import { PageProps, graphql } from 'gatsby';
import ProjectGrid from '../components/ProjectGrid';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const shortcodes = { Banner, ProjectGrid }; // Provide common components here

export default function PageTemplate({ data, children }: PageProps) {
    return (
        <Layout>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </Layout>
    );
}
