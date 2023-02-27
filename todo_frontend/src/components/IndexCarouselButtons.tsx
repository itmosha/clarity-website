import { Button, Heading } from '@chakra-ui/react';
import React from 'react';

type PrevNextButtonPropType = {
    enabled: boolean,
    onClick: () => void
}

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
    const { enabled, onClick } = props;

    return (
        <Button onClick={onClick} disabled={!enabled}>
            <Heading textColor={'white'}>
                Prev
            </Heading>
        </Button>
    );
}

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
    const { enabled, onClick } = props;

    return (
        <Button onClick={onClick} disabled={!enabled}>
            <Heading textColor={'white'}>
                Next
            </Heading>
        </Button>
    );
}