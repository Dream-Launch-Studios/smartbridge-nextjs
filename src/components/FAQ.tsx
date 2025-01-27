import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <section className="py-14">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="max-w-xl text-base mx-auto"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            How secure is the API?
          </AccordionTrigger>
          <AccordionContent>
            We implement enterprise-grade encryption to protect your data and
            ensure compliance with global standards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            Can I test the API for free?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Our Starter Plan is free and includes 10,000 API
            requests per month.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            What is this product?
          </AccordionTrigger>
          <AccordionContent>
            This is where you answer the first question in detail.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
