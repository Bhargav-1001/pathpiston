import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./lib/theme-context"
import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "BikeTouring Pro - Premium Riding Platform",
  description: "Professional platform for serious bikers and touring groups",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 d-none d-lg-block p-0">
                <Sidebar />
              </div>
              <div className="col-lg-10 col-12">
                <main className="p-4 fade-in">{children}</main>
              </div>
            </div>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </ThemeProvider>
      </body>
    </html>
  )
}
