import { Link, graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { sprinkles } from '../styles/sprinkles.css';

const Footer: React.FC = () => {
    const data = getFooterData();
    const navItems = data.mdx?.frontmatter?.nav_entries;
    const siteTitle = data.site?.siteMetadata?.title;

    return (
        <footer className={footerStyle}>
            <div className={wrapperStyle}>
                <p className={titleStyle}>
                    {new Date().getFullYear()} ©{siteTitle}
                </p>
                {navItems != null && navItems && navItems.length > 0 && (
                    <div className={navWrapper}>
                        <div className={navNestedWrapper}>
                            {navItems.map((footerItem, i) => {
                                if (footerItem == null || footerItem.slug == null) return;
                                return (
                                    <p>
                                        {/* key={footerItem.wordpress_id} */}
                                        {i > 0 && <span className={spacerStyle}>•</span>}
                                        <Link className={navLinkStyle} to={footerItem.slug}>
                                            {footerItem.label}
                                        </Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
};

const footerStyle = sprinkles({
    background: 'primary',
    display: 'flex',
    paddingX: '4',
    minHeight: '120px',
});

const wrapperStyle = sprinkles({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'secondary',
    marginY: 'auto',
    flexWrap: 'wrap-reverse',
});

const titleStyle = sprinkles({
    marginY: 'auto',
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: { default: '1', desktop: '0' },
});

const navWrapper = sprinkles({
    width: { default: 'auto', desktop: 'auto' },
    marginY: 'auto',
});

const navNestedWrapper = sprinkles({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
});

const spacerStyle = sprinkles({
    paddingX: '2',
});

const navLinkStyle = sprinkles({
    color: { default: 'secondary', hover: 'tertiary' },
});

const getFooterData = () => {
    return useStaticQuery<Queries.FooterQuery>(graphql`
        query Footer {
            mdx(frontmatter: { component: { eq: "footer" } }) {
                id
                frontmatter {
                    nav_entries {
                        label
                        slug
                    }
                }
            }
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
};

export default Footer;
