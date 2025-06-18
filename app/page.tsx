import Link from "next/link"
import { Bike, Users, MapPin, Shield, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-lg-10 text-center">
          <div className="mb-5">
            <div className="d-flex justify-content-center mb-4">
              <div className="bg-card-custom p-4 rounded-circle border border-custom">
                <Bike size={48} className="text-accent" />
              </div>
            </div>
            <h1 className="display-4 fw-bold mb-4">
              Welcome to <span className="text-accent">BikeTouring Pro</span>
            </h1>
            <p className="lead mb-5 text-muted col-lg-8 mx-auto">
              The premium platform for serious bikers and touring groups. Connect, ride, and explore with fellow
              enthusiasts in a professional, tactical environment.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
              <Link href="/dashboard" className="btn btn-accent btn-lg px-4 py-3">
                <BarChart3 size={20} className="me-2" />
                Enter Dashboard
              </Link>
              <Link href="/rides" className="btn btn-outline-secondary btn-lg px-4 py-3">
                <MapPin size={20} className="me-2" />
                Browse Rides
              </Link>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-lg-3 col-md-6">
              <div className="card card-custom h-100 border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                    <Bike className="text-accent" size={32} />
                  </div>
                  <h5 className="fw-semibold mb-3">Premium Rides</h5>
                  <p className="text-muted">
                    Join exclusive touring groups and premium ride events with experienced riders
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card card-custom h-100 border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                    <MapPin className="text-highlight" size={32} />
                  </div>
                  <h5 className="fw-semibold mb-3">Route Planning</h5>
                  <p className="text-muted">Advanced route planning and navigation tools for epic adventures</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card card-custom h-100 border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                    <Users className="text-success" size={32} />
                  </div>
                  <h5 className="fw-semibold mb-3">Elite Community</h5>
                  <p className="text-muted">Connect with serious riders and touring enthusiasts worldwide</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card card-custom h-100 border-0">
                <div className="card-body text-center p-4">
                  <div className="bg-info bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                    <Shield className="text-info" size={32} />
                  </div>
                  <h5 className="fw-semibold mb-3">Safety First</h5>
                  <p className="text-muted">Comprehensive safety protocols and emergency support systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
