"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="prosfora"
      className="scroll-mt-28 border border-charcoal/10 bg-white p-8 md:p-10"
    >
      <h2 className="display-title text-3xl text-charcoal">Φόρμα επικοινωνίας</h2>
      <p className="mt-3 text-sm text-metal">
        Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας.
      </p>

      {submitted ? (
        <div className="mt-8 border border-brand/30 bg-brand/5 p-6">
          <p className="font-semibold text-charcoal">Ευχαριστούμε για το μήνυμά σας.</p>
          <p className="mt-2 text-sm text-metal">
            Η φόρμα είναι σε demo λειτουργία. Η διασύνδεση αποστολής θα προστεθεί
            σε επόμενο στάδιο.
          </p>
        </div>
      ) : (
        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block tracking-[0.12em] uppercase text-metal">
                Ονοματεπώνυμο
              </span>
              <input
                required
                name="name"
                className="w-full border border-charcoal/15 bg-off-white px-4 py-3 outline-none transition focus:border-brand"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block tracking-[0.12em] uppercase text-metal">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="w-full border border-charcoal/15 bg-off-white px-4 py-3 outline-none transition focus:border-brand"
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-2 block tracking-[0.12em] uppercase text-metal">
              Τηλέφωνο
            </span>
            <input
              name="phone"
              className="w-full border border-charcoal/15 bg-off-white px-4 py-3 outline-none transition focus:border-brand"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-2 block tracking-[0.12em] uppercase text-metal">
              Θέμα
            </span>
            <select
              name="subject"
              className="w-full border border-charcoal/15 bg-off-white px-4 py-3 outline-none transition focus:border-brand"
              defaultValue="prosfora"
            >
              <option value="prosfora">Ζήτηση προσφοράς</option>
              <option value="proionta">Πληροφορίες προϊόντων</option>
              <option value="ypiresies">Υπηρεσίες</option>
              <option value="allo">Άλλο</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-2 block tracking-[0.12em] uppercase text-metal">
              Μήνυμα
            </span>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full resize-y border border-charcoal/15 bg-off-white px-4 py-3 outline-none transition focus:border-brand"
            />
          </label>
          <Button type="submit">Αποστολή μηνύματος →</Button>
        </form>
      )}
    </div>
  );
}

export function ContactAside() {
  return (
    <Reveal>
      <div className="border border-charcoal/10 bg-charcoal p-8 text-white md:p-10">
        <p className="eyebrow">ΣΑΜΑΡΑΣ</p>
        <h2 className="mt-4 display-title text-3xl">Στοιχεία επικοινωνίας</h2>
        <div className="tech-line mt-6 w-20" />
        <dl className="mt-8 space-y-6 text-sm">
          <div>
            <dt className="tracking-[0.14em] uppercase text-white/40">Διεύθυνση</dt>
            <dd className="mt-2 text-white/80">
              Placeholder — θα συμπληρωθεί με τη διεύθυνση της εταιρείας
            </dd>
          </div>
          <div>
            <dt className="tracking-[0.14em] uppercase text-white/40">Τηλέφωνο</dt>
            <dd className="mt-2 text-white/80">Placeholder τηλεφώνου</dd>
          </div>
          <div>
            <dt className="tracking-[0.14em] uppercase text-white/40">Email</dt>
            <dd className="mt-2 text-white/80">info@samaras.gr</dd>
          </div>
          <div>
            <dt className="tracking-[0.14em] uppercase text-white/40">Ωράριο</dt>
            <dd className="mt-2 text-white/80">Placeholder ωραρίου λειτουργίας</dd>
          </div>
        </dl>
      </div>
    </Reveal>
  );
}
