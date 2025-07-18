import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light">My App</span>
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-list"></i>
                  <p>Todos</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Page content */}
      <div className="content-wrapper p-3">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
