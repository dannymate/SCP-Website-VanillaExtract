import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project, { ProjectTest, ProjectType } from './Project';
import { sprinkles } from '../styles/sprinkles.css';

type Props = {
    /** The name of the generated grid to display */
    title: string;
    /** The type of project to display in the grid */
    type: string;
    /** Whether to only show featured projects */
    onlyFeatured?: boolean;
    /** Not sure. Puts projects into a specific order */
    // order: something;
};

const ProjectGrid: React.FC<Props> = ({ title, type = 'ANY', onlyFeatured = false }) => {
    const projects = getProjects()
        .allMdx.nodes.filter((element) => {
            return onlyFeatured === false || (onlyFeatured === true && element.frontmatter?.featured === true);
        })
        .map((node) => {
            return new ProjectTest(
                node.id!,
                node.frontmatter!.title!,
                node.frontmatter!.link_to_project!,
                node.frontmatter!.background_image!.childImageSharp?.gatsbyImageData!,
                node.frontmatter!.featured!,
            );
        });

    return (
        <div className={sprinkles({ marginTop: '12', marginBottom: '8' })}>
            {title !== '' && <h1 className={headerStyle}>{title}</h1>}
            <div className={sprinkles({ paddingX: '2', marginBottom: '8' })}>
                <div
                    className={sprinkles({
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '1384px',
                        maxWidth: '100%',
                        marginX: 'auto',
                        flexWrap: 'wrap',
                    })}
                >
                    {projects.map((project, i) => (
                        <Project project={project} index={i} key={project.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const headerStyle = sprinkles({
    textAlign: 'center',
    marginBottom: '8',
});

const getProjects = () => {
    return useStaticQuery<Queries.MyQueryQuery>(graphql`
        query MyQuery {
            allMdx(filter: { frontmatter: { variant: { eq: "project" } } }) {
                nodes {
                    id
                    frontmatter {
                        title
                        link_to_project
                        background_image {
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                        featured
                    }
                }
            }
        }
    `);
};

export default ProjectGrid;
