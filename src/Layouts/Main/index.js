import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <div className="py-1" style={{ backgroundColor: "#fcf4e9" }}>
        <div className="container" style={{ backgroundColor: "#fff" }}>
          <Outlet></Outlet>
        </div>
      </div>
    </main>
  );
}
