'use client';

import { useEffect, useState } from 'react';
import Dither from '../components/Dither';
import SplitText from '../components/SplitText';
import NavBottom from '../components/NavBottom';
import StickerPeel from '../components/StickerPeel';
import Sticker from '../../public/img/sticker.png';
import Link from 'next/link';
import {
    HiDocument,
    HiUser
} from 'react-icons/hi2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Hero() {
    const [stickerSize, setStickerSize] = useState(150);
    const [stickerPosition, setStickerPosition] = useState({ x: 40, y: -140 });

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const handleDownloadCV = () => {
        toast.warning('CV masih dalam tahap update! 🚀', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setStickerSize(240);
                setStickerPosition({ x: 20, y: -225 });
            } else {
                setStickerSize(150);
                setStickerPosition({ x: 10, y: -230 });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <ToastContainer/>
            <StickerPeel
                imageSrc={Sticker.src}
                width={stickerSize}
                rotate={0}
                peelBackHoverPct={10}
                peelBackActivePct={20}
                shadowIntensity={0.3}
                lightingIntensity={0.1}
                initialPosition={stickerPosition}
                className='z-50 cursor-target'
            />
            <div className="absolute inset-0 z-0">
                <Dither
                    waveColor={[0.5, 0.5, 0.5]}
                    disableAnimation={false}
                    enableMouseInteraction={false}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.05}
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10"></div>
            </div>
            <div className="relative z-40 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-9xl cursor-target">
                    <SplitText
                        text="</Hello, I'm Yanuar Ardhika>"
                        className="text-3xl md:text-6xl font-black text-white font-mono"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        tag="h1"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
                <div className="cursor-target mb-2">
                    <p className="max-w-2xl text-lg md:text-2xl text-shadow-white font-medium font-mono">
                        A Junior Web & Mobile Developer developing efficient and impactful digital systems
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                    <Link 
                        href={'/about'} 
                        className="group bg-white px-6 py-3 text-black rounded-full font-bold cursor-target text-center hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 ease-in-out font-mono flex items-center justify-center hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                        
                        <HiUser className='me-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10' size={24} />
                        <span className="relative z-10">About Me</span>
                    </Link>
                    <button 
                        onClick={handleDownloadCV} 
                        className="group bg-white/10 backdrop-blur-lg text-white px-6 py-3 border-2 border-white rounded-full font-bold cursor-target text-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out font-mono flex items-center justify-center hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                        
                        <HiDocument className='me-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10' size={24} />
                        <span className="relative z-10">Download CV</span>
                    </button>
                </div>
            </div>
            <NavBottom />
        </section>
    );
}