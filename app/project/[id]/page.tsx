import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects_data';
import ProjectDetailClient from './project-detail-client';
import { SITE_URL, SITE_CONFIG } from '../../config/site';

interface Props {
    params: Promise<{ id: string }>;
}

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
    const projectUrl = `${SITE_URL}/project/${project.id}`;
    const imageUrl = `${SITE_URL}${project.image}`;

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
            "Jasa Pembuatan Website Jember",
            "Jasa Pembuatan Aplikasi Mobile",
        ],
        alternates: {
            canonical: projectUrl,
            languages: {
                "id-ID": projectUrl,
                "x-default": projectUrl,
            },
        },
        openGraph: {
            title,
            description,
            url: projectUrl,
            type: 'article',
            siteName: 'Yanuar Ardhika — Jasa Pembuatan Website & Portofolio',
            locale: 'id_ID',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 675,
                    alt: `${project.name} — Portofolio Yanuar Ardhika`,
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
            name: SITE_CONFIG.fullName,
            url: SITE_URL,
        },
        image: `${SITE_URL}${project.image}`,
        url: `${SITE_URL}/project/${project.id}`,
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
                item: SITE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Koleksi Proyek',
                item: `${SITE_URL}/project`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: project.name,
                item: `${SITE_URL}/project/${project.id}`,
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
