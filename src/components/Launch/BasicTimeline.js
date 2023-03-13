import React, { useCallback } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export const BasicTimeline = (props) => {
    const { step } = props;

    const getColor = useCallback((stepNumber, currentStep) => {
        if (stepNumber < currentStep) {
            return "success"; 
        } 
        if (stepNumber === currentStep) {
            return "warning";
        }
        return "grey"; 
    }, [step]); 

    return (
        <Timeline>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color={getColor(1, step)} />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Where</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color={getColor(2, step)} />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>When</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot color={getColor(3, step)}/>
            </TimelineSeparator>
            <TimelineContent>What</TimelineContent>
        </TimelineItem>
        </Timeline>
    );
}
