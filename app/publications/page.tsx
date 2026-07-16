import Publications from "../ui/publications";
import NavBottom from "../components/NavBottom";

export default function PublicationsPage() {
    return (
        <main className="min-h-screen bg-black">
            <Publications />
            <NavBottom currentPath="/publications" />
        </main>
    );
}
