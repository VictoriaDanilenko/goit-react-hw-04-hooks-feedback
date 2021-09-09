import React, { Component } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Statistics from './statistics/Statistics';
import FeedbackWrapper from './FeedbackStyled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const key = e.target.name;
    this.setState(prev => ({ [key]: prev[key] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    return (
      <FeedbackWrapper>
        <h1 className="feedback_title">Your feedback</h1>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onHandleClick={this.onHandleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              props={this.state}
              total={this.countTotalFeedback}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </FeedbackWrapper>
    );
  }
}

export default Feedback;
