import About from "../ui/about";
import NavBottom from "../components/NavBottom";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-linear-to-br from-blue-900 to-purple-900">
            <About />
            <NavBottom />
        </main>
    );
}