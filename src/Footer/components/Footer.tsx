import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer footer-static footer-light">
                <p className="clearfix mb-0">
                    <span className="float-md-start d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2024
                        <a className="ms-25" href="#" target="_blank" rel="noopener noreferrer">Switchs</a>
                        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
                    </span>
                    <span className="float-md-end d-none d-md-block">Hand-crafted & Made with
                        <i data-feather="heart"></i>
                    </span>
                </p>
            </footer>
            <button className="btn btn-primary btn-icon scroll-top" type="button">
                <i data-feather="arrow-up"></i>
            </button>
        </>
    );
};

export default Footer;
