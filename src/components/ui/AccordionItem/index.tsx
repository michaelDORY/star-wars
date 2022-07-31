import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface Props {
  summary: string
  children: ReactNode
}

const AccordionItem: FC<Props> = (props) => {
  const { summary, children } = props
  return (
    <Box key={summary}>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary}</AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default AccordionItem
