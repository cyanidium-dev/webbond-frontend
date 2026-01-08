import { Link } from '@/i18n/navigation';

export interface BreadcrumbStep {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  steps: BreadcrumbStep[];
  className?: string;
}

function Breadcrumbs({ steps, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label='Breadcrumb'
      className={`flex items-center text-[12px] lg:text-[14px] uppercase tracking-wider ${className}`}
    >
      <ol className='flex items-center gap-2 list-none p-0 m-0'>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li key={index} className='flex items-center'>
              {index > 0 && (
                <span
                  className='mx-2 text-white/30 select-none'
                  aria-hidden='true'
                >
                  /
                </span>
              )}

              {isLast ? (
                <span
                  aria-current='page'
                  className='text-white font-light opacity-100'
                >
                  {step.label}
                </span>
              ) : (
                <Link
                  href={step.href || '#'}
                  className='text-white/60 hover:text-white transition-opacity duration-300 font-light'
                >
                  {step.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
export { Breadcrumbs };
