import { z } from 'zod';

const lensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type ILens = z.infer<typeof lensZodSchema>;

interface ILensWithId extends ILens {
  _id: string;
}

export default ILens;
export { ILensWithId, lensZodSchema };
