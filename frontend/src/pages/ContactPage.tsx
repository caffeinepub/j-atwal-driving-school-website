import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <Card>
            <CardContent className="pt-8 pb-8">
              <p className="text-base text-foreground">
                For Booking Queries, email jatwaldrivingschool.ca. Include your name, email, phone number.
              </p>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <Card className="mt-8 bg-muted/50">
            <CardContent className="pt-6 pb-6">
              <h3 className="font-semibold mb-4 text-lg">Reach Us Directly</h3>
              <div className="space-y-4">
                <a
                  href="tel:7789160055"
                  data-ocid="contact.phone.link"
                  className="flex items-center gap-3 text-primary hover:underline"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="text-base font-medium">7789160055</span>
                </a>
                <a
                  href="mailto:jatwaldrivingschool@gmail.com"
                  data-ocid="contact.email.link"
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
