import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};

export default BackLink;
