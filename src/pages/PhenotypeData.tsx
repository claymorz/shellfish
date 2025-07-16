
import React, { useState } from 'react';
import { Search, Download, Filter, BarChart2, Ruler, Scale } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PhenotypeData = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const phenotypeData = [
    {
      metadata: "Shell morphometry dataset",
      phenotypeName: "Shell Length",
      phenotypeDefinition: "Maximum anterior-posterior distance of shell",
      measurementMethod: "Digital caliper measurement (±0.1mm)",
      sampleId: "PHE_001",
      speciesLatin: "Crassostrea gigas",
      class: "Bivalvia",
      family: "Ostreidae",
      filename: "C_gigas_shell_length.csv",
      downloadLink: "#",
      sampleSize: 342,
      unit: "mm"
    },
    {
      metadata: "Growth performance traits",
      phenotypeName: "Body Weight",
      phenotypeDefinition: "Total wet weight of soft tissue",
      measurementMethod: "Electronic balance (±0.01g)",
      sampleId: "PHE_002", 
      speciesLatin: "Mytilus edulis",
      class: "Bivalvia",
      family: "Mytilidae",
      filename: "M_edulis_body_weight.csv",
      downloadLink: "#",
      sampleSize: 289,
      unit: "g"
    },
    {
      metadata: "Stress resistance phenotypes",
      phenotypeName: "Heat Tolerance",
      phenotypeDefinition: "Survival time at 35°C stress temperature",
      measurementMethod: "Controlled temperature stress test",
      sampleId: "PHE_003",
      speciesLatin: "Pecten maximus", 
      class: "Bivalvia",
      family: "Pectinidae",
      filename: "P_maximus_heat_tolerance.csv",
      downloadLink: "#",
      sampleSize: 156,
      unit: "hours"
    },
    {
      metadata: "Reproductive traits",
      phenotypeName: "Spawning Success",
      phenotypeDefinition: "Number of viable larvae produced per individual",
      measurementMethod: "Larval counting under microscope",
      sampleId: "PHE_004",
      speciesLatin: "Haliotis discus hannai",
      class: "Gastropoda", 
      family: "Haliotidae",
      filename: "H_discus_spawning.csv",
      downloadLink: "#",
      sampleSize: 98,
      unit: "count"
    }
  ];

  const filteredData = phenotypeData.filter(item =>
    item.phenotypeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.speciesLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.metadata.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (phenotypeName: string) => {
    if (phenotypeName.toLowerCase().includes('length') || phenotypeName.toLowerCase().includes('size')) {
      return Ruler;
    }
    if (phenotypeName.toLowerCase().includes('weight')) {
      return Scale;
    }
    return BarChart2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Phenotype Data</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive phenotypic measurements and trait data from shellfish populations
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
                  placeholder="Search by phenotype name, species, or trait category..."
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

        {/* Data Cards */}
        <div className="grid gap-6">
          {filteredData.map((item, index) => {
            const Icon = getIcon(item.phenotypeName);
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {item.phenotypeName}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600">
                          <em>{item.speciesLatin}</em> • {item.metadata}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {item.sampleSize} samples
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Definition</h4>
                        <p className="text-gray-600">{item.phenotypeDefinition}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Measurement Method</h4>
                        <p className="text-gray-600">{item.measurementMethod}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Class</h4>
                          <p className="text-gray-600">{item.class}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Family</h4>
                          <p className="text-gray-600">{item.family}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Unit</h4>
                          <p className="text-gray-600">{item.unit}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">File</h4>
                          <p className="text-gray-600 text-sm font-mono">{item.filename}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-sm text-gray-500">
                      Sample ID: {item.sampleId}
                    </div>
                    <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BarChart2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Data Found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PhenotypeData;
