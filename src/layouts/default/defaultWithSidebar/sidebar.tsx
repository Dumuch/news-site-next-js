import { ImageComponent } from '@/components/UI/image';

export const Sidebar = () => {
    return (
        <>
            <div className="mb-3">
                <div className="section-title mb-0">
                    <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                </div>
                <div className="bg-white text-center border border-top-0 p-3">
                    <a href="" title={'Advertisement link'}>
                        <ImageComponent
                            classNameImage={'img-fluid'}
                            src={'/assets/images/article-3.jpg'}
                            width={300}
                            alt={'Advertisement'}
                        />
                    </a>
                </div>
            </div>
        </>
    );
};
