import Image from "next/image";
import Link from "next/link";
import discoveryMobile from '../../public/discovery-mobile.webp'
import discoveryDesktop from '../../public/discovery-desktop.webp'
import connectedMobile from '../../public/get-connected-mobile.webp'
import connectedDesktop from '../../public/get-connected-desktop.webp'
import kidsMobile from '../../public/r-kids-mobile.webp'
import kidsDesktop from '../../public/r-kids-desktop.webp'
import leadershipImg from '../../public/tj.webp'

export default function Home() {
  const boxes = [
    {
      width: 'w-[234px]',
      title: 'First Time Here!',
      label: 'First Time Here',
      imageSrc: '',
      imageSrcMobile: '',
      link: '/first-time-here',
      button: true,
      button_color: 'primary',
      button_label: 'Learn More',
    },
    {
      width: 'w-[462px]',
      title: 'Intro video/slide',
      label: null,
      imageSrc: '',
      imageSrcMobile: '',
      link: null,
      button: false,
      button_color: null,
      button_label: null,
    },
    {
      width: 'w-[234px]',
      title: 'Leadership',
      label: 'Leadership',
      imageSrc: leadershipImg,
      imageSrcMobile: ' ',
      link: '/leadership',
      button: true,
      button_color: 'white',
      button_label: 'Learn More',
    },
    {
      width: 'w-[310px]',
      title: 'Kids',
      label: null,
      imageSrc: kidsDesktop,
      imageSrcMobile: kidsMobile,
      link: '/r-kids',
      button: false,
      button_color: null,
      button_label: null,
    },
    {
      width: 'w-[310px]',
      title: 'Connected',
      label: null,
      imageSrc: connectedDesktop,
      imageSrcMobile: connectedMobile,
      link: '/connect',
      button: false,
      button_color: null,
      button_label: null,
    },
    {
      width: 'w-[310px]',
      title: 'Discovery',
      label: null,
      imageSrc: discoveryDesktop,
      imageSrcMobile: discoveryMobile,
      link: '/discovery',
      button: false,
      button_color: null,
      button_label: null,
    },
    {
      width: 'w-[462px]',
      title: 'Events',
      label: null,
      imageSrc: '',
      imageSrcMobile: ' ',
      link: '/events',
      button: false,
      button_color: null,
      button_label: null,
    },
    {
      width: 'w-[462px]',
      title: 'Sermon',
      label: null,
      imageSrc: '',
      imageSrcMobile: ' ',
      link: '/sermons',
      button: false,
      button_color: null,
      button_label: null,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {boxes.slice(0, 3).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          {boxes.slice(3, 6).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {boxes.slice(6).map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Box = ({ width, title, label, imageSrc, imageSrcMobile, link, button, button_color, button_label }) => {

  return (
    <Link href='' className={`bg-white shadow-md rounded-2xl ${width} h-[250px] relative overflow-hidden`}>
      <div to={link} className="relative block h-full">
        <Image 
          src={imageSrc} 
          layout="fill" 
          objectFit="cover" 
          alt="alt" 
        />
      </div>
      {label && (
        <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">{title}</h3>
      )}
      <div className="absolute right-0 bottom-0">
        {button && (
          <>
            {button_color === 'primary' ? (
              <button type="button" className='focus:outline-none focus:ring-3 focus:ring-primaryLight font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-primary text-white hover:bg-primaryDark'>{button_label}</button>
            ) : (
              <button type="button" className='focus:outline-none focus:ring-3 focus:ring-white-200 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-white text-black hover:bg-gray-200'>{button_label}</button>
            )}
          </>
        )}
      </div>
    </Link>
  );
};
