import React, { ReactNode } from 'react'


interface Props{
    children: ReactNode;
    bgColor: string | undefined; 
}

const SocialButton: React.FC<Props> = ({ children , bgColor= "black"}) => {

    let bgHoverColorClass;

    switch (bgColor) {
        case 'github':
            bgHoverColorClass = "hover:bg-github";
            break;
        case 'instagram':
            bgHoverColorClass = "hover:bg-instagram";
            break;
        case 'linkedin':
            bgHoverColorClass = "hover:bg-linkedin";
            break;
        case 'youtube':
            bgHoverColorClass = "hover:bg-youtube";
            break;
    }


  return (
    <button className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center bg-cover`}>
        <div className='fill-black group-hover:fill-white transition-colors duration-200 ease-in-out'>
            {children}
        </div>
    </button>
  );
};

export default SocialButton;