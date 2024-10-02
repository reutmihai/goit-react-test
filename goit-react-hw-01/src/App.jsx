import './App.css'
import Profile from './Profile';
import Statistics from './Statistics';
import user from '/Users/mihaireut/Documents/GitHub/goit-js-project/goit-react-hw-01-components/goit-react-hw-01/user.json';
import data from '/Users/mihaireut/Documents/GitHub/goit-js-project/goit-react-hw-01-components/goit-react-hw-01/data.json';
function App() {

  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
}

export default App
