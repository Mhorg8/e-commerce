import RegisterForm from "@/app/components/auth/RegisterForm";
const SignUpPage: React.FC = () => {
  return (
    <div className="container flex items-center justify-center w-full h-full mt-10 py-10">
      <div className="w-[600px] h-[450px] bg-neutral-200 rounded-2xl flex items-start px-4 py-3">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-neutral-800">SignUp</h2>
          <p className="mt-1">Sign-Up form access to all features</p>

          <RegisterForm />
        </div>
        <div className="hidden md:block md:w-1/2">1</div>
      </div>
    </div>
  );
};

export default SignUpPage;
