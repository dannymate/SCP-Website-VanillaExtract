import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { sprinkles, vars } from '../styles/sprinkles.css';
import BackgroundImage from 'gatsby-background-image';
import { BgImage, convertToBgImage } from 'gbimage-bridge';

type Props = {
    /** Information of the project to display */
    project: ProjectType;
    /** The position on a grid to display this project block */
    index: number;
};

export type ProjectType = {
    /** Gatsby Assigned ID */
    id: string;
    /** Name of the project */
    title: string;
    /** URL to the project homepage */
    link_to_project: string;
    /** The background_image of the project */
    background_image: IGatsbyImageData;
    /** Whether this Project is featured */
    featured: boolean;
};

export class ProjectTest implements ProjectType {
    id: string;
    title: string;
    link_to_project: string;
    background_image: IGatsbyImageData;
    featured: boolean;

    constructor(
        id: string,
        title: string,
        link_to_project: string,
        background_image: IGatsbyImageData,
        featured: boolean,
    ) {
        this.id = id;
        this.title = title;
        this.link_to_project = link_to_project;
        this.background_image = background_image;
        this.featured = featured;
    }
}

const Project: React.FC<Props> = ({ project, index }) => {
    const blockStyle = sprinkles({
        marginTop: index === 0 ? { default: 'none' } : { default: '8', desktop: index > 1 ? '8' : 'none' },
        paddingLeft: { desktop: index % 2 !== 0 ? '12' : 'none' },
        paddingRight: { desktop: index % 2 === 0 ? '12' : 'none' },
        paddingX: { mobile: '24', desktop: 'none' },
        minWidth: { desktop: '50%' },
        width: { default: '100%', desktop: 'auto' },
        maxWidth: { desktop: 'project_thumbnail' },
    });

    return (
        <div className={blockStyle} key={project.id}>
            <BgImage image={getImage(project.background_image)}>
                <a className={linkStyle} href={project.link_to_project}>
                    <div className={div1}>
                        <div className={div2} />
                        {/* Content for the featured project */}
                        <div className={div3}>
                            <div className={sprinkles({ marginTop: 'auto' })}>
                                <h2 className={sprinkles({ paddingBottom: '2', paddingLeft: '4' })}>{project.title}</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </BgImage>
        </div>
    );
};

const linkStyle = sprinkles({
    color: 'primary',
    textDecorationLine: { hover: 'underline' },
});

const div1 = sprinkles({
    height: '64',
    width: '100%',
    display: 'flex',
});

const div2 = sprinkles({
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'black',
    opacity: 0.5,
});

const div3 = sprinkles({
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
});

export default Project;
