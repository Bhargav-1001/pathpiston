// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }



import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 fw-bold mb-4">
            Welcome to <span className="text-accent">BikeTouring Pro</span>
          </h1>
          <p className="lead mb-5 text-muted">
            The premium platform for serious bikers and touring groups. Connect, ride, and explore with fellow
            enthusiasts.
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/dashboard" className="btn btn-accent btn-lg px-4">
              Enter Dashboard
            </Link>
            <Link href="/rides" className="btn btn-outline-light btn-lg px-4">
              Browse Rides
            </Link>
          </div>

          <div className="row mt-5 pt-5">
            <div className="col-md-4 mb-4">
              <div className="card card-dark h-100 border-0">
                <div className="card-body text-center">
                  <div className="display-6 text-accent mb-3">🏍️</div>
                  <h5>Premium Rides</h5>
                  <p className="text-muted">Join exclusive touring groups and premium ride events</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-dark h-100 border-0">
                <div className="card-body text-center">
                  <div className="display-6 text-highlight mb-3">🗺️</div>
                  <h5>Route Planning</h5>
                  <p className="text-muted">Advanced route planning and navigation tools</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-dark h-100 border-0">
                <div className="card-body text-center">
                  <div className="display-6 text-accent mb-3">👥</div>
                  <h5>Community</h5>
                  <p className="text-muted">Connect with serious riders and touring enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
