import React from 'react';
import styles from './page404.module.css';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
      <div className={styles.container}>
        <div className="w-full lg:w-1/2 mx-8">
          <div className={styles.title}>404</div>
          <p className={styles.message}>
            Sorry we couldn't find the page you're looking for
          </p>
          <Link to={'./'}
            href="#"
            className={styles.button}
          >
            back to homepage
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            alt="Page not found"
            className={styles.image}
          />
        </div>
      </div>
  );
};

export default Page404;
