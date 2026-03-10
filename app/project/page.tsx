import Project from "../ui/project";
import NavBottom from "../components/NavBottom";

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-green-900 to-blue-900 pb-24">
            <Project />
            <NavBottom currentPath="/project" />
        </main>
    );
}
