import React, { useState } from 'react';

import Statistics from '../statistics/Statistics';
import FeedbackOptions from '../feedback/FeedbackOptions'
import Section from '../section/Section'
import Notification from '../notification/Notification'

import styles from '../feedback.module.css';

const feedbackOptions = ['good', 'neutral', 'bad'];

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const { good, neutral, bad } = state;

  const handleLeaveFeedback = ({ target: { name } }) => setState({
    ...state,
    [name]: state[name] + 1,
  });

  const total = good + neutral + bad;  
  const percent = Math.round(good / total * 100);
  
  return (
    <div className={styles.feedback_block}>
      <h2 className="lessonHeader">Your feedback</h2>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        { total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        ) : (
          <Notification message="No feedback given"/>
        )}
      </Section>
    </div>
  );
}
    
export default Feedback;