import { useState } from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import SEOHead from "@/components/SEOHead";

const Crm = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <SEOHead
        title="Cybaem Nova CRM Platform | Cybaem Tech"
        description="Cybaem Nova AI-Powered CRM platform with predictive lead scoring, pipeline management, and intelligent customer analytics."
        canonical="https://www.cybaemtech.com/product/crm"
      />
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Dashboard onLogout={() => setIsAuthenticated(false)} />
      )}
    </>
  );
};

export default Crm;
