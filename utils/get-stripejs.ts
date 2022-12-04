import { loadStripe, Stripe } from "@stripe/stripe-js";

// Singleton Pattern
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
