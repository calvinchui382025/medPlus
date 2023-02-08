import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { keyframes } from '@mui/material';
//======================================================
export const navItems = ['Home', 'About', 'Products', 'Liability', 'Quote', 'Carriers', 'Contact'];
//======================================================
export const niceBoxShadow = '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)';
//======================================================
export interface animateProps {
  animate?: boolean
}
//======================================================
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
export const moveUpAnimation = keyframes`
0%    {
  opacity: 0;
  transform: translateY(40px);
}
100%  {
  opacity: 1;
  transform: translateY(0px);
}
`
export const moveDownAnimation = keyframes`
0%    {
  opacity: 0;
  transform: translateY(-40px);
}
100%  {
  opacity: 1;
  transform: translateY(0px);
}
`

export const fadeOut = keyframes`
0%    {
  opacity: 1;
  }
  100%  {
    opacity: 0;
    visibility: hidden;
  }
`

export const fadeIn = keyframes`
0%    {
  opacity: 0;
  visibility: visible;
  }
  100%  {
    opacity: 1;
  }
`

export const contactFadeOut = keyframes`
0%    {
  opacity: 1;
  }
  100%  {
    opacity: 0;
  }
`

export const contactFadeIn = keyframes`
0%    {
  opacity: 0;
  }
  100%  {
    opacity: 1;
  }
`
//======================================================
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
//======================================================
export const HomeCards = [
  {
    title: 'Professional Liability Insurance',
    icon: <VolunteerActivismIcon sx={{fontSize: 50}}  />,
    description: "The medical profession is more challenged today by medical malpractice than it has been at any other point in history. You'd like to think it will never happen to you, but unfortunately, it can.",
  },
  {
    title: 'Commercial Insurance Products',
    icon: <LocalLibraryIcon sx={{fontSize: 50}}  />,
    description: 'Our experienced staff is committed to delivering commercial products tailored to meet your professional needs. We are ready to work with you to develop a program that makes sense for you and your employees.',
  },
  {
    title: 'Personal Insurance Products',
    icon: <Diversity1Icon sx={{fontSize: 50}}  />,
    description: "Life and health insurance have many variables and decisions. How much coverage is enough and what type of policy is best for you and your family are just two of the questions that might arise. After determining your personal product needs, our agency will provide you with the most comprehensive plan with the greatest value for you and your family.",
  },
]
//======================================================
export const CarriersList = [
  {
    name: 'ACE',
    description: "The ACE Group is one of the world's leading global commercial property and casualty insurance organizations. ACE serves the property and casualty insurance needs of businesses of all sizes in a broad range of industries. They also provide specialized insurance products—such as personal accident, supplemental health and life insurance—to individuals in select countries.",
    rating: "AM Best Rating: A++",
    url: "https://aceinsurancegroup.com/"
  },
  {
    name: 'Admiral Insurance Company',
    description: "Admiral Insurance Company is a true surplus lines insurer with broad treaties operating as a licensed carrier in New Jersey and Delaware. They are an approved surplus lines carrier writing on a non-admitted basis in all other states plus Canada, Puerto Rico and the U.S. Virgin Islands.",
    rating: "AM Best Rating: A+",
    url: "https://www.admiralins.com"
  },
  {
    name: 'Arch',
    description: "Arch Insurance Group, a division of Arch Capital Group Ltd., is a market-leading specialty insurer providing a wide range of property, casualty and specialty insurance for corporations, professional firms and financial institutions across the United States and Canada.",
    rating: "AM Best Rating: A+",
    url: "https://insurance.archgroup.com/",
  },
  {
    name: 'Capitol Specialty Insurance Co.',
    description: "Capitol Insurance Companies has been insuring business owners since 1959. Capitol underwrites specialty insurance products in niche areas of the commercial property and casualty and the fidelity and surety market segments.",
    rating: "AM Best Rating: A",
    url: "https://www.capspecialty.com/",
  },
  {
    name: 'Care Professional Liability RRG',
    description: "The founders, owners, and operators of CARE Professional Liability Association are doctors who once stood in the shoes of the practicing physician and worked on the front lines of the medical care profession. Care was founded by and for physicians who need protection, support and choice when it comes to professional medical malpractice liability insurance products and services.",
    rating: "AM Best Rating: NR-5",
    url: "https://www.care-ins.com/",
  },
  {
    name: 'Catlin Insurance Company Limited',
    description: "Catlin US was formed in April 2006 as the fourth underwriting platform of Catlin Group Limited. Over the past 23 years, Catlin Group Limited has evolved into a leading global specialty insurer and reinsurer, writing more than $3.4 billion annually in gross premiums.",
    rating: "AM Best Rating: A",
    url: "https://axaxl.com/reinsurance/our-companies/catlin-insurance-company-ltd",
  },
  {
    name: 'The Doctors Company',
    description: "The Doctors Company is committed to guarding your livelihood and your reputation. They are on a mission to relentlessly defend, protect, and reward physicians who advance the practice of good medicine. At The Doctors Company, you are not just a policyholder, but a member with a stake in the company.",
    rating: "AM Best Rating: A",
    url: "https://www.thedoctors.com/",
  },
  {
    name: 'Executive Risk/Chubb',
    description: "For more than 125 years, the Chubb Group of Insurance Companies has been delivering exceptional property and casualty insurance products and services to businesses and individuals around the world. The Chubb Corporation reported $48 billion in assets and $13.2 billion in revenues in 2008.",
    rating: "AM Best Rating: A++",
    url: "https://www.chubb.com/",
  },
  {
    name: 'General Star Indemnity Company',
    description: "The General Star companies underwrite excess, surplus and specialty property and casualty insurance on an admitted and non-admitted basis through appointed wholesale brokers. General Star Management Company provides underwriting, claims and administrative services on behalf of General Star Indemnity Company and General Star National Insurance Company. General Star companies are wholly owned subsidiaries of General Reinsurance Corporation, a Berkshire Hathaway Company.",
    rating: "AM Best Rating: A++",
    url: "https://www.generalstar.com/",
  },
  {
    name: 'Hudson Insurance Company',
    description: "Hudson Insurance Group is a specialty insurance underwriter of primary and excess property and casualty insurance headquartered in New York City with offices throughout the U.S. Hudson Insurance Group underwrites on an admitted and non-admitted basis through Hudson Insurance Company and Hudson Specialty Insurance Company.",
    rating: "AM Best Rating: A",
    url: "https://hudsoninsgroup.com/",
  },
  {
    name: 'James River',
    description: "James River Insurance Company operates as an excess and surplus carrier in all 50 states plus Washington, DC.",
    rating: "AM Best Rating: A",
    url: "https://jrvrgroup.com/james-river-insurance",
  },
  {
    name: 'Lancet Indemnity',
    description: "Domiciled in Nevada, Lancet Indemnity is a Physician Owned and Directed Professional Liability Insurance carrier that utilizes professional Insurance Executives for the underwriting, development and implementation process of our several coverage options. While providing traditional Medical Malpractice coverage, Lancet Indemnity has created unique programs whereby the Insured/Medical Professional may retain a portion of their annual premium dollars through their membership with Lancet Indemnity.",
    rating: "AM Best Rating: NR-1",
    url: "https://lancetindemnity.com/",
  },
  {
    name: 'Lexington Insurance Company',
    description: "Lexington Insurance Company, a Chartis Company, is the leading U.S.-based surplus lines insurer. Lexington operates through many divisions: Property, Casualty, Programs, Healthcare, and Personal Lines.",
    rating: "AM Best Rating: A",
    url: "https://www.lexingtoninsurance.com/home",
  },
  {
    name: "Lloyd’s of London",
    description: "Lloyd’s is the world’s leading specialist insurance market, conducting business in over 200 countries and territories worldwide – and is often the first to insure new, unusual or complex risks.",
    rating: "AM Best Rating: A",
    url: "https://www.lloyds.com/",
  },
  {
    name: 'Lone Star Alliance RRG',
    description: "Lone Star Alliance, Inc., a risk retention group (LSA) provides medical professional liability insurance to physicians, dentists, allied health care professionals, and groups nationwide. We provide flexible, superior coverage to support groups and individual practices wherever they grow. LSA is operated by Texas Medical Liability Trust (TMLT) for management and administrative services and is reinsured by Texas Medical Insurance Company (TMIC).",
    rating: "AM Best Rating: A",
    url: "https://www.lonestara.com/home",
  },
  {
    name: 'Medical Protective Insurance Co.',
    description: "Medical Protective, a Warren Buffett/Berkshire Hathaway company, is the nation's highest-rated medical malpractice carrier, according to both S&P and A.M. Best. They have been providing unmatched strength, winning defense, and superior solutions to physicians, dentists and other healthcare providers since 1899.",
    rating: "AM Best Rating: A++",
    url: "https://www.medpro.com/",
  },
  {
    name: 'National Fire & Marine',
    description: "National Indemnity Company is, today, one of the leading property/casualty members of the Berkshire Hathaway group of insurance companies. Stock control changed from founder Jack Ringwalt to Berkshire Hathaway Inc. in March of 1967.",
    rating: "AM Best Rating: A++",
    url: "https://insurance.mo.gov/",
  },
  {
    name: 'NORCAL Mutal',
    description: "More than 40 years ago, a group of physicians in Northern California — faced with a crisis in the liability insurance industry that threatened their practices — banded together to start a new policyholder-owned and physician-directed insurance company for the betterment of their fellow physicians. That company was NORCAL Mutual. Forty years later, they’ve grown and evolved to meet the changing needs of the industry, becoming a national company serving multiple generations of physicians, while still holding true to their roots.",
    rating: "AM Best Rating: A",
    url: "https://www.norcal-group.com/",
  },
  {
    name: 'PLICO',
    description: "In 1979, physicians across the state of Oklahoma pulled together in a time of need to form a company to help support and protect physicians. Thirty years later, PLICO continues to meet those needs and is challenged to respond to the radical changes within the medical environment.",
    rating: "AM Best Rating: A+",
    url: "https://plico.com/",
  },
  {
    name: 'ProAssurance',
    description: "ProAssurance Corporation is one of the largest writers of medical professional liability insurance in America through its subsidiary companies: ProAssurance Indemnity Company, Inc., ProAssurance Casualty Company, ProAssurance National Capital Insurance Company, ProAssurance Wisconsin Insurance Company, Excess and Surplus Lines company ProAssurance Specialty Insurance Company, Inc., and—as of April 1, 2009—Podiatry Insurance Company of America, 'PICA'.",
    rating: "AM Best Rating: A+",
    url: "https://www.proassurance.com/",
  },
  {
    name: 'Professional Underwriters Liability Insurance Company (PULIC)',
    description: "PULIC specializes in medical liability protection for physicians, surgeons, dentists, podiatrists and other medical professionals who have difficulty finding coverage within the standard markets, been denied coverage, or whose policies have been nonrenewed or canceled.",
    rating: "AM Best Rating: A",
    url: "https://puainc.com/",
  },
  {
    name: 'Texas Hospital Insurance Exchange',
    description: "Insuring hospitals is the Texas Hospital Insurance Exchange’s specialty. A reciprocal exchange, owned by the active subscribers, THIE provides a comprehensive range of affordable business insurance products and services for Texas hospitals. By focusing on a single industry, THIE brings unmatched expertise and insight into the needs and challenges Texas hospitals face.",
    rating: "AM Best Rating: B+",
    url: "https://thie.com/",
  },
  {
    name: 'Texas Medical Liability Trust',
    description: "Texas Medical Liability Trust (TMLT) is a unique, not-for-profit health care liability claim trust owned by its physician policyholders. TMLT is not an insurance company, but a self-insured trust established by Texas Insurance Code Article 21.49-4 to provide coverage against health care liability claims to members of the Texas Medical Association. The Trust has a long record of providing quality coverage at responsible prices. Created in 1979, TMLT has grown to be the largest and most respected medical liability provider in the state, protecting more than 14,500 Texas physicians.",
    rating: "AM Best Rating: A",
    url: "https://www.tmlt.org/",
  },
  {
    name: 'United National Insurance Company',
    description: "United National Group focuses exclusively on the program market. Targeting specific classes, United National distributes property, general liability, and professional lines products through program administrators with specific binding authority.",
    rating: "AM Best Rating: A",
    url: "https://unitednat.com/",
  },
]

export const CarrierRatingColorObj: { [key: string]: string } = {
  "A++": "green",
  "A+": "green",
  "A": "green",
  'A-': 'green',
  "B++": "green",
  "B+": "green",
  "B": "orange",
  "C++": "orange",
  "C+": "orange",
  "C": "red",
  "C-": "red",
  "D": "red",
  // "E": "black",
  // "F": "black",
  // "S": "black",
  "NR-1": "#2b76c3",
  "NR-2": "#2b76c3",
  "NR-3": "#2b76c3",
  "NR-4": "#2b76c3",
  "NR-5": "#2b76c3",

}