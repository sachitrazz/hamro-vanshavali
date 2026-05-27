import {
  createContext,
  useContext,
  useState,
} from "react";

import { people } from "../data/People";

import type { Person } from "../types/Person";

type MembersContextType = {
  members: Person[];

  setMembers: React.Dispatch<
    React.SetStateAction<Person[]>
  >;
};

const MembersContext =
  createContext<MembersContextType | null>(null);

export function MembersProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [members, setMembers] =
    useState<Person[]>(people);

  return (
    <MembersContext.Provider
      value={{
        members,
        setMembers,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
}

export function useMembers() {

  const context =
    useContext(MembersContext);

  if (!context) {
    throw new Error(
      "useMembers must be used inside MembersProvider"
    );
  }

  return context;
}