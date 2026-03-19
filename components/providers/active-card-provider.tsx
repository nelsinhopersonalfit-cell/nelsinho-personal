"use client";

import { createContext, useContext, useState } from "react";

interface ActiveCardContextValue {
    activeId: string | null;
    setActiveId: (id: string | null) => void;
}

const ActiveCardContext = createContext<ActiveCardContextValue>({
    activeId: null,
    setActiveId: () => {},
});

export function ActiveCardProvider({ children }: { children: React.ReactNode }) {
    const [activeId, setActiveId] = useState<string | null>(null);
    return (
        <ActiveCardContext.Provider value={{ activeId, setActiveId }}>
            {children}
        </ActiveCardContext.Provider>
    );
}

export function useActiveCard() {
    return useContext(ActiveCardContext);
}
