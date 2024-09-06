import React from 'react';
import Style from './catalogItem.module.css';
import { Link } from 'react-router-dom';

function CatalogItem({ products }) {
  return (
    <section className={Style.container}>
      <div className={Style.tools}>

        <div>
          <div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 4C2 2.89543 2.89543 2 4 2H8C9.10457 2 10 2.89543 10 4V8C10 9.10457 9.10457 10 8 10H4C2.89543 10 2 9.10457 2 8V4Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M14 4C14 2.89543 14.8954 2 16 2H20C21.1046 2 22 2.89543 22 4V8C22 9.10457 21.1046 10 20 10H16C14.8954 10 14 9.10457 14 8V4Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M2 16C2 14.8954 2.89543 14 4 14H8C9.10457 14 10 14.8954 10 16V20C10 21.1046 9.10457 22 8 22H4C2.89543 22 2 21.1046 2 20V16Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M14 16C14 14.8954 14.8954 14 16 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H16C14.8954 22 14 21.1046 14 20V16Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10 6H16M10 14H16M10 10H22M10 18H22M3 10H5C5.55228 10 6 9.55228 6 9V7C6 6.44772 5.55228 6 5 6H3C2.44772 6 2 6.44772 2 7V9C2 9.55228 2.44772 10 3 10ZM3 18H5C5.55228 18 6 17.5523 6 17V15C6 14.4477 5.55228 14 5 14H3C2.44772 14 2 14.4477 2 15V17C2 17.5523 2.44772 18 3 18Z" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
          </div>

          <p>Showing 1-{products.length} of {products.length} results</p>
        </div>

        <div className={Style.showByLattest}>
          <h5>Shot by latest  <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 14L17 10" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></span></h5>

          <div className={Style.filterIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18.8188 2H5.18117C3.442 2 2.40466 3.91555 3.36937 5.34564L9.09107 12.8274C9.56799 13.5344 9.82249 14.3651 9.82249 15.2148V20.9219C9.82249 21.8805 10.9952 22.3605 11.6811 21.6827L13.8586 19.5307C14.0628 19.329 14.1775 19.0553 14.1775 18.7699V15.2148C14.1775 14.3651 14.432 13.5344 14.9089 12.8274L20.6306 5.34564C21.5953 3.91555 20.558 2 18.8188 2Z" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>

      </div>
      <div className={Style.products}>
        {products.map(product => (
          <Link to={`/shop/${product.id}`} key={product.id} className={Style.product}>
            <div className={Style.productIMG}>
              <img src={product.img} alt="Product Image" />
              <div className={Style.icons}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_257_1676)">
                      <path d="M8.36076 2.72626C9.03133 1.31358 10.9688 1.31358 11.6394 2.72626L12.7983 5.16773C13.0646 5.72871 13.5793 6.11753 14.1748 6.20748L16.7662 6.59899C18.2656 6.82553 18.8644 8.74137 17.7794 9.84098L15.9042 11.7414C15.4733 12.1781 15.2767 12.8072 15.3784 13.4238L15.8211 16.1072C16.0772 17.6599 14.5098 18.8439 13.1686 18.1109L10.8508 16.8439C10.3182 16.5528 9.68196 16.5528 9.14939 16.8439L6.83155 18.1109C5.49041 18.8439 3.92293 17.6599 4.17907 16.1072L4.62174 13.4238C4.72345 12.8072 4.52684 12.1781 4.09598 11.7414L2.22081 9.84099C1.1358 8.74137 1.73452 6.82553 3.23397 6.59899L5.82539 6.20748C6.42082 6.11753 6.93555 5.72871 7.20184 5.16773L8.36076 2.72626Z" stroke="#040D08" stroke-width="1.5" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_257_1676">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16675 7.5L6.66675 5M6.66675 5L9.16675 7.5M6.66675 5V15" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.8333 12.5L13.3333 15M13.3333 15L10.8333 12.5M13.3333 15L13.3333 5" stroke="#040D08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.6087 8.211C18.575 9.22772 18.575 10.7724 17.6087 11.7892C15.9788 13.504 13.1797 15.8334 10.0001 15.8334C6.82049 15.8334 4.02133 13.504 2.3915 11.7892C1.42516 10.7724 1.42516 9.22772 2.3915 8.211C4.02132 6.49619 6.82049 4.16675 10.0001 4.16675C13.1797 4.16675 15.9788 6.49619 17.6087 8.211Z" stroke="#040D08" stroke-width="1.5" />
                    <path d="M12.5001 10.0001C12.5001 11.3808 11.3808 12.5001 10.0001 12.5001C8.61937 12.5001 7.50008 11.3808 7.50008 10.0001C7.50008 8.61937 8.61937 7.50008 10.0001 7.50008C11.3808 7.50008 12.5001 8.61937 12.5001 10.0001Z" stroke="#040D08" stroke-width="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <p className={Style.productName}>{product.name}</p>
            <p>
              <span>{product.discountPrice ? `$${product.discountPrice}` : null}</span>
              <span className={`${product.discountPrice ? Style.lineThrough : ''}`}>{`$${product.price}`}</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CatalogItem;
