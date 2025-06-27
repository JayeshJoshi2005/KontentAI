import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('ai_output', {
  id: serial('id').primaryKey(),
  formData: varchar('form_data', { length: 8192 }),
  aiResponse: text('ai_response'),
  templateSlug: varchar('template_slug', { length: 255 }),
  createdBy: varchar('created_by', { length: 255 }),
  createdAt: varchar('created_at', { length: 100 }),
});

export const UserSubscription = pgTable('user_subscription', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }),
  userName: varchar('user_name', { length: 255 }),
  active: boolean('active'),
  paymentId: varchar('payment_id', { length: 255 }),
  joinDate: varchar('join_date', { length: 100 }),
});
