import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Gwer Donatus portfolio website.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-3xl mx-auto">
        <span className="label mb-3 block">Legal</span>
        <h1 className="heading-lg text-heading mb-8">Privacy Policy</h1>

        <div className="space-y-8 body-md">
          <div>
            <h2 className="font-display text-xl font-semibold text-heading mb-3">
              Information Collection
            </h2>
            <p>
              This website does not collect personal information beyond what is
              necessary for basic analytics and functionality. I use minimal
              tracking to understand how visitors interact with the site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-heading mb-3">
              Analytics
            </h2>
            <p>
              I may use privacy-focused analytics tools that do not track
              individual users or store personal data. These tools help me
              understand which content is most valuable to visitors.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-heading mb-3">
              Contact Form
            </h2>
            <p>
              When you use the contact form, the information you provide is used
              solely to respond to your inquiry. I do not share this information
              with third parties or use it for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-heading mb-3">
              Cookies
            </h2>
            <p>
              This website uses minimal cookies necessary for functionality,
              such as theme preferences. No tracking or advertising cookies are
              used.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-heading mb-3">
              Data Security
            </h2>
            <p>
              I take reasonable measures to protect any information submitted
              through this website. However, no method of transmission over the
              internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-heading mb-3">
              Changes to This Policy
            </h2>
            <p>
              I may update this privacy policy from time to time. Any changes will
              be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-heading mb-3">
              Contact
            </h2>
            <p>
              If you have any questions about this privacy policy, please contact
              me at{" "}
              <a
                href="mailto:hello@gwerdonatus.dev"
                className="text-accent hover:text-accent-light transition-colors"
              >
                hello@gwerdonatus.dev
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
