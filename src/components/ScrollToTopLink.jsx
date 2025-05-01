import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollUtils';

function ScrollToTopLink({ to, children, className, ...props }) {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <Link to={to} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}

export default ScrollToTopLink; 