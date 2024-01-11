import AcmeLogo from '../acme-logo';
import { lusitana } from '@/app/ui/fonts';

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <>
      <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-20">
        <div className="w-32 text-white md:w-36">
          <AcmeLogo />
        </div>
      </div>
      <h1 className={`${lusitana.className} mt-3 text-center text-xl`}>
        {label}
      </h1>
    </>
  );
};
