import Project from "../ui/project";
import NavBottom from "../components/NavBottom";

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-black">
            <Project />
            <NavBottom currentPath="/project" />
        </main>
    );
}
