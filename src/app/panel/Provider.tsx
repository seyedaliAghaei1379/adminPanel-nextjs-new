import { redirect } from "next/navigation";

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = true;
  if (!session) {
    redirect("/");
  }

  return <section>{children}</section>;
};
export default AuthProvider;
