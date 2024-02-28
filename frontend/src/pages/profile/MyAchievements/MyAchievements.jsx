import React, { useState, useEffect } from 'react';

const MyAchievements = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        // Fetch achievements from API or any other data source
        // and update the state
        fetchAchievements()
            .then((data) => setAchievements(data))
            .catch((error) => console.error(error));
    }, []);

    const fetchAchievements = () => {
        // Simulated API call to fetch achievements
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = [
                    { id: 1, title: 'First Achievement', description: 'Lorem ipsum dolor sit amet', completed: false },
                    { id: 2, title: 'Second Achievement', description: 'Consectetur adipiscing elit', completed: false },
                    { id: 3, title: 'Third Achievement', description: 'Sed do eiusmod tempor incididunt', completed: false },
                ];
                resolve(data);
            }, 1000);
        });
    };

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
