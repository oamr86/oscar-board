import React, { createContext, useContext, useState, ReactNode } from 'react';


/**
 * Contexto para Tabs, mantiene el tab activo y el setter.
 */
interface TabsContextProps {
  /** ID del tab activo */
  activeTab: string;
  /** Cambia el tab activo */
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

/**
 * Props para el componente Tabs principal.
 */
export interface TabsProps {
  /** ID del tab que estará activo por defecto */
  defaultTab: string;
  /** Elementos hijos: Header, Tab, Content */
  children: ReactNode;
}

/**
 * Componente compuesto Tabs. Provee contexto y renderiza los hijos.
 */
export const Tabs: React.FC<TabsProps> = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

/**
 * Props para el header de Tabs (contenedor de los tabs).
 */
export interface TabsHeaderProps {
  /** Elementos Tab como hijos */
  children: ReactNode;
}

/**
 * Header de Tabs, agrupa los botones de tabulación.
 */
const TabsHeader: React.FC<TabsHeaderProps> = ({ children }) => (
  <div style={{ display: 'flex', gap: 8 }}>{children}</div>
);

/**
 * Props para un Tab individual.
 */
export interface TabProps {
  /** ID único del tab */
  id: string;
  /** Contenido del tab (título) */
  children: ReactNode;
}

/**
 * Un Tab individual, cambia el tab activo al hacer click.
 */
const Tab: React.FC<TabProps> = ({ id, children }) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab must be used within Tabs');
  const { activeTab, setActiveTab } = ctx;
  return (
    <button
      style={{
        padding: '8px 16px',
        borderBottom: activeTab === id ? '2px solid #1976d2' : '2px solid transparent',
        background: 'none',
        cursor: 'pointer',
        fontWeight: activeTab === id ? 'bold' : 'normal',
      }}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
};

/**
 * Props para el contenido de un tab.
 */
export interface TabsContentProps {
  /** ID del tab al que corresponde este contenido */
  id: string;
  /** Contenido a mostrar cuando el tab está activo */
  children: ReactNode;
}

/**
 * Renderiza el contenido solo si el tab está activo.
 */
const TabsContent: React.FC<TabsContentProps> = ({ id, children }) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs.Content must be used within Tabs');
  return ctx.activeTab === id ? <div style={{ padding: 16 }}>{children}</div> : null;
};



// Definir tipo compuesto para Tabs con subcomponentes
interface TabsCompoundComponent extends React.FC<TabsProps> {
  Header: React.FC<TabsHeaderProps>;
  Tab: React.FC<TabProps>;
  Content: React.FC<TabsContentProps>;
}

const TabsWithCompound: TabsCompoundComponent = Tabs as TabsCompoundComponent;
TabsWithCompound.Header = TabsHeader;
TabsWithCompound.Tab = Tab;
TabsWithCompound.Content = TabsContent;

export default TabsWithCompound;
