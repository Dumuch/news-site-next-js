import { FC, memo, useEffect, useRef, useState } from 'react';
import { PaginationProps } from '@/components/UI/pagination/pagination.types';
import { Paginator, PaginatorTemplateOptions } from 'primereact/paginator';
import 'primereact/paginator/paginator.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './pagination.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';

export const PaginationComponent: FC<PaginationProps> = memo(({ rowsPerPage, totalRecords }) => {
    const router = useRouter();

    const [first, setFirst] = useState((router.query?.page ?? 1 - 1) * rowsPerPage);
    const currentPageRef = useRef(Number(router.query.page ?? 1));

    useEffect(() => {
        currentPageRef.current = Number(router.query?.page ?? 1);
        setFirst((currentPageRef.current - 1) * rowsPerPage)
    }, [router.query.page]);


    const template: PaginatorTemplateOptions = {
        layout: 'PrevPageLink PageLinks NextPageLink',
        PrevPageLink: (options) => {
            return (
                <div className={classNames({ [styles.disabled]: options.disabled })}>
                    {options.disabled ? (
                        <a>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </a>
                    ) : (
                        <Link
                            href={{
                                pathname: router.pathname,
                                query: { ...router.query, page: currentPageRef.current - 1 }
                            }}
                            className={styles.link}
                        ><span>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                        </Link>
                    )}
                </div>
            );
        },
        NextPageLink: (options) => {
            return (
                <div className={classNames({ [styles.disabled]: options.disabled })}>
                    {options.disabled ? (
                        <a>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    ) : (
                        <Link
                            href={{
                                pathname: router.pathname,
                                query: { ...router.query, page: currentPageRef.current + 1 }
                            }}
                            className={classNames(styles.link, { disabled: options.disabled })}
                        >
                            <span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </Link>
                    )}
                </div>
            );
        },
        PageLinks: (options) => {
            const pre = options.view.startPage === options.page && options.view.startPage !== 0;
            const after = options.view.endPage === options.page && options.page + 1 !== options.totalPages;
            if (pre || after) {
                const className = classNames(options.className, { 'p-disabled': true });
                return (
                    <>
                        {pre && (
                            <div className={options.className}>
                                <Link
                                    href={{
                                        pathname: router.pathname,
                                        query: { ...router.query, page: options.page + 1 }
                                    }}
                                    className={styles.link}
                                >
                                    {options.page + 1}
                                </Link>
                            </div>
                        )}
                        <span className={className} style={{ userSelect: 'none' }}>
                            ...
                        </span>

                        {after && (
                            <div className={options.className}>
                                <Link
                                    href={{
                                        pathname: router.pathname,
                                        query: { ...router.query, page: options.totalPages }
                                    }}
                                    className={styles.link}
                                >
                                    {options.totalPages}
                                </Link>
                            </div>
                        )}
                    </>
                );
            }
            return (
                <div
                    className={options.className}
                >
                    <Link
                        href={{
                            pathname: router.pathname,
                            query: { ...router.query, page: options.page + 1 }
                        }}
                        className={classNames(styles.link, { [styles.active]: options.className.includes('p-highlight') })}
                    >
                        {options.page + 1}
                    </Link>
                </div>
            );
        }
    };

    return (
        <nav className='pagination-wrap mb-big'>
            <Paginator
                template={template}
                rows={rowsPerPage}
                first={first}
                totalRecords={totalRecords}
                className={'pagination'}
            ></Paginator>
        </nav>
    );
});
