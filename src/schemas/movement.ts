import { z } from 'zod';

const Movement = z.object({
	amount: z.number({
		required_error: 'Amount is required',
	}),
	transactionType: z.string({
		required_error: 'Type is required',
	}),
	tags: z.string().array(),
});

const validateMovement = (movementData: any) =>
	Movement.safeParse(movementData);

export { validateMovement };
