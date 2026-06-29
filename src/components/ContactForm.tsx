import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREE_ID } from "../data/site";

/* Contact form powered by Formspree (@formspree/react).
   Rendered with a client: directive in contact.astro so it's interactive. */
export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-[#d7e6f6] bg-[#EAF2FB] p-8 text-center sm:p-10">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy">Message sent! 🎉</h3>
        <p className="mt-2 text-[#5F5E5A]">
          Thank you for reaching out. I'll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-[#ece3d3] bg-[#FBF8F2] px-4 py-3 text-sm text-[#2c2c2a] outline-none transition-colors focus:border-[#2E6FB8]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy">Name</span>
          <input id="name" type="text" name="name" required placeholder="Your name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-navy">Email</span>
          <input id="email" type="email" name="email" required placeholder="you@example.com" className={inputClass} />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-[#E8A23D]" />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-navy">What can I help with?</span>
        <select name="topic" className={inputClass}>
          <option>Consulting / project</option>
          <option>RAG / AI assistant</option>
          <option>Forecasting / data science</option>
          <option>Research support</option>
          <option>Training / workshop</option>
          <option>Just saying hi</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-navy">Message</span>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a little about what you're working on…"
          className={inputClass + " resize-none"}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-[#E8A23D]" />
      </label>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-primary w-full sm:w-auto sm:self-start disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send message"}
        {!state.submitting && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>

      <ValidationError errors={state.errors} className="text-sm text-[#E8A23D]" />
    </form>
  );
}
