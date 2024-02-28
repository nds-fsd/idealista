import React, { useState, useEffect } from 'react';
import styles from './MyAchievements.module.css';
import { getAchievements } from '../../../utils/apis/achievementApi'; // Import achievementAPI


const MyAchievements = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        getAchievements()
            .then((data) => setAchievements(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>My Achievements</h1>
            <ul>
                {achievements.map((achievement) => (
                    <li key={achievement.id}>
                        <h3>{achievement.title}</h3>
                        <p>{achievement.description}</p>
                        {achievement.completed && <p>Achievement Completed!</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyAchievements;
