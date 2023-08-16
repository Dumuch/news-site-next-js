import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
                <div className="row py-4">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
                        <p className="font-weight-medium">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, New York, USA
                        </p>
                        <p className="font-weight-medium">
                            <FontAwesomeIcon icon={faPhoneAlt} /> +012 345 67890
                        </p>
                        <p className="font-weight-medium">
                            <FontAwesomeIcon icon={faEnvelope} /> info@example.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
