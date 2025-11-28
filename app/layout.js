import "./globals.css";
import Navbar from "./COMMON/Navbar"; // navbar import

export const metadata = {
  title: "DJ Harmony",
  description: "Professional DJ Services for Unforgettable Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      
      </body>
    </html>
  );
}
