import SplitContainer from "@/components/common/container/split-container";
import FaqItems from "@/components/common/faq/faq-items";
import { faqData } from "@/data/faq";

type Props = object;

export default function Faq({}: Props) {
  return (
    <section className="w-[92%] mx-auto py-12">
      <SplitContainer className="space-y-12 lg:flex-row">
        <div className="text-xl xl:sticky xl:top-28 xl:left-0 xl:h-full space-y-4">
          <p className="text-xl">
            FAQs
          </p>
          <p className="font-neue-montreal shadow-text-gradient text-5xl font-medium">
          Have questions?
          </p>
        </div>
        <div className="w-full lg:w-[60%]">
            <FaqItems faqData={faqData} />
        </div>
      </SplitContainer>
    </section>
  );
}
