import React from 'react';
import './ShopRange.css';

const ShopRange = () => {
  return (
    
    <div className="container custom-container parent-class my-5">
      {/* Title */}
      <h1 className="text-center Range-heading mb-4">Shop from our Yummy Range</h1>

      {/* Cards Section */}
      <div className="row justify-content-center g-4 custom-section mt-4">
        {/* Cup Cakes Card */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="custum-card border-0 shadow-sm">
            <img
              src="https://t3.ftcdn.net/jpg/08/55/79/62/240_F_855796219_RvpY30RIzeAl6eZZx2hPjk36kVM8WCko.jpg" /* Replace with Cupcake Image URL */
              className="card-img-top"
              alt="Cup Cakes"
            />
            <div className="card-body-bottom text-center">
              <h6 className="">Cup Cakes &rarr;</h6>
            </div>
          </div>
        </div>

        {/* Cakes Card */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="custum-card border-0 shadow-sm">
            <img
              src="https://t4.ftcdn.net/jpg/08/67/62/21/240_F_867622112_PaKYCzl7Jy3Qkrnm5FxUGCb3Tq805uHd.jpg" /* Replace with Cake Image URL */
              className="card-img-top"
              alt="Cakes"
            />
            <div className="card-body-bottom text-center">
              <h6 className="">Cakes &rarr;</h6>
            </div>
          </div>
        </div>

        {/* Mini Cakes Card */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="custum-card border-0 shadow-sm">
            <img
              src="https://t4.ftcdn.net/jpg/10/84/64/07/240_F_1084640731_yGBqZugCpEKFdYZa8F8yAMXdwvCwAeMV.jpg" /* Replace with Mini Cake Image URL */
              className="card-img-top"
              alt="Mini Cakes"
            />
            <div className="card-body-bottom text-center">
              <h6 className="">Mini Cakes &rarr;</h6>
            </div>
          </div>
        </div>

        {/* Cat Cakes Card */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="custum-card border-0 shadow-sm">
            <img
              src="https://t4.ftcdn.net/jpg/08/41/54/67/240_F_841546711_KvjtqNkAWY1lwb25DEVj0X9uSp7chqzE.jpg" /* Replace with Cat Cake Image URL */
              className="card-img-top"
              alt="Cat Cakes"
            />
            <div className="card-body-bottom text-center">
              <h6 className="">Cat Cakes &rarr;</h6>
            </div>
          </div>
        </div>

        {/* Treats Card */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
          <div className="custum-card border-0 shadow-sm">
            <img
              src="https://t3.ftcdn.net/jpg/03/30/40/54/240_F_330405425_ObtcnIEQ47QVh2kc4aLvnoo6irzg6oML.jpg" /* Replace with Treats Image URL */
              className="card-img-top"
              alt="Treats"
            />
            <div className="card-body-bottom text-center">
              <h6 className="">Treats &rarr;</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopRange;
