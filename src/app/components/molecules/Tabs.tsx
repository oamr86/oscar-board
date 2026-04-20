// This file fue movido desde shared/ui/molecules/Tabs.tsx

import React, { createContext, useContext, useState } from 'react';

interface TabsContextProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

interface TabsProps {
  defaultTab: string;
  activeTab?: string;
  setActiveTab?: (id: string) => void;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> & {
  Header: React.FC<{ children: React.ReactNode }>;
  Tab: React.FC<{ id: string; onClick?: () => void; children: React.ReactNode }>;
  Content: React.FC<{ id: string; children: React.ReactNode }>;
} = ({ defaultTab, activeTab: controlledActiveTab, setActiveTab: controlledSetActiveTab, children }) => {
  const [internalTab, setInternalTab] = useState(defaultTab);
  const isControlled = controlledActiveTab !== undefined && controlledSetActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalTab;
  const setActiveTab = isControlled ? controlledSetActiveTab : setInternalTab;

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Header = ({ children }) => <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>{children}</div>;

Tabs.Tab = ({ id, onClick, children }) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs.Tab debe usarse dentro de Tabs');
  const { activeTab, setActiveTab } = ctx;
  return (
    <button
      style={{
        padding: '8px 20px',
        borderRadius: 8,
        border: 'none',
        background: activeTab === id ? '#1976d2' : '#e0e7ef',
        color: activeTab === id ? '#fff' : '#1976d2',
        fontWeight: 600,
        cursor: 'pointer',
        outline: 'none',
        transition: 'background 0.2s',
      }}
      onClick={() => {
        setActiveTab(id);
        onClick?.();
      }}
    >
      {children}
    </button>
  );
};

Tabs.Content = ({ id, children }) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs.Content debe usarse dentro de Tabs');
  return ctx.activeTab === id ? <div>{children}</div> : null;
};

export default Tabs;
