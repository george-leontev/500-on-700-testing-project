import { appLogo } from '../../assets';
import './header.scss'
import Image from 'next/image';


export const Header = () => {
    return (
        <div className='header'>
            <Image src={appLogo} className='logo-icon' alt='app-logo' />
            <div>
                <button className="custom-button">Связаться с нами</button>
            </div>
        </div>
    );
};
