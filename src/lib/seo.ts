import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'James Hartley ─ Developer';
	const description = "Hey 👋 I'm James, a developer";

	return {
		title,
		description,
		canonical: `https://jameshartley.netlify.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'jameshartley_portfolio',
			url: `https://jameshartley.netlify.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://jameshartley.netlify.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@jameshartleydev',
			site: '@jameshartleydev',
		},
		...props,
	};
}
