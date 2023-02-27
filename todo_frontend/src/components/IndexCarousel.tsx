import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { PrevButton, NextButton } from './IndexCarouselButtons';
import headingByIndex from './ItemsByIndex';

type PropType = {
    slides: number[],
    options?: EmblaOptionsType
}

const IndexCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnbled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi],
    );
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi],
    );
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi, setSelectedIndex]);
    
    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <Box
            mt={'20px'}
            position={'relative'}
        >
            <Box overflow={'hidden'} ref={emblaRef}>
                <Flex

                >
                    { slides.map((index) => (
                        <Box key={index} objectFit={'cover'}>
                            <Heading textColor={'#C2C6CA'} fontWeight={'500'} fontSize={'1.75rem'}>{ headingByIndex(index) }</Heading>
                        </Box>
                    ))}
                </Flex>
            </Box>

            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnbled} />
        </Box>
    )
}

export default IndexCarousel;
