import globalcss from "@/components/global.css"

export const metadata = {
  title: "Social Flow",
  description: "Social Flow - A chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
