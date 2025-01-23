import MainNavbar from "@/components/common/MainNavbar";

const UserLayout = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      <div className="mt-12 container py-6">{children}</div>
    </div>
  );
};

export default UserLayout;
