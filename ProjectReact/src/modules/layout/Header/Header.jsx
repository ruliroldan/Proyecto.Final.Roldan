
import { CATEGORIES } from '../../../utils/globalConstants';


import TopBanner from '../TopBanner';
import SiteLogo from '../SiteLogo';
import Greeting from '../Greeting';
import SocialButtons from '@/modules/layout/SocialButtons';
import CartWidget from '@/modules/cart/CartWidget';
import CategoriesMenu from '@/modules/store/CategoriesMenu';

function Header() {
  const styles = `flex-col bg-transparent navbar gap-2
                  sm:flex-row sm:justify-between`;

  return (
    <>
      <TopBanner />
      <div className={styles}>
        <div className='flex items-center'>
          {/* Logo con un espacio */}
          <SiteLogo />
          <div className='ml-4'>
            {/* Categorías a la izquierda */}
            <CategoriesMenu menuItems={CATEGORIES} />
          </div>
        </div>
        
        <div className='flex-1'>
          {/* Contenedor para el resto de los elementos */}
          <div className='flex items-center justify-end px-8 sm:mt-2'>
            <Greeting />
            <SocialButtons />
            <CartWidget
              className={`fixed z-50 bg-brand text-background rounded-full shadow-lg bottom-4 right-4
                          sm:static sm:rounded-none sm:shadow-none sm:bottom-0 sm:right-0 sm:bg-background sm:text-foreground`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
