import MainNavbar from "@/components/common/MainNavbar";

const UserLayout = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default UserLayout;
