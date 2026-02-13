import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

describe('NotFound Page', () => {
  it('renders 404 heading', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Go Home')).toBeInTheDocument();
    expect(screen.getByText('Go Back')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
