import WhatsAppIcon from '../../ui/Icons/WhatsAppIcon';
import InstagramIcon from '../../ui/Icons/InstagramIcon';
import { SOCIAL_ACCOUNTS } from '../../../utils/globalConstants';

// Componente SocialButtons
function SocialButtons() {
  return (
    <div className='flex items-center gap-4'>
      {SOCIAL_ACCOUNTS.map((account) => (
        <a
          key={account.name}
          href={account.url}
          alt={account.name}
          title={account.name}
          target='_blank'
          rel='noreferrer'
          className={`flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r ${getBackgroundColorClass(account.name)} hover:${getHoverBackgroundColorClass(account.name)} transition duration-300`}
        >
          {getSocialIcon(account.name)}
        </a>
      ))}
    </div>
  );
}

// Función para obtener la clase de color de fondo según la red social
function getBackgroundColorClass(name) {
  switch (name.toLowerCase()) {
    case 'instagram':
      return 'from-purple-500 to-pink-500';
    case 'whatsapp':
      return 'from-green-500 to-blue-500';
    default:
      return '';
  }
}

// Función para obtener la clase de color de fondo al pasar el ratón según la red social
function getHoverBackgroundColorClass(name) {
  switch (name.toLowerCase()) {
    case 'instagram':
      return 'hover:from-pink-500 hover:to-purple-500';
    case 'whatsapp':
      return 'hover:from-blue-500 hover:to-green-500';
    default:
      return '';
  }
}

// Función para obtener el icono según la red social
function getSocialIcon(name) {
  switch (name.toLowerCase()) {
    case 'instagram':
      return <InstagramIcon className='w-6 h-6' />;
    case 'whatsapp':
      return <WhatsAppIcon className='w-6 h-6' />;
    default:
      return null;
  }
}

// Exporta el componente SocialButtons
export default SocialButtons;

