
// Add missing React import to resolve namespace error for React.ReactNode
import React from 'react';

export enum Page {
  HOME = 'home',
  CONSULTANTS = 'consultants',
  TUTORS = 'tutors',
  WEB_DESIGN = 'web-design',
  CONTACT = 'contact'
}

export interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
}

export interface Branch {
  id: Page;
  title: string;
  description: string;
  icon: React.ReactNode;
}