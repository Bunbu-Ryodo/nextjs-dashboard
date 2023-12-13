import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add font to body element of layout, applies to all the children.  */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
