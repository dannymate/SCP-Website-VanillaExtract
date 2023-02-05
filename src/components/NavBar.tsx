import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { sprinkles } from '../styles/sprinkles.css';
import BurgerButton from './BurgerButton';

const NavBar: React.FC = () => {
    const icon = '../images/Logo-SCP.png';
    const navBarData: Queries.NavBarQuery = getNavBarData();
    const icon_url = navBarData.mdx?.frontmatter?.icon_url;
    const entries = navBarData.mdx?.frontmatter?.nav_entries!;

    return (
        <header className={headerStyle}>
            <div className={navbarWrapper}>
                <Link aria-label="Home" className={logoStyle} to={icon_url!}>
                    <StaticImage src={icon} alt="logo" width={90} height={90} />
                </Link>
                <BurgerButton>
                    <nav>
                        {entries.map((entry, i) => (
                            <Link
                                className={entryStyle}
                                to={entry?.slug!}
                                // key={navItem.wordpress_id}
                            >
                                {entry?.label}
                            </Link>
                        ))}
                    </nav>
                </BurgerButton>
            </div>
        </header>
    );
};

const headerStyle = sprinkles({
    background: 'primary',
    display: 'flex',
    marginBottom: '4',
});

const navbarWrapper = sprinkles({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 'auto',
    paddingX: { default: '4', desktop: 'none' },
    width: '1200px',
});

const logoStyle = sprinkles({
    display: 'flex',
    paddingY: '1',
});

const entryStyle = sprinkles({
    color: { default: 'secondary', hover: 'tertiary' },
    display: { default: 'block', desktop: 'inline-block' },
    fontFamily: 'nav',
    fontSize: '4xl',
    marginTop: { default: '4', desktop: 'none' },
    paddingLeft: { desktop: '8' },
});

const getNavBarData = () => {
    return useStaticQuery<Queries.NavBarQuery>(graphql`
        query NavBar {
            mdx(frontmatter: { component: { eq: "navbar" } }) {
                id
                frontmatter {
                    icon_url
                    nav_entries {
                        label
                        slug
                    }
                }
            }
        }
    `);
};

export default NavBar;
