import React from 'react';
import './App.scss';
import Profile from "./components/Profile";
import profileData from './mockup/profile.json';
import statisticsData from './mockup/statistical-data.json';
import friendssData from './mockup/friends.json';
import transactionsData from './mockup/transactions.json';
import Statistics from "./components/Statistics";
import TransactionHistory from "./components/TransactionHistory";
import FriendList from "./components/FriendList";

function App() {
    const state = {
        profile: profileData,
        statistics: statisticsData,
        friends: friendssData,
        transactions: transactionsData,
    };

    return (
        <div className="application">
            <div className="navigation">
                <a href="#profile">Profile</a>
                <a href="#statistics">Statistics</a>
                <a href="#friends">Friends</a>
                <a href="#transactions">Transactions</a>
            </div>
            <div className="content">
                <div id="profile" className="task-container">
                    <Profile name={state.profile.name}
                             location={state.profile.location}
                             tag={state.profile.tag}
                             avatar={state.profile.avatar}
                             stats={state.profile.stats}
                    />
                </div>
                <div id="statistics" className="task-container">
                    <Statistics title="Upload stats" stats={state.statistics} />,
                </div>
                <div id="friends" className="task-container">
                    <FriendList friends={state.friends} />
                </div>
                <div id="transactions" className="task-container">
                    <TransactionHistory items={state.transactions} />,
                </div>
            </div>
        </div>
    );
}

export default App;
