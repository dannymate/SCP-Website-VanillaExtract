import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { ReactNode } from 'react';
import { sprinkles } from '../styles/sprinkles.css';

const Banner: React.FC = () => {
    return <StaticImage className={style} src="../images/SCP_Banner.png" alt="" width={860} />;
};

const style = sprinkles({
    display: 'flex',
    maxWidth: '860px',
    margin: 'auto',
    marginBottom: '4',
});

export default Banner;
