import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation bg={"primary"} />
      {children}
      <Footer />
    </div>
  );
}
