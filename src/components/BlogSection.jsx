import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Mapeo de idiomas a códigos de NewsAPI
const languageMap = {
  en: 'en',
  es: 'es',
  fr: 'fr',
  zh: 'zh'
};
const searchTerms = {
    en: 'US immigration',
    es: 'inmigración Estados Unidos',
    fr: 'immigration États-Unis',
  };



  const fetchNews = async (language = 'es') => {
    const term = encodeURIComponent(searchTerms[language] || searchTerms.es);
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${term}&language=${language}&sortBy=publishedAt&apiKey=aa0aefda2b6b4501b8c08a211b9f5f6d`
      );
      
      // Si no hay noticias, intenta con inglés
      if (!data.articles.length) {
        console.warn(`No se encontraron noticias en ${language}, intentando en inglés...`);
        const fallbackTerm = encodeURIComponent(searchTerms.en);
        const { data: fallbackData } = await axios.get(
          `https://newsapi.org/v2/everything?q=${fallbackTerm}&language=en&sortBy=publishedAt&apiKey=aa0aefda2b6b4501b8c08a211b9f5f6d`
        );
        return fallbackData.articles.slice(0, 4);
      }
  
      return data.articles.slice(0, 4);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      return [];
    }
  };
  

const BlogSection = () => {
  const { i18n } = useTranslation();
  const currentLanguage = languageMap[i18n.language] || 'es';

  const { data: noticias, isLoading, error } = useQuery({
    queryKey: ["news", currentLanguage],
    queryFn: () => fetchNews(currentLanguage),
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 2,
  });

  return (
    <motion.section 
      className="py-20 text-center bg-gradient-to-b from-gray-100 to-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-semibold text-gray-800 mb-6 tracking-wide">
      {i18n.t("news.info.blog_title")}
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        {i18n.t("news.info.blog_description")}
      </p>

      {isLoading && <p className="text-gray-600">Cargando noticias...</p>}
      {error && <p className="text-red-600">Error al cargar noticias</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {noticias &&
          noticias.map((noticia, index) => (
            <motion.a 
              key={index} 
              href={noticia.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg hover:border-yellow-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {noticia.urlToImage && (
                <img 
                  src={noticia.urlToImage} 
                  alt={noticia.title} 
                  className="w-full h-40 object-cover rounded-md mb-4" 
                />
              )}
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {noticia.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {noticia.description ? noticia.description.slice(0, 100) + "..." : "Sin descripción"}
              </p>
              <span className="mt-3 inline-block text-yellow-600 font-medium text-sm hover:underline">
                {i18n.t("news.info.read_more")}
              </span>
            </motion.a>
          ))}
      </div>
    </motion.section>
  );
};

export default BlogSection;