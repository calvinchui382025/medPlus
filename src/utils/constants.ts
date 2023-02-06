import { keyframes } from '@mui/material';

export const niceBoxShadow = '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)';

export interface animateProps {
  animate?: boolean
}

export const moveRightAnimation = keyframes`
0%    {
  opacity: 0; 
  transform: translateX(-40px);
}
100%  {
  opacity: 1; 
  transform: translateX(0px);
}
`

export const moveLeftAnimation = keyframes`
0%    {
  opacity: 0;
  transform: translateX(40px);
}
100%  {
  opacity: 1;
  transform: translateX(0px);
}
`

export const commercialList = [
  'Commercial property and general liability',
  "Business owner's policies",
  'We offer Premium financing through AFCO.',
  'Commercial auto',
  'Umbrella excess coverage',
  "Worker's compensation",
  'Group health',
  'Life and dental',
  'Accounts receivable protection',
  'Insurance products to fund buy/sell agreements',
  'Key man insurance and executive bonus',
  'Directors and officers liability',
  'Managed care errors and omissions (including medical director)',
  'Self-insured/captive programs',
  'Medicare/Medicaid defense coverage',
  'Medical director'
];
export const personalList = [
  'Individual and family health (including health savings accounts)',
  'Group health',
  'Term and permanent life',
  'Premium financed life',
  'Long-term care',
  'Short-term and long-term disability',
  'Disability for highly compensated individuals'
];
export const professionalList1 = [
  'Occurrence or claims-made coverage',
  'Prior acts (nose coverage) and extended reporting period endorsements (tail coverage)',
  'We offer Premium financing through AFCO.',
  'Defense costs outside of policy limits',
  'Defendant\'s reimbursement',
  'Defense for state regulatory investigations',
  'Peer review and utilization review',
  'Individual and group coverage policies',
  'Protection for legal entities, ancillary medical professionals, employees, and volunteers',
  'Locum tenens (substitute physician\'s coverage)',
  'Medical director',
  'Staffing company coverage'
];
export const professionalList2 = [
  'Long-term care (for-profit and non-profit)',
  'Large and small hospitals',
  'Home health care and managed care',
  'Urban and rural clinics',
  'Ambulatory surgery centers',
  'Urgent care',
  'Dialysis centers',
  'MRI imaging centers'
];