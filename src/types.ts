export interface BenefitItem {
  id: string;
  text: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  stars: number;
  shortQuote: string;
  outcome: string;
  fullQuote?: string;
  image?: string;
  location?: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  result: string;
}

export interface TimelineDay {
  day: string;
  title: string;
  description: string;
}

export interface BonusItem {
  id: string;
  title: string;
  value: number;
  description: string;
  isVipPremium?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
