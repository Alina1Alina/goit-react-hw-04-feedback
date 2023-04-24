
import { ButtonsContainer, Button } from './FeedbackStyled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback })=> {
  
const keys = Object.keys(options);
    return (
      <ButtonsContainer>
        {keys.map(key => (
          <Button
            key={nanoid()}
            name={ key}
            value={key}
            onClick={onLeaveFeedback}
            type="button"
          >
            {key}
          </Button>
        ))}
      </ButtonsContainer>
    );
  }


FeedbackOptions.propTypes = {
onLeaveFeedback: PropTypes.func.isRequired,
options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
}

