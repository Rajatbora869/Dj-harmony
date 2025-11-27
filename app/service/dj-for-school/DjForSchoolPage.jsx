"use client";
import PageHeader from '@/app/COMMON/PageHeader';
import React from 'react'
import DjPages from './DjPages';
import BenefitsSection from './BenefitsSection';
import OurServices from './OurServices';
import Footer from '@/app/COMMON/Footer';

export default function DjForSchoolPage() {
  return (
    <>
      <PageHeader title="DJ For School" />
      <DjPages />
      <BenefitsSection />
      <OurServices />
      <Footer />
   
      
    </>
  );
}
