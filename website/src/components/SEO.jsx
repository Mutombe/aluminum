import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = [],
  image = '/og-image.jpg',
  url = '',
  type = 'website'
}) => {
  const siteName = 'Architectural Aluminium';
  const baseUrl = 'https://archaluminium.co.zw';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Zimbabwe's Leading Aluminium Fabricator`;
  const fullUrl = `${baseUrl}${url}`;
  
  const defaultDescription = "Architectural Aluminium is Zimbabwe's leading fabricator of aluminium, shop fitting and joinery products. 30+ years of excellence in fenestration, shopfitting, and commercial building solutions.";
  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = [
    'aluminium',
    'aluminum',
    'shop fitting',
    'joinery',
    'Zimbabwe',
    'Harare',
    'windows',
    'doors',
    'curtain walling',
    'shopfronts',
    'fabricator',
    'manufacturer'
  ];
  const metaKeywords = [...new Set([...keywords, ...defaultKeywords])].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZW" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Architectural Aluminium" />
      <meta name="geo.region" content="ZW-HA" />
      <meta name="geo.placename" content="Harare" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Architectural Aluminium",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": defaultDescription,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "25 Connaught Road, Avondale",
            "addressLocality": "Harare",
            "addressCountry": "ZW"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+263778498911",
            "contactType": "sales",
            "email": "sales@hotali.co.zw"
          },
          "sameAs": [
            "https://facebook.com/archalu",
            "https://linkedin.com/company/architectural-aluminium",
            "https://instagram.com/archalu_zw"
          ],
          "foundingDate": "1994",
          "numberOfEmployees": "50+",
          "areaServed": {
            "@type": "Country",
            "name": "Zimbabwe"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
