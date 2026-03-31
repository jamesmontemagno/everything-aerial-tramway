import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const systems = defineCollection({
	loader: glob({ base: './src/content/systems', pattern: '**/*.md' }),
	schema: z.object({
		officialName: z.string(),
		commonName: z.string().optional(),
		systemType: z.enum(['aerial_tramway', 'gondola_lift', 'funicular']),
		purpose: z.enum(['scenic_destination', 'commuter_transit', 'mixed_use']),
		country: z.string(),
		cityOrRegion: z.string(),
		openedYear: z.number().int(),
		operator: z.string(),
		rideDurationMin: z.number().int(),
		verticalRiseM: z.number().int().optional(),
		lineLengthM: z.number().int().optional(),
		capacityPerCabin: z.number().int().optional(),
		departureModel: z.string(),
		weatherSensitivity: z.string(),
		accessibilitySummary: z.string(),
		heroStat: z.string(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
	}),
});

export const collections = { systems };
