import Image from 'next/image';
import Section from '@/app/_components/sections';
import Avatar from '@/app/_components/ui/avatar';
import Links, { TLinks } from '@/app/_components/ui/links';

import { profile, links } from '@/app/data';

type TProfileDetails = {
  label: string;
  value: string | string[];
}

export default function Profile() {
  const typedLinks: TLinks = { links } as TLinks;
  const whiteFont = ['name', 'email', 'phone'];

  return (
    <Section className='pt-10'>
      <div className='w-[200px] h-[200px] rounded-full overflow-hidden mb-10'>
        <Avatar />
      </div>
      <ul>
        {Object.entries(profile).map(([key, value]) => (
          <li key={key}>
            {whiteFont.includes(key) ? (
              <span className={key === 'name' ? 'text-[33px] font-bold' : 'text-[16px]'}>
                {value}
              </span>
            ) : (
              <ProfileDetail label={key} value={value} />
            )}
          </li>
        ))}
      </ul>
      <Links links={typedLinks.links} />
    </Section>
  );
}

const ProfileDetail = ({ label, value }: TProfileDetails) => {
  if (label === 'country') {
    return (
      <div className='flex items-center space-x-2'>
        <Image src={value[0]} alt={value[1]} width={20} height={20} />
        <span>{value[1]}</span>
      </div>
    );
  }

  if (label === 'expertise') {
    return <p className='text-gray-500 italic font-bold py-5'>{value}</p>;
  }

  return <p className='text-gray-500 py-1'>{value}</p>;
};
