import { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { cardVariant } from '../constants/animationVariants';

const TestimonialsCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: false
    });
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    // Auto-play
    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000);

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <AiFillStar key={i} className="text-primary text-lg" />
                ) : (
                    <AiOutlineStar key={i} className="text-primary text-lg" />
                )
            );
        }
        return stars;
    };

    const testimonials = [
        {
            name: "Fatou D., 28 ans",
            rating: 5,
            text: "Pour la première fois en 10 ans, j'ai pu enseigner normalement pendant mes règles. Je recommande ces patchs à toutes les femmes qui souffrent."
        },
        {
            name: "Aminata T., 32 ans",
            rating: 3,
            text: "Le patch a réduit ma douleur de 70% en moins d'une heure. Je peux maintenant travailler normalement même les premiers jours."
        },
        {
            name: "Mariama S., 24 ans",
            rating: 5,
            text: "Fini les journées gâchées par les douleurs ! Avec Luna Soulage, je peux enfin profiter de ma vie même pendant mes règles."
        },
        {
            name: "Aïcha K., 30 ans",
            rating: 4,
            text: "Naturel et efficace ! Je ne pourrais plus me passer de ces patchs. Mes collègues me demandent mon secret."
        },
        {
            name: "Khadija M., 26 ans",
            rating: 5,
            text: "Révolutionnaire ! Plus besoin de prendre des médicaments tous les jours. Ces patchs ont changé ma vie."
        },
        {
            name: "Salma B., 29 ans",
            rating: 4,
            text: "Je recommande vivement ! Enfin une solution qui fonctionne réellement et qui est respectueuse de mon corps."
        }
    ];

    return (
        <div className="relative mb-7">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="flex-[0_0_100%] min-w-0 px-4"
                        >
                            <motion.div
                                className="h-64 sm:h-72 md:h-80 flex items-center justify-center p-6"
                                variants={cardVariant}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto w-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg md:text-xl font-bold text-primary">
                                            {testimonial.name}
                                        </h3>
                                        <div className="flex flex-shrink-0">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                    <p className="text-txt italic text-sm md:text-base leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === selectedIndex 
                                ? 'bg-primary' 
                                : 'bg-primary/30 hover:bg-primary/50'
                        }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Aller au témoignage ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-primary transition-colors duration-200 z-10"
                aria-label="Témoignage précédent"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-primary transition-colors duration-200 z-10"
                aria-label="Témoignage suivant"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default TestimonialsCarousel;