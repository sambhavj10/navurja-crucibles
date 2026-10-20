import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Building, Calendar, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

interface Contact {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const { data: contacts, isLoading, error } = useQuery<Contact[]>({
    queryKey: ['/api/contacts'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8" data-testid="admin-title">
            Contact Form Submissions
          </h1>
          <div className="grid gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-1/3"></div>
                  <div className="h-3 bg-muted rounded w-1/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8" data-testid="admin-title">
            Contact Form Submissions
          </h1>
          <Card>
            <CardContent className="p-6">
              <p className="text-destructive" data-testid="error-message">
                Failed to load contact submissions. Please try again.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" data-testid="admin-title">
            Contact Form Submissions
          </h1>
          <Badge variant="secondary" data-testid="submissions-count">
            {contacts?.length || 0} submissions
          </Badge>
        </div>

        {!contacts || contacts.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2" data-testid="no-submissions-title">
                No submissions yet
              </h3>
              <p className="text-muted-foreground" data-testid="no-submissions-description">
                Contact form submissions will appear here when users submit the form.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {contacts.map((contact) => (
              <Card key={contact.id} className="hover-elevate" data-testid={`contact-${contact.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl" data-testid={`contact-name-${contact.id}`}>
                        {contact.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span 
                          className="text-sm text-muted-foreground"
                          data-testid={`contact-date-${contact.id}`}
                        >
                          {format(new Date(contact.createdAt), 'PPp')}
                        </span>
                      </div>
                    </div>
                    {contact.company && (
                      <Badge variant="outline" data-testid={`contact-company-${contact.id}`}>
                        <Building className="w-3 h-3 mr-1" />
                        {contact.company}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-primary hover:underline"
                        data-testid={`contact-email-${contact.id}`}
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-primary hover:underline"
                        data-testid={`contact-phone-${contact.id}`}
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Message:</h4>
                    <p 
                      className="text-muted-foreground leading-relaxed"
                      data-testid={`contact-message-${contact.id}`}
                    >
                      {contact.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}