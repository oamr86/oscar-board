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
  /** Tab activo controlado externamente */
  activeTab?: string;
  /** Setter externo para el tab activo */
  setActiveTab?: (id: string) => void;
}

/**
 * Componente compuesto Tabs. Provee contexto y renderiza los hijos.
 */
export const Tabs: React.FC<TabsProps & { activeTab?: string; setActiveTab?: (id: string) => void }> = ({ defaultTab, children, activeTab: controlledActiveTab, setActiveTab: controlledSetActiveTab }) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab);
  const activeTab = controlledActiveTab ?? internalActiveTab;
  const setActiveTab = controlledSetActiveTab ?? setInternalActiveTab;
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
  <div
    style={{
      display: 'flex',
      gap: 8,
      border: '1px solid #1976d2',
      borderRadius: 8,
      padding: 4,
      background: '#f5faff',
      width: 'fit-content',
      marginBottom: 0,
    }}
  >
    {children}
  </div>
);

/**
 * Props para un Tab individual.
 */
export interface TabProps {
  /** ID único del tab */
  id: string;
  /** Contenido del tab (título) */
  children: ReactNode;
  onClick?: () => void;
}

/**
 * Un Tab individual, cambia el tab activo al hacer click.
 */
const Tab: React.FC<TabProps> = ({ id, children, onClick }) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab must be used within Tabs');
  const { activeTab, setActiveTab } = ctx;
  return (
    <button
      style={{
        padding: '8px 16px',
        border: 'none',
        borderBottom: activeTab === id ? '2px solid #1976d2' : '2px solid transparent',
        borderRadius: 6,
        background: activeTab === id ? '#e3f0fb' : 'none',
        cursor: 'pointer',
        fontWeight: activeTab === id ? 'bold' : 'normal',
        transition: 'background 0.2s',
      }}
      onClick={() => {
        setActiveTab(id);
        if (onClick) onClick();
      }}
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
  return ctx.activeTab === id ? <div style={{ padding: '0', margin: 0 }}>{children}</div> : null;
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
