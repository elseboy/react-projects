import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/sign-in/Sign-in';

const Shop = () => {
  return (
    <div>
      <h2>This is shop</h2>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
