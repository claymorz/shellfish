
import React, { useState } from 'react';
import { Search, Download, Filter, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const GenotypeData = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const genotypeData = [
    {
      speciesLatin: "Crassostrea gigas",
      speciesEnglish: "Pacific Oyster",
      class: "Bivalvia",
      family: "Ostreidae",
      filename: "C_gigas_WGS_v1.vcf.gz",
      downloadLink: "#",
      sampleSize: 156,
      dataType: "Whole Genome Sequencing"
    },
    {
      speciesLatin: "Mytilus edulis",
      speciesEnglish: "Blue Mussel", 
      class: "Bivalvia",
      family: "Mytilidae",
      filename: "M_edulis_RAD_v2.vcf.gz",
      downloadLink: "#",
      sampleSize: 89,
      dataType: "RAD-seq"
    },
    {
      speciesLatin: "Pecten maximus",
      speciesEnglish: "Great Scallop",
      class: "Bivalvia", 
      family: "Pectinidae",
      filename: "P_maximus_GBS_v1.vcf.gz",
      downloadLink: "#",
      sampleSize: 203,
      dataType: "GBS"
    },
    {
      speciesLatin: "Haliotis discus hannai",
      speciesEnglish: "Pacific Abalone",
      class: "Gastropoda",
      family: "Haliotidae", 
      filename: "H_discus_WES_v1.vcf.gz",
      downloadLink: "#",
      sampleSize: 127,
      dataType: "Whole Exome Sequencing"
    }
  ];

  const filteredData = genotypeData.filter(item =>
    item.speciesLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.speciesEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.family.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Genotype Data</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive genomic datasets from shellfish species worldwide
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Search & Filter</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by species name, family, or data type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                Advanced Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <div className="grid gap-6">
          {filteredData.map((item, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      <em>{item.speciesLatin}</em>
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">
                      {item.speciesEnglish}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {item.dataType}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Class</h4>
                    <p className="text-gray-600">{item.class}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Family</h4>
                    <p className="text-gray-600">{item.family}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sample Size</h4>
                    <p className="text-gray-600">{item.sampleSize} individuals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">File Name</h4>
                    <p className="text-gray-600 text-sm font-mono">{item.filename}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    Dataset ID: GEN_{String(index + 1).padStart(3, '0')}
                  </div>
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredData.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Database className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Data Found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GenotypeData;
