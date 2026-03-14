import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Book Your Driving Lesson
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to get started? Reach out to us with the details below and we will get back to you to confirm your booking.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <Card>
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-semibold mb-4">What to Include When You Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                When reaching out to book a session, please provide the following information:
              </p>
              <ol className="space-y-4 text-base">
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-[24px]">1.</span>
                  <span><strong>First and Last Name</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-[24px]">2.</span>
                  <span><strong>Phone Number</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-[24px]">3.</span>
                  <span><strong>Package You Are Interested In</strong> (e.g. 1-Hour Lesson, 10-Lesson Package, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-[24px]">4.</span>
                  <span><strong>Preferred Date</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-[24px]">5.</span>
                  <span><strong>Preferred Time Slot</strong> (morning, afternoon, or evening)</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <Card className="mt-8 bg-muted/50">
            <CardContent className="pt-6 pb-6">
              <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
              <div className="space-y-4">
                <a
                  href="tel:7789160055"
                  data-ocid="booking.phone.link"
                  className="flex items-center gap-3 text-primary hover:underline"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="text-base font-medium">7789160055</span>
                </a>
                <a
                  href="mailto:jatwaldrivingschool@gmail.com"
                  data-ocid="booking.email.link"
                  className="flex items-center gap-3 text-primary hover:underline"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-base font-medium">jatwaldrivingschool@gmail.com</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
