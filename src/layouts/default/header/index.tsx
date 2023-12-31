import Link from 'next/link';
import { RoutesList } from '@/RoutesList';
import { HeaderSearchComponent } from '@/layouts/default/header/search';
import { isActiveLink } from '@/utils/helpers';
import { useRouter } from 'next/router';
import styles from '@/layouts/default/header/header.module.scss';

export const Header = () => {
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
                <nav
                    className={`${styles.navbar} navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5 justify-content-center`}
                >
                    <Link href={RoutesList.home} className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-uppercase text-primary">
                            Arti<span className="text-white font-weight-normal">cles</span>
                        </h1>
                    </Link>
                    <div
                        className={`collapse navbar-collapse justify-content-between px-0 px-lg-3 ms-3 show ${styles.navbarCollapse}`}
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav me-auto py-0">
                            <Link
                                className={`nav-item ${styles.navLink} ${
                                    isActiveLink(router, RoutesList.home) && styles.navLinkActive
                                }`}
                                href={RoutesList.home}
                            >
                                Home
                            </Link>
                            <Link
                                className={`nav-item ${styles.navLink} ${
                                    isActiveLink(router, RoutesList.articles) && styles.navLinkActive
                                }`}
                                href={RoutesList.articles}
                            >
                                Articles
                            </Link>
                        </div>
                        <HeaderSearchComponent />
                    </div>
                </nav>
            </div>
        </header>
    );
};
