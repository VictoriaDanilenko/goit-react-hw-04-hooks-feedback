import React from 'react';

import styles from '../feedback.module.css';

const Notification = ({ message }) => (
    <p className={styles.notificationMsg}>
        {message}
    </p>
)


export default Notification;