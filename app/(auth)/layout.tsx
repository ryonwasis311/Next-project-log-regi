import Header from "@/components/ui/header";

const AuthLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {  
    return (
      <main className="grow">
        <Header />
        {children}
  
      </main>
    )
  }

  export default AuthLayout;
  