import { Link, useLocation } from 'react-router-dom';

// Links to a section of the home page: a plain anchor on the home page,
// a router link (back to "/#id") everywhere else.
export default function AnchorLink({ id, children, ...props }) {
  const { pathname } = useLocation();
  return pathname === '/'
    ? <a href={`#${id}`} {...props}>{children}</a>
    : <Link to={`/#${id}`} {...props}>{children}</Link>;
}
