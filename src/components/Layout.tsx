import { Header } from "@/components/Header";
import { WhatsAppFloatingIcon } from "@/components/WhatsAppFloatingIcon";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const phoneNumber = "+91 8829922256"; // Replace with your WhatsApp number

  return (
    <>
      <Header phoneNumber={phoneNumber} />
      <main>{children}</main>
      <WhatsAppFloatingIcon phoneNumber={phoneNumber} />
    </>
  );
};

export default Layout;
