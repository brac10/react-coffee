import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Who doesn't like a fresh cup of Joe in the morning. Smell that ?..
              Do you Smell that ? That's Community "Dark Roast" son. Smells
              like...... "Victory"
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
