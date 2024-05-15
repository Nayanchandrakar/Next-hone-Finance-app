import { UserButton } from "@clerk/nextjs";

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomePage;
