import React, { createContext } from "preact";
import { useContext } from "preact/hooks";
import profileData from "../config/profile";

const ProfileDataContext = createContext<{
  profileData: null | typeof profileData;
}>({ profileData: null });

export const ProfileDataProvider = ({ children }) => {
  return (
    <ProfileDataContext.Provider value={{ profileData }}>
      {children}
    </ProfileDataContext.Provider>
  );
};

export const useProfileData = () => {
  const context = useContext(ProfileDataContext);

  if (!context) {
    throw new Error("useProfileData must be used within a ProfileDataProvider");
  }

  return context;
};
