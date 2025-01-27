import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    description: "Perfect for developers and small projects",
    price: "Free",
    features: ["Up to 10,000 API requests/month", "Basic NLP features"],
    cta: "Get Started for Free",
    ctaLink: "/signup",
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses",
    price: "$49",
    features: [
      "100,000 API requests/month",
      "Advanced NLP tools",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    ctaLink: "/upgrade",
  },
  {
    name: "Enterprise",
    description: "Customized for large-scale applications",
    price: "Custom",
    features: [
      "Unlimited requests",
      "Dedicated support team",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
  },
];

export function PricingCards() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Simple, Transparent Pricing for Every Stage
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
            Whether you&apos;re building your first app or <br /> scaling to
            millions of users, we&apos;ve got you covered.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="flex flex-col bg-gradient-to-b md:bg-gradient-to-b from-accent/30 to-accent/5 justify-between"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-gray-600 dark:text-gray-400">
                      /month
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={plan.ctaLink}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
