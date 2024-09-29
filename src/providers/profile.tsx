import type profileData from "@/src/config/profile";
import { createContext } from "preact";
import type { ReactNode } from "preact/compat";
import { useContext } from "preact/hooks";

type ProfileDataProviderProps = {
  profileData: null | typeof profileData;
  children: ReactNode;
};

const ProfileDataContext = createContext<{
  profileData: null | typeof profileData;
}>({ profileData: null });

export const ProfileDataProvider = ({ profileData, children }: ProfileDataProviderProps) => {
  return (
    <ProfileDataContext.Provider value={{ profileData }}>{children}</ProfileDataContext.Provider>
  );
};

export const useProfileData = () => {
  const context = useContext(ProfileDataContext);

  if (!context) {
    throw new Error("useProfileData must be used within a ProfileDataProvider");
  }

  return context;
};
