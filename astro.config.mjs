import { defineConfig } from 'astro/config';
import astroExpressiveCode from 'astro-expressive-code';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://pepefeliblu.github.io',
    base: '/pepefeliblu',
    compressHTML: true,

    vite: {
        build: {
            minify: true
        }
    },

    markdown: {
        rehypePlugins: [
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
        ]
    },

    integrations: [
        astroExpressiveCode({
            themes: ['github-light', 'github-dark'],
            themeCssSelector: (theme) => theme.name === 'github-dark' ? '.dark' : ':root',
            styleOverrides: {
                borderRadius: '0.5rem',
                frames: {
                    frameBoxShadowCssValue: 'none',
                }
            }
        }),
        react(),
        sitemap()
    ]
});