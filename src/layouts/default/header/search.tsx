import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { RoutesList } from '@/RoutesList';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UseIsApplyFilter } from '@/utils/useIsApplyFilter';
import { ArticleFilterNames } from '@/types/articleStore.types';

interface valuesFormik {
    query: string;
}

export const HeaderSearchComponent = () => {
    const router = useRouter();
    const isApplyFilter = UseIsApplyFilter(Object.keys(ArticleFilterNames));

    const initialValues: valuesFormik = {
        query: router.query?.q ?? ''
    };

    const onSubmit = (data: valuesFormik) => {
        router.push(
            {
                pathname: router.pathname !== RoutesList.articles ? RoutesList.articles : router.pathname,
                query: { ...router.query, page: 1, q: data.query }
            }
        )
    };

    const onClear = () => {
        router.push(
            {
                pathname: router.pathname,
            }
        )
    }

    return (
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

                        {isApplyFilter && (
                            <div className='input-group-append ms-2'>
                                <button
                                    type={'button'}
                                    onClick={onClear}
                                    className='input-group-text bg-primary text-dark border-0 px-3 h-100'>
                                    <FontAwesomeIcon icon={faClose} />
                                </button>
                            </div>
                        )}
                    </Form>
                );
            }}
        </Formik>
    )
}
