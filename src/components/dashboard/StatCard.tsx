import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  variant?: 'income' | 'expense' | 'balance' | 'default';
  className?: string;
}

const StatCard = ({ title, value, icon, trend, variant = 'default', className }: StatCardProps) => {
  const gradientClass = {
    income: 'gradient-income',
    expense: 'gradient-expense',
    balance: 'gradient-balance',
    default: 'bg-card',
  }[variant];

  const isColored = variant !== 'default';

  return (
    <div
      className={cn(
        'rounded-2xl p-5 sm:p-6 card-shadow transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer backdrop-blur-sm border border-border/50',
        gradientClass,
        isColored ? 'text-white' : 'bg-card/80',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2 flex-1 min-w-0">
          <p className={cn(
            'text-xs sm:text-sm font-semibold uppercase tracking-wide',
            isColored ? 'text-white/90' : 'text-muted-foreground'
          )}>
            {title}
          </p>
          <p className={cn(
            'text-2xl sm:text-3xl font-display font-bold tracking-tight break-words transition-all',
            isColored ? 'text-white' : 'text-foreground'
          )}>
            {value}
          </p>
          {trend && (
            <p className={cn(
              'text-xs font-medium',
              isColored ? 'text-white/80' : 'text-muted-foreground'
            )}>
              {trend}
            </p>
          )}
        </div>
        <div className={cn(
          'p-3 rounded-xl flex-shrink-0 transition-transform duration-300 hover:rotate-12',
          isColored ? 'bg-white/30 shadow-lg' : 'bg-gradient-to-br from-primary/20 to-primary/10'
        )}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
