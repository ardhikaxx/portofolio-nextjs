import Project from "../ui/project";
import NavBottom from "../components/NavBottom";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface YearData {
    year: number;
    contributions: ContributionDay[];
}

async function getGitHubContributions(): Promise<YearData[]> {
    try {
        const res = await fetch('https://github-contributions-api.jogruber.de/v4/ardhikaxx', {
            next: { revalidate: 3600 }
        });
        const data = await res.json();
        
        const contributions = data.contributions || [];
        const totalByYear = data.total || {};
        
        const years = Object.keys(totalByYear).map(Number).sort((a, b) => b - a);
        
        return years.map(year => ({
            year,
            contributions: contributions.filter((c: ContributionDay) => c.date.startsWith(year.toString()))
        }));
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        return [];
    }
}

export default async function ProjectPage() {
    const contributionData = await getGitHubContributions();

    return (
        <main className="min-h-screen bg-linear-to-br from-green-900 to-blue-900">
            <Project contributionData={contributionData} />
            <NavBottom currentPath="/project" />
        </main>
    );
}
