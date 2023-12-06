import { Link } from 'react-router-dom';

function SiteLogo() {
  const styles = `flex items-center justify-center p-2 text-white border-4 border-accent-color rounded-full aspect-square 
                  bg-gradient-to-r from-blue-400 to-green-400 hover:from-green-400 hover:to-blue-400 transition duration-300`;

  return (
    <Link className={styles} to='/nueva-ruta'>
      <span className='text-3xl font-bold'>okComputer</span>
    </Link>
  );
}

export default SiteLogo;