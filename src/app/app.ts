import { Component } from '@angular/core';

type Metric = {
  value: string;
  label: string;
  tone?: 'accent' | 'dark';
};

type FeatureCard = {
  title: string;
  description: string;
  icon: string;
};

type Step = {
  number: string;
  title: string;
  description: string;
};

type Stat = {
  value: string;
  description: string;
};

type Plan = {
  name: string;
  price: string;
  cadence: string;
  recommended?: boolean;
  features: string[];
  accent: 'light' | 'dark';
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly navItems = ['Products', 'Customers', 'Pricing', 'Support'];

  protected readonly logos = ['Pingdom', 'ClickUp', 'monday.com', 'Dropbox', 'Spotify'];

  protected readonly featureCards: FeatureCard[] = [
    {
      icon: '↗',
      title: 'Zero-Fee Transfers',
      description: 'Send money around the world with transparent rates and no hidden costs.'
    },
    {
      icon: '⌁',
      title: 'Smart Global Wallet',
      description: 'Hold, move and organize multiple currencies from one polished dashboard.'
    },
    {
      icon: '◈',
      title: 'Ironclad Security',
      description: 'Advanced encryption and real-time fraud monitoring keep every payment protected.'
    }
  ];

  protected readonly heroMetrics: Metric[] = [
    { value: '100K+', label: 'Accounts opened globally.', tone: 'accent' },
    { value: 'Zero', label: 'Hidden fees', tone: 'accent' },
    { value: '24/7', label: 'Access to funds and customer support.', tone: 'accent' }
  ];

  protected readonly setupSteps: Step[] = [
    {
      number: '1',
      title: 'Quick Sign Up',
      description: 'Open your account in just minutes with a guided onboarding flow.'
    },
    {
      number: '2',
      title: 'Add Funds to Your Vault',
      description: 'Transfer funds securely and start using your account right away.'
    },
    {
      number: '3',
      title: 'Begin Your Savings Journey',
      description: 'Set savings goals or explore smarter tools designed for everyday banking.'
    }
  ];

  protected readonly bankingStats: Stat[] = [
    { value: '2%', description: 'Interest on savings accounts.' },
    { value: '$500M+', description: 'Transactions processed securely each month.' },
    { value: '10+', description: 'Countries served proudly.' }
  ];

  protected readonly plans: Plan[] = [
    {
      name: 'Basic',
      price: '£0',
      cadence: '/month',
      accent: 'light',
      features: ['Free transfers', 'Savings tools', '24/7 Support', 'Secure transactions']
    },
    {
      name: 'Premium',
      price: '£6.99',
      cadence: '/month',
      recommended: true,
      accent: 'dark',
      features: [
        'Higher savings rates',
        'Multiple currency accounts',
        'New investment tools',
        'Automated budget tracking',
        'Personalized recommendations'
      ]
    }
  ];

  protected readonly footerGroups = [
    {
      heading: 'SOLUTIONS',
      links: ['Personal Banking', 'Business Banking', 'Investments']
    },
    {
      heading: 'COMPANY',
      links: ['About Us', 'Careers', 'Contact']
    },
    {
      heading: 'LEARN',
      links: ['Blog', 'Guides', 'FAQs']
    },
    {
      heading: 'SERVICES',
      links: ['Customer Support', 'Loans', 'Insurance']
    }
  ];
}
