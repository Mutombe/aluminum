import React from 'react';
import { createContext, useContext, useState, useCallback } from 'react';
import { searchableContent, services, projects, news, careers } from '../data/content';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  const performSearch = useCallback((query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const normalizedQuery = query.toLowerCase().trim();
    const results = [];

    // Search through searchable content
    searchableContent.forEach(item => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
      const keywordMatch = item.keywords.some(kw => kw.toLowerCase().includes(normalizedQuery));
      
      if (titleMatch || keywordMatch) {
        results.push({
          ...item,
          relevance: titleMatch ? 2 : 1
        });
      }
    });

    // Search through services
    services.forEach(service => {
      const titleMatch = service.title.toLowerCase().includes(normalizedQuery);
      const descMatch = service.description.toLowerCase().includes(normalizedQuery);
      const featureMatch = service.features.some(f => f.toLowerCase().includes(normalizedQuery));
      
      if (titleMatch || descMatch || featureMatch) {
        results.push({
          type: 'service',
          title: service.title,
          path: `/services#${service.id}`,
          keywords: service.features,
          relevance: titleMatch ? 3 : descMatch ? 2 : 1
        });
      }
    });

    // Search through projects
    projects.forEach(project => {
      const titleMatch = project.title.toLowerCase().includes(normalizedQuery);
      const descMatch = project.description.toLowerCase().includes(normalizedQuery);
      const categoryMatch = project.category.toLowerCase().includes(normalizedQuery);
      
      if (titleMatch || descMatch || categoryMatch) {
        results.push({
          type: 'project',
          title: project.title,
          path: `/projects#project-${project.id}`,
          keywords: [project.category, project.location],
          relevance: titleMatch ? 3 : 2
        });
      }
    });

    // Search through news
    news.forEach(article => {
      const titleMatch = article.title.toLowerCase().includes(normalizedQuery);
      const excerptMatch = article.excerpt.toLowerCase().includes(normalizedQuery);
      
      if (titleMatch || excerptMatch) {
        results.push({
          type: 'news',
          title: article.title,
          path: `/news#article-${article.id}`,
          keywords: [article.category],
          relevance: titleMatch ? 3 : 2
        });
      }
    });

    // Search through careers
    careers.forEach(job => {
      const titleMatch = job.title.toLowerCase().includes(normalizedQuery);
      const deptMatch = job.department.toLowerCase().includes(normalizedQuery);
      
      if (titleMatch || deptMatch) {
        results.push({
          type: 'career',
          title: job.title,
          path: `/careers#job-${job.id}`,
          keywords: [job.department, job.type],
          relevance: titleMatch ? 3 : 2
        });
      }
    });

    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance);
    
    // Remove duplicates based on path
    const uniqueResults = results.filter((item, index, self) =>
      index === self.findIndex(t => t.path === item.path)
    );

    setSearchResults(uniqueResults.slice(0, 10)); // Limit to 10 results
  }, []);

  const value = {
    isSearchOpen,
    searchQuery,
    searchResults,
    openSearch,
    closeSearch,
    performSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
