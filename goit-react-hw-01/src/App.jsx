import './App.css'
import Profile from './Profile';
import user from '/Users/mihaireut/Documents/GitHub/goit-js-project/goit-react-hw-01-components/goit-react-hw-01/user.json';

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
    </>
  );
}

export default App
