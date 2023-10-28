import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import styles from './not-found-page.module.css';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className={`page ${styles.notFoundPage}`}>
      <Helmet>
        <title>{'6 cities - Not Found'}</title>
      </Helmet>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.text}>
        Return to the{' '}
        <Link to={AppRoute.Root} className={styles.link}>
          main page
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
