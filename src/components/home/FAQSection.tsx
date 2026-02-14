import { siteConfig } from "@/config/siteConfig";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto max-w-3xl">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="mt-10">
        {siteConfig.faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
