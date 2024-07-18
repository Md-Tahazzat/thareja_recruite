import MainHeader from "@/components/shared/header/MainHeader";

/* 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 */
export default function WithFooter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      {children}
      {/* <h1>this is footer</h1> */}
    </>
  );
}
