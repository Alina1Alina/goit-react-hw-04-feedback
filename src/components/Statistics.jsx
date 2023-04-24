import { StatisticsContainer } from "./FeedbackStyled";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


export const Statistics = ({ stats, total, positiveFeedback})=> {
    return (
      <div>
        <StatisticsContainer>
          {Object.entries(stats).map(([key, value]) => {
            return (
              <span key={nanoid()}>
                {key}: {value}
              </span>
            );
          })}
          <span>Total: {total}</span>
          <span>Positive feedback: {positiveFeedback}%</span>
        </StatisticsContainer>
      </div>
    );
  }


Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired
  ),
 
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
}



