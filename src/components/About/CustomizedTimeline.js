import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          06/2025 - 08/2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ border: '2px solid #000' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Summer Internship, YONNOV’IA – Marseille, France
          </Typography>
          <Typography>
            Designed and developed an intelligent virtual assistant integrated into the Odoo 17 open-source ERP platform.
          </Typography>
          <Typography>
            Adapted and fine-tuned Large Language Models (LLMs) to meet specific business logic and user interaction requirements.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10/2024 - 03/2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ border: '2px solid #000' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Robotics Instructor, EIF Menzah 1 – Tunis, Tunisia
          </Typography>
          <Typography>
            Taught basic robotics and programming concepts to children aged 8–12 through interactive and hands-on sessions.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ border: '2px solid #000' }} />
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Summer Internship, ACOBA – Monastir, Tunisia
          </Typography>
          <Typography>
            Scraped real-time real estate data from French website (Leboncoin) using Python and API integrations.
          </Typography>
          <Typography>
            Engineered an intelligent chatbot from scratch using the Rasa framework to automate user queries and provide filtered property info.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot variant="outlined" sx={{ border: '2px solid #000' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Summer Internship, Draxlmaier – Monastir, Tunisia
          </Typography>
          <Typography>
            Worked on optimizing workflow in the logistics department by identifying and implementing improvements to enhance operational efficiency.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
