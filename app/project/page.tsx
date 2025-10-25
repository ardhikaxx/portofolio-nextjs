import Project from "../ui/project";
import NavBottom from "../components/NavBottom";

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-linear-to-br from-green-900 to-blue-900">
            <Project />
            <NavBottom />
        </main>
    );
}