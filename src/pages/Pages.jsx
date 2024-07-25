import Header from '../ui/Header.jsx';
import Footer from '../ui/Footer.jsx';

import Detail from './Detail';
import Home from './Home';
import Products from './Products';
import Profile from './Profile';

const BuildPage = ({ PageContent }) => {
    return (
        <>
        <Header />
        <PageContent />
        <Footer />
        </>
    );
}

export const HomePage = () => <BuildPage PageContent={Home} />;
export const ProfilePage = () => <BuildPage PageContent={Profile} />;
export const ProductsPage = () => <BuildPage PageContent={Products} />;
export const DetailPage = () => <BuildPage PageContent={Detail} />;
