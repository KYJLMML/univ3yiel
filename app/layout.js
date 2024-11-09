// app/layout.js
import { LayoutProvider } from './LayoutContext';
import { Header } from './components/Header';

export const metadata = {
  title: 'YIEL',
  description: 'YIEL project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <LayoutProvider>
          <Header />
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
