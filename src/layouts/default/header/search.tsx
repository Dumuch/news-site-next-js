import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { RoutesList } from '@/RoutesList';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UseIsApplyFilter } from '@/utils/useIsApplyFilter';
import { ArticleFilterNames } from '@/types/articleStore.types';
import { UseSearchActions } from '@/utils/useSearchActions';
import styles from '@/layouts/default/header/header.module.scss';

interface valuesFormik {
    query: string;
}

export const HeaderSearchComponent = () => {
    const router = useRouter();
    const isApplyFilter = UseIsApplyFilter(Object.keys(ArticleFilterNames));
    const { clear, submit } = UseSearchActions(RoutesList.articles);

    const initialValues: valuesFormik = {
        query: (router.query?.q as string) ?? '',
    };

    const onSubmit = (data: valuesFormik) => {
        submit({ q: data.query });
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true}>
            {(props) => {
                return (
                    <Form className={`input-group ml-auto d-flex mt-2 mt-lg-0 ${styles.headerForm}`}>
                        <input
                            name="query"
                            type="text"
                            className="form-control border-0"
                            onChange={props.handleChange}
                            placeholder="Keyword"
                            value={props.values.query}
                        />
                        <div className="input-group-append">
                            <button className="input-group-text bg-primary text-dark border-0 px-3 h-100">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>

                        {isApplyFilter && (
                            <div className="input-group-append ms-2">
                                <button
                                    type={'button'}
                                    onClick={clear}
                                    className="input-group-text bg-primary text-dark border-0 px-3 h-100"
                                >
                                    <FontAwesomeIcon icon={faClose} />
                                </button>
                            </div>
                        )}
                    </Form>
                );
            }}
        </Formik>
    );
};
