import React from "react";
import "./page.css";
import Link from 'next/link'

function Window() {
  return (
    <div>
      <div className="imgg"></div>
      <div className="container">

      <div className="line1">PindGrid</div>
      <div className="line2">Harvesting Connections, Fueling Futures</div>

      <Link href="/language">
      <button className="btn">GET STARTED</button>
      </Link>
      </div>
    </div>

  );
}

export default Window;
