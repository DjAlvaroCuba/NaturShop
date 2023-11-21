import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <Toaster />
      <Header />
      <div className="aqui h-full w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://png.pngtree.com/background/20210715/original/pngtree-quiet-beautiful-gold-leaf-plant-green-yellow-white-natural-background-picture-image_1284095.jpg')" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;