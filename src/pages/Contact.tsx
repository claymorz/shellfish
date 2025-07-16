
import React from 'react';
import { Mail, Phone, MapPin, Globe, Users, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const teamMembers = [
    {
      name: "Dr. Marine Chen",
      title: "Principal Investigator",
      email: "m.chen@university.edu",
      phone: "+1 (555) 123-4567",
      specialization: "Marine Genomics & Bioinformatics"
    },
    {
      name: "Dr. James Harbor",
      title: "Lead Bioinformatician", 
      email: "j.harbor@university.edu",
      phone: "+1 (555) 234-5678",
      specialization: "Population Genetics & GWAS"
    },
    {
      name: "Dr. Lisa Shells",
      title: "Database Manager",
      email: "l.shells@university.edu", 
      phone: "+1 (555) 345-6789",
      specialization: "Data Management & Quality Control"
    }
  ];

  const institutionInfo = {
    name: "Marine Genomics Research Institute",
    address: "123 Ocean Drive, Coastal University",
    city: "Marine City, MC 12345",
    country: "United States",
    website: "https://www.marinegenomics.edu",
    mainPhone: "+1 (555) 000-1234",
    labPhone: "+1 (555) 000-5678"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our research team for collaborations, support, or inquiries about ShellfishDB
          </p>
        </div>

        {/* Institution Information */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Institution Information</span>
            </CardTitle>
            <CardDescription>
              Our research institute and laboratory contact details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{institutionInfo.name}</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>{institutionInfo.address}</p>
                    <p>{institutionInfo.city}</p>
                    <p>{institutionInfo.country}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>Main Office: {institutionInfo.mainPhone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>Laboratory: {institutionInfo.labPhone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Globe className="w-4 h-4" />
                    <a href={institutionInfo.website} className="text-blue-600 hover:text-blue-800">
                      {institutionInfo.website}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Campus location map</p>
                  <Button variant="outline" className="mt-4">
                    View on Map
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Research Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-medium">{member.specialization}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Collaborations */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Research Collaborations & Support</CardTitle>
            <CardDescription>
              Information about partnerships, data access, and technical support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Researchers</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Data access requests and collaboration proposals</p>
                  <p>• Custom analysis pipeline development</p>
                  <p>• Joint research project opportunities</p>
                  <p>• Training workshops and tutorials</p>
                </div>
                <Button className="mt-4 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact for Collaboration
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Support</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Platform usage assistance</p>
                  <p>• Data download and format questions</p>
                  <p>• Analysis tool troubleshooting</p>
                  <p>• API documentation and integration</p>
                </div>
                <Button variant="outline" className="mt-4">
                  <Globe className="w-4 h-4 mr-2" />
                  Support Documentation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
