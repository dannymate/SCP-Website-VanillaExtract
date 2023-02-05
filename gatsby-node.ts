import type { GatsbyNode } from 'gatsby';

const path = require('path');
const pageTemplate = path.resolve(`./src/templates/page_template.tsx`);

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql<Queries.GetMdxPagesQuery>(`
        query GetMdxPages {
            allMdx(filter: { frontmatter: { variant: { eq: "page" } } }) {
                nodes {
                    id
                    frontmatter {
                        slug
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors);
    }

    // Create blog post pages.
    const pages = result.data?.allMdx.nodes;

    // you'll call `createPage` for each result
    pages?.forEach((node) => {
        if (node.frontmatter == null || node.frontmatter.slug == null) {
            reporter.panic(node.internal.contentFilePath + ' is missing frontmatter or slug!');
            return;
        }

        createPage({
            // As mentioned above you could also query something else like frontmatter.title above and use a helper function
            // like slugify to create a slug
            path: node.frontmatter.slug,
            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
        });
    });
};
