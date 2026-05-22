// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
import starlightHeadingBadges from 'starlight-heading-badges'
import starlightGitHubAlerts from 'starlight-github-alerts'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SnoringPony',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/boherm/SnoringPony' }],
            customCss: [
                './src/assets/custom.css',
            ],
            plugins: [
                starlightLinksValidator(),
                starlightHeadingBadges(),
                starlightGitHubAlerts(),
            ],
            defaultLocale: 'root',
            locales: {
                root: { label: 'Français', lang: 'fr' },
                en: { label: 'English' }
            },
            sidebar: [
                { slug: 'welcome' },
                { slug: 'premier-lancement' },
                {
                    label: 'Interfaces',
                    items: [{ autogenerate: { directory: 'interfaces' } }],
                },
                {
                    label: 'Cuelists',
                    items: [{ autogenerate: { directory: 'cuelists' } }],
                },
                {
                    label: 'Cues',
                    items: [{ autogenerate: { directory: 'cues' } }],
                },
            ],
        }),
	],
});
