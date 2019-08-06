import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { NavLink as Link } from 'react-router-dom';
import './MainView.scss';

const MainView = ({ route }) => (
  <div className="main-view">
    <div className="btn-group">
      <Link to="/home" className="btn" activeClassName="active">
        To Home
      </Link>
      <Link to="/async" className="btn" activeClassName="active">
        To Async
      </Link>
    </div>
    <div className="view">
      <Suspense fallback={<div>Loading</div>}>{renderRoutes(route.routes)}</Suspense>
    </div>
  </div>
);

MainView.prototype.propTypes = {
  route: PropTypes.object,
};

export default MainView;
