import CreateUserForm from "@/app/components/dashboard/CreateUserForm";

const CreateUser = () => {
  return (
    <div>
      <h1 className="text-2xl text-neutral-800 font-bold ">Create User</h1>
      <div className="w-full h-full">
        <CreateUserForm />
      </div>
    </div>
  );
};

export default CreateUser;
