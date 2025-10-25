import Awards from "../ui/awards";
import NavBottom from "../components/NavBottom";

export default function AwardsPage() {
    return (
        <main className="min-h-screen bg-linear-to-br from-yellow-900 to-red-900">
            <Awards />
            <NavBottom />
        </main>
    );
}