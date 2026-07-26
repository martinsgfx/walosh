import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-10 text-center text-white sm:px-10 sm:py-16 lg:px-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-lg text-base text-left sm:text-lg lg:text-xl">
          Text or email to speak to someone:
          <br />
          <a href="tel:+18622371258" className="font-bold">
            862-237-1258
          </a>{" "}
          or <br />
          <a
            href="mailto:elijah.agbo_consult@outlook.com"
            className="font-bold"
          >
            elijah.agbo_consult@outlook.com
          </a>
        </p>
        <div className="flex flex-col items-start lg:items-end justify-center text-left lg:text-right">
          <div className="mb-4 flex justify-center space-x-6 sm:space-x-8">
          <a
            href="https://www.facebook.com/WaloshInternational"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlinedIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/WaloshInternational"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-6 h-6" />
           
          </a>
          <a
            href="https://www.linkedin.com/company/WaloshInternational"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="w-6 h-6" />
           
          </a>
          </div>
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Walosh International. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
