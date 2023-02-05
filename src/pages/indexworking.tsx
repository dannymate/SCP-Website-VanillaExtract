import * as React from 'react';
import VanillaExtractIcon from '../icons/vanilla-extract';
import * as styles from '../styles/index.css';
import '../styles/global.css';
import { ColorModeProvider, ColorModeToggle } from '../components/ColorModeToggle';
import { sprinkles } from '../styles/sprinkles.css';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = ({ data }: PageProps) => {
    const datas = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return <Layout children={datas.site.siteMetadata.title}></Layout>;
};

// export const query = graphql`
//     query IndexPage {
//         allMdx(filter: { frontmatter: { variant: { eq: "page" } } }) {
//             nodes {
//                 frontmatter {
//                     title
//                     variant
//                     slug
//                 }
//             }
//         }
//     }
// `;

const text = sprinkles({
    marginX: { desktop: 'none' },
    color: 'primary',
    fontSize: 'xs',
});

export default IndexPage;
