'use client';

import Dither from '../components/Dither';
import SplitText from '../components/SplitText';
import NavBottom from '../components/NavBottom';
import StickerPeel from '../components/StickerPeel';
import Sticker from '../../public/img/sticker.png';

export default function Hero() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <StickerPeel
                imageSrc={Sticker.src}
                width={160}
                rotate={0}
                peelBackHoverPct={10}
                peelBackActivePct={20}
                shadowIntensity={0.3}
                lightingIntensity={0.1}
                initialPosition={{ x: 40, y: -140 }}
                className='z-50'
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
            <div className="relative z-40 flex flex-col items-center justify-center gap-3 text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-9xl">
                    <SplitText
                        text="</Hello, I'm Yanuar Ardhika>"
                        className="text-3xl md:text-6xl font-extrabold text-white font-nokia"
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
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-2 shadow-2xl border border-gray-100">
                    <p className="max-w-md text-xs md:text-lg text-shadow-white font-semibold font-nokia">
                        I am a Junior Web & Mobile Developer
                    </p>
                </div>
            </div>
            <NavBottom />
        </section>
    );
}