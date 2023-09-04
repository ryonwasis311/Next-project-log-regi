'use client'

import Header1 from "@/components/ui/header1";

const AuthLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {  
    return (
      <main className="grow">
        <Header1 />
        {children}
  
      </main>
    )
  }

  export default AuthLayout;