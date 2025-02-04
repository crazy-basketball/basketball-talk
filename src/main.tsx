import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import { RootRouter } from './router/RootRoute.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="crimson" grayColor="sand" radius="large">
      <RootRouter />
    </Theme>
  </StrictMode>
)
