import * as React from 'react';
import VanillaExtractIcon from '../src/icons/vanilla-extract';
import * as styles from '../src/styles/index.css';
import '../src/styles/global.css';
import { ColorModeProvider, ColorModeToggle } from '../src/components/ColorModeToggle';
import { sprinkles } from '../src/styles/sprinkles.css';
import { PageProps, graphql } from 'gatsby';

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => (
    <ColorModeProvider>
        <div className={styles.wrapper}>
            <main className={styles.container}>
                <ColorModeToggle />
                <div className={styles.spacer} />
                <div className={styles.content}>
                    <VanillaExtractIcon />
                    <h1 className={styles.title}>Hello World 🎉</h1>
                    <p className={text}>{data.allMdx.nodes[0].frontmatter?.title}</p>
                    <div className={styles.spacer} />
                    <a className={styles.button} href="https://vanilla-extract.style/">
                        vanilla-extract Documentation
                    </a>
                </div>
            </main>
        </div>
    </ColorModeProvider>
);

export const query = graphql`
    query IndexPage {
        allMdx(filter: { frontmatter: { variant: { eq: "page" } } }) {
            nodes {
                frontmatter {
                    title
                    variant
                    slug
                }
            }
        }
    }
`;

const text = sprinkles({
    marginX: { desktop: 'none' },
    color: 'primary',
    fontSize: 'xs',
});

export default IndexPage;
