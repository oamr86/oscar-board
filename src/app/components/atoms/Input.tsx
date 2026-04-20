// This file fue movido desde shared/ui/atoms/Input.tsx

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <label style={{ display: 'block', marginBottom: 8 }}>
    {label && <span style={{ display: 'block', marginBottom: 4 }}>{label}</span>}
    <input {...props} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: '100%' }} />
  </label>
);
