import AuthNavbar from "@/components/common/AuthNavbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <AuthNavbar />
      <div className="h-[calc(100vh-50px)]">{children}</div>
    </div>
  );
};

export default AuthLayout;
