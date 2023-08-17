import Link from 'next/link';
import { RoutesList } from '@/RoutesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';

const isActiveLink = (router, currentRoute) => {
    return router.route === currentRoute ? 'active' : '';
};


interface valuesFormik {
    query: string;
}

const Header = () => {
    const router = useRouter();

    const onSubmit = (data: valuesFormik) => {
        router.push(
            {
                pathname: router.pathname !== RoutesList.articles ? RoutesList.articles : router.pathname,
                query: { ...router.query, page: 1, q: data.query }
            }
        )
        // router.query['q'] = data.query
    };

    const initialValues: valuesFormik = {
        query: router.query?.q ?? ''
    };

    return (
        <header>
            <div className='container-fluid d-none d-lg-block'>
                <div className='row align-items-center bg-white py-3 px-lg-5'>
                    <div className='col-lg-4'>
                        <Link href={RoutesList.home} className='navbar-brand p-0 d-none d-lg-block'>
                            <h1 className='m-0 display-4 text-uppercase text-primary'>
                                Arti<span className='text-secondary font-weight-normal'>cles</span>
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container-fluid p-0'>
                <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5'>
                    <Link href={RoutesList.home} className='navbar-brand d-block d-lg-none'>
                        <h1 className='m-0 display-4 text-uppercase text-primary'>
                            Arti<span className='text-white font-weight-normal'>cles</span>
                        </h1>
                    </Link>
                    <button
                        type='button'
                        className='navbar-toggler'
                        data-toggle='collapse'
                        data-target='#navbarCollapse'
                    >
                        <span className='navbar-toggle-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-between px-0 px-lg-3' id='navbarCollapse'>
                        <div className='navbar-nav me-auto py-0'>
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
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            enableReinitialize={true}
                        >
                            {(props) => {
                                return (
                                    <Form className='input-group ml-auto d-none d-lg-flex w-25'
                                    >
                                        <input name='query' type='text' className='form-control border-0'
                                               onChange={props.handleChange}
                                               placeholder='Keyword' value={props.values.query}
                                        />
                                        <div className='input-group-append'>
                                            <button
                                                className='input-group-text bg-primary text-dark border-0 px-3 h-100'>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
