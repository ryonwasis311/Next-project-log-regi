const AuthLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {  
    return (
      <main className="grow">
  
        {children}
  
      </main>
    )
  }

  export default AuthLayout;
  