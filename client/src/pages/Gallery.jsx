import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNavbar from "../components/BottomNavbar";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28">
        Gallery Page
      </main>

      <Footer />
      <BottomNavbar />
    </>
  );
}