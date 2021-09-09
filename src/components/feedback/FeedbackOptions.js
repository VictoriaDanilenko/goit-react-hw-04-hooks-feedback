import React from 'react';

import styles from '../feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={styles.btn_block}>
        {options.map(option => (
            <button key={option} type='button' onClick={onLeaveFeedback} name={option}>
                {option}
            </button>
        ))}
    </div>
)


export default FeedbackOptions;