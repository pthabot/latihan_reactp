import Footer from "../Component/Footer";
import Header from "../Component/Header"

export default function Layout({children}) {
  return (
    <div className="layout">
        <Header />
        {children}
        <Footer />
    </div>
  );
}
