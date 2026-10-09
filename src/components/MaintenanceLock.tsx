import { ReactNode } from "react";
import mmm_logo from "@/assets/MMM_logo.png";

/**
 * Manual maintenance lock.
 * While MAINTENANCE_MODE is true, visitors only see the "We'll Be Back Soon"
 * notice. Set it to false to restore the full site.
 */
const MAINTENANCE_MODE = true;

const MaintenanceLock = ({ children }: { children: ReactNode }) => {
  const isLocked = MAINTENANCE_MODE;

  if (!isLocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-xl w-full text-center py-16">
        <img
          src={mmm_logo}
          alt="Multi Metrics Marketing"
          className="h-40 w-40 md:h-52 md:w-52 object-contain mx-auto mb-8"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          We'll Be Back Soon
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
          Our website is temporarily undergoing maintenance.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Please check back shortly. Thank you for your patience.
        </p>
        <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
          © {new Date().getFullYear()} Multi Metrics Marketing. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default MaintenanceLock;
