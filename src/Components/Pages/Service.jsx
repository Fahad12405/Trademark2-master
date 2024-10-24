import React from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
  return (
    <>
     <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center pt-5 mb-4"> {/* Added padding and centered text */}
      <h2 className="section-title bg-white text-primary pe-3">Our Services</h2>
    </div>
    <div className="row g-4">
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item text-center pt-3">
          <Link to="/Trademark-registration">
            <div className="p-4">
              <i className="fa fa-3x fa-registered text-primary mb-4" />
              <h5 className="mb-3">Trademark Registration</h5>
              <p>Secure your brand by registering your trademark with the USPTO for maximum protection.</p>
            </div>
          </Link>
        </div>
      </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <Link to="/Comprehensive-Trademark-Research">
                  <div className="p-4">
                    <i className="fa fa-3x fa-search text-primary mb-4" />
                    <h5 className="mb-3">Comprehensive Trademark Research</h5>
                    <p>Conduct thorough research to identify existing trademarks and avoid conflicts.</p>
                  </div>
                </Link>
              </div>
            </div>
           
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <Link to="/Statementofuse">
                  <div className="p-4">
                    <i className="fa fa-3x fa-file-alt text-primary mb-4" />
                    <h5 className="mb-3">Statement of Use</h5>
                    <p>File your Statement of Use to show the USPTO that you're using your trademark in commerce.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
              <div className="service-item text-center pt-3">
                <Link to="/Trademarkmonitoring">
                  <div className="p-4">
                    <i className="fa fa-3x fa-eye text-primary mb-4" />
                    <h5 className="mb-3">Trademark Monitoring</h5>
                    <p>Stay informed with our monitoring services to protect your trademark from infringement.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1.1s">
              <div className="service-item text-center pt-3">
                <Link to="/OfficeActionResponse">
                  <div className="p-4">
                    <i className="fa fa-3x fa-envelope-open-text text-primary mb-4" />
                    <h5 className="mb-3">Office Action Response</h5>
                    <p>Receive expert assistance in responding to USPTO office actions for trademark applications.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1.3s">
              <div className="service-item text-center pt-3">
                <Link to="/FillingRenewal">
                  <div className="p-4">
                    <i className="fa fa-3x fa-redo text-primary mb-4" />
                    <h5 className="mb-3">Filing a Renewal</h5>
                    <p>Keep your trademark alive by filing renewal applications before expiration.</p>
                  </div>
                </Link>
              </div>
            </div>
           
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1.7s">
              <div className="service-item text-center pt-3">
                <Link to="/RevivalAbandonment">
                  <div className="p-4">
                    <i className="fa fa-3x fa-undo text-primary mb-4" />
                    <h5 className="mb-3">Revival for Abandonment</h5>
                    <p>Revive your abandoned trademark application and reclaim your brand's rights.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="1.9s">
              <div className="service-item text-center pt-3">
                <Link to="/LogoDesignService">
                  <div className="p-4">
                    <i className="fa fa-3x fa-paint-brush text-primary mb-4" />
                    <h5 className="mb-3">Logo Design Service</h5>
                    <p>Create a unique logo that represents your brand and enhances your trademark.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
