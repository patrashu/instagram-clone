import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loginUser, setLoading } from './features/userSlice';
import { auth } from './firebase';
import HomePage from './Homepage';
import Authentication from './authentication/Authentication';

function App() {
  const dispatch = useDispatch();  // send data to redux 

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading)
  return (
    <div className="App">
      {isLoading ? (<div className='loader-container'>
        <div className='loader'></div>
      </div>) : (
        <>
          {user ? (<HomePage />) : (<Authentication />)}
        </>
        )
      }
    </div>
  );
}

export default App;
