import { FaUserCircle, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../context/AuthProvider';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('Users');
    // Set authUser state to undefined
    setAuthUser(undefined);
    navigate('/');
  };

  const CustomButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="bg-white hover:bg-gray-800 hover:text-white text-slate-800 py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-gray-300 transition-all duration-300 btn btn-wide"
    >
      {children}
    </button>
  );

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-4xl text-gray-400 dark:text-gray-600">
            {authUser ? (
              <FaUserCircle />
            ) : (
              <FaUserCircle />
            )}
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">{authUser ? authUser.fullname : 'John Doe'}</h2>
            <p className="text-gray-500 dark:text-gray-400">{authUser ? authUser.email : 'john@example.com'}</p>
          </div>
          {authUser ? (
            <CustomButton onClick={handleLogout}>Logout</CustomButton>
          ) : (
            <CustomButton>Login</CustomButton>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Profile;
