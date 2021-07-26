import React from "react";
import { ShoppingCart } from "react-feather";

import templateConfig from "../../../templateConfig";

const Footer = props => (
   <footer>
      {templateConfig.buyNow ? (
         <a
            href="https://pixinvent.com/demo/apex-react-redux-bootstrap-admin-dashboard-template/landing-page/"
            className="btn btn-floating btn-buynow gradient-pomegranate btn-round shadow-z-3 px-3 white"
            target="_blank"
            rel="noopener noreferrer"
         >
            <ShoppingCart size={16} />
            {"  "}Buy Now
         </a>
      ) : (
         ""
      )}
      <div className="container-fluid">
      <p className="text-center">
                    © 2020{" "}
                    SubTotal powered by <i className="ft-heart font-small-3" />
                    <a
                      href="http://nuclius.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      Nuclius
                    </a>
                  </p>
      </div>
   </footer>
);

export default Footer;
