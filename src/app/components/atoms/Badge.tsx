// This file fue movido desde shared/ui/atoms/Badge.tsx

export interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, color = '#1976d2' }) => (
  <span style={{
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: 8,
    background: color,
    color: '#fff',
    fontSize: 12,
    fontWeight: 500,
    marginLeft: 8,
  }}>{children}</span>
);
