interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      {children}
    </div>
  );
} 