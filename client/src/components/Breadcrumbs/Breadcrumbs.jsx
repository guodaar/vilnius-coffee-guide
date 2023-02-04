import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { mainLayoutRoutes } from "../../routes/const";
import { latte } from "../../const/styles";

function Breadcrumbs() {
  const {routes} = mainLayoutRoutes;
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation()
  console.log(breadcrumbs)

  return (
  <Crumbs>
    {breadcrumbs.map(({ match, breadcrumb }) => (
    <Link 
      key={match.url} 
      to={match.url}
      className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        {breadcrumb} / 
      </Link>
    ))}
  </Crumbs>
  );
}

export default Breadcrumbs;

const Crumbs = styled.nav`
  color: ${latte};
`
