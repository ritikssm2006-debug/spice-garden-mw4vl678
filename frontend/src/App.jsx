import { Route, Routes } from "react-router-dom";
import { SITE } from "./config.js";
import { useAuth } from "./auth.jsx";
import { Navbar, Footer, WhatsAppButton } from "./components/Layout.jsx";
import Account from "./pages/Account.jsx";
import Track from "./pages/Track.jsx";
import Receipt from "./pages/Receipt.jsx";
import Home from "./pages/Home.jsx";
import ModelPage from "./pages/ModelPage.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const { ready } = useAuth();

  return (
    <div className="page">
      {/* the soft, slowly moving colour field behind every page */}
      <div className="backdrop" aria-hidden="true"><span className="b1" /><span className="b2" /><span className="b3" /></div>
      <Navbar />
      <main>
        {!ready ? (
          <p className="container muted section">Loading…</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            {SITE.auth && <Route path="/login" element={<Login />} />}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/track/:key/:id" element={<Track />} />
            <Route path="/receipt/:key/:id" element={<Receipt />} />
            <Route path="/:key" element={<ModelPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
