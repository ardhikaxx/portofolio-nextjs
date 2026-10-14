import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects_data';
import ProjectDetailClient from './project-detail-client';

interface Props {
    params: Promise<{ id: string }>;
}

const BASE_URL = 'https://yanuar-ardhika.vercel.app';

export function generateStaticParams() {
    return projects.map((p) => ({
        id: p.id.toString(),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return {
            title: 'Proyek Tidak Ditemukan',
            description: 'Detail proyek tidak ditemukan dalam database portofolio Yanuar Ardhika.',
        };
    }

    const title = `${project.name} | Portofolio Yanuar Ardhika`;
    const cleanDesc = project.description.replace(/\s+/g, ' ').trim();
    const description = cleanDesc.length > 160 ? `${cleanDesc.slice(0, 157)}...` : cleanDesc;
    const projectUrl = `${BASE_URL}/project/${project.id}`;
    const imageUrl = `${BASE_URL}${project.image}`;

    return {
        title,
        description,
        keywords: [
            project.name,
            ...project.languages,
            `${project.name} Yanuar Ardhika`,
            "Yanuar Ardhika Rahmadhani",
            "Portofolio Yanuar Ardhika",
            "Software Engineer Indonesia",
            "Web Developer Jember",
            "Full Stack Developer Indonesia",
            "Teknik Informatika Polije",
        ],
        alternates: {
            canonical: projectUrl,
        },
        openGraph: {
            title,
            description,
            url: projectUrl,
            type: 'article',
            siteName: 'Portofolio Yanuar Ardhika',
            locale: 'id_ID',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 675,
                    alt: project.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
            creator: '@ardhikaxx',
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;
    const numId = Number(id);
    const project = projects.find((p) => p.id === numId);

    if (!project) {
        notFound();
    }

    const projectSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.name,
        description: project.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, Cross-Platform',
        author: {
            '@type': 'Person',
            name: 'Yanuar Ardhika Rahmadhani Ubaidillah, S.Tr.Kom.',
            url: BASE_URL,
        },
        image: `${BASE_URL}${project.image}`,
        url: `${BASE_URL}/project/${project.id}`,
        keywords: project.languages.join(', '),
        dateCreated: `${project.year}-01-01`,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'IDR',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Beranda',
                item: BASE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Koleksi Proyek',
                item: `${BASE_URL}/project`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: project.name,
                item: `${BASE_URL}/project/${project.id}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ProjectDetailClient projectId={numId} />
        </>
    );
}
