import Link from 'next/link';
import { RoutesList } from '@/RoutesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const isActiveLink = (router, currentRoute) => {
    return router.route === currentRoute ? 'active' : '';
};
const Header = () => {
    const router = useRouter();

    return (
        <header>
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center bg-white py-3 px-lg-5">
                    <div className="col-lg-4">
                        <Link href={RoutesList.home} className="navbar-brand p-0 d-none d-lg-block">
                            <h1 className="m-0 display-4 text-uppercase text-primary">
                                Arti<span className="text-secondary font-weight-normal">cles</span>
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                    <Link href={RoutesList.home} className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-uppercase text-primary">
                            Arti<span className="text-white font-weight-normal">cles</span>
                        </h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav me-auto py-0">
                            <Link
                                className={`nav-item nav-link ${isActiveLink(router, RoutesList.home)}`}
                                href={RoutesList.home}
                            >
                                Home
                            </Link>
                            <Link
                                className={`nav-item nav-link ${isActiveLink(router, RoutesList.articles)}`}
                                href={RoutesList.articles}
                            >
                                Articles
                            </Link>
                        </div>
                        <div className="input-group ml-auto d-none d-lg-flex w-25">
                            <input type="text" className="form-control border-0" placeholder="Keyword" />
                            <div className="input-group-append">
                                <button className="input-group-text bg-primary text-dark border-0 px-3 h-100">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
