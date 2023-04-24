import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Container } from './FeedbackStyled';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = { good, neutral, bad };

  const handleIncrement = e => {
    switch (e.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
    // const currentBtnValue = e.currentTarget.value;

    // this.setState(prevState => ({
    //   ...prevState,
    //   [currentBtnValue]: prevState[currentBtnValue] + 1,
    // }));
  };

   const countTotalFeedback = () => {
    return good + bad + neutral;
    // const arrayValues = Object.values(this.state);
    // return arrayValues.reduce((acc, value) => (acc += value));
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
    // return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        
        <FeedbackOptions
          onLeaveFeedback={handleIncrement}
          options={options}
        />
      </Section>
      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            stats={options}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Container>
  );
};
