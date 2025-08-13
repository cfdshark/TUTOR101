import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Youtube, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import SectionContainer from "@/components/ui/section-container";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = insertContactSubmissionSchema.parse(formData);
      contactMutation.mutate(validatedData);
    } catch (error) {
      toast({
        title: "Validation error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
    }
  };

  const handleBooking = () => {
    const message = "Contact us at (+27) 83 862 3544 or tutor101lessons@gmail.com to book your session!";
    alert(message);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-tutor-blue to-tutor-blue-dark text-white">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4" data-testid="contact-title">
                Ready to <span className="text-tutor-yellow">Start Learning?</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed" data-testid="contact-description">
                Book your personalized tutoring session today. Choose the time and place that works best for you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-tutor-yellow rounded-lg flex items-center justify-center">
                  <Phone className="text-tutor-blue text-lg" />
                </div>
                <div>
                  <div className="font-semibold">Call/WhatsApp</div>
                  <a href="tel:+27838623544" className="text-tutor-yellow hover:text-tutor-yellow-light">
                    (+27) 83 862 3544
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-tutor-yellow rounded-lg flex items-center justify-center">
                  <Mail className="text-tutor-blue text-lg" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:tutor101lessons@gmail.com" className="text-tutor-yellow hover:text-tutor-yellow-light">
                    tutor101lessons@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-youtube">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Youtube className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-semibold">YouTube Channel</div>
                  <a href="https://www.youtube.com/@tutor101za" target="_blank" rel="noopener noreferrer"
                     className="text-tutor-yellow hover:text-tutor-yellow-light">
                    @tutor101za
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-location">
                <div className="w-12 h-12 bg-tutor-yellow rounded-lg flex items-center justify-center">
                  <MapPin className="text-tutor-blue text-lg" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-blue-100">Braamfontein, Johannesburg</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleBooking}
                className="bg-tutor-yellow text-tutor-blue hover:bg-tutor-yellow-light font-bold"
                data-testid="button-book-session-contact"
              >
                <Calendar className="mr-2" />
                Book Session Now
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-tutor-yellow text-tutor-yellow hover:bg-tutor-yellow hover:text-tutor-blue font-semibold"
                data-testid="button-youtube-contact"
              >
                <a href="https://www.youtube.com/@tutor101za" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2" />
                  Watch Videos
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-tutor-blue hover:bg-tutor-blue-dark text-white"
                disabled={contactMutation.isPending}
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
