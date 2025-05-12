interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow ${className || ''}`}>
      {children}
    </div>
  );
} 