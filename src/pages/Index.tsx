
import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Calculator, BarChart3, TrendingUp, Download, Users, Globe, ChevronRight, Dna, Microscope } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const features = [
    {
      title: "Analysis Tools",
      description: "Comprehensive bioinformatics tools for phenotype and genotype analysis",
      icon: Calculator,
      link: "/tools",
      items: ["GWAS", "QTL Mapping", "Population Genetics", "Bayesian Analysis"]
    },
    {
      title: "Genotype Data",
      description: "Extensive genomic datasets from diverse shellfish species",
      icon: Dna,
      link: "/genotype", 
      items: ["WGS", "RAD-seq", "GBS", "Exome Sequencing"]
    },
    {
      title: "Phenotype Data",
      description: "Comprehensive phenotypic measurements and trait databases",
      icon: BarChart3,
      link: "/phenotype",
      items: ["Morphometry", "Growth Traits", "Stress Resistance", "Reproduction"]
    },
    {
      title: "Platform Statistics",
      description: "Real-time usage analytics and global research insights",
      icon: TrendingUp,
      link: "/statistics",
      items: ["User Analytics", "Download Stats", "Global Usage", "Tool Metrics"]
    }
  ];

  const stats = [
    { label: "Species Covered", value: "45+", icon: Globe },
    { label: "Datasets Available", value: "284", icon: Database },
    { label: "Active Researchers", value: "2,847", icon: Users },
    { label: "Downloads", value: "15.6K", icon: Download }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Microscope className="w-3 h-3 text-yellow-800" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                ShellfishDB
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              A comprehensive bioinformatics platform for shellfish genomics and phenomics research. 
              Explore multi-omics data, conduct advanced analyses, and accelerate marine biology discoveries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-lg px-8 py-3">
                <Link to="/tools">
                  <Calculator className="w-5 h-5 mr-2" />
                  Explore Tools
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-blue-300 hover:bg-blue-50">
                <Link to="/genotype">
                  <Database className="w-5 h-5 mr-2" />
                  Browse Data
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/80 backdrop-blur-sm border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and datasets for advanced shellfish research and bioinformatics analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300">
                    <Link to={feature.link}>
                      Explore {feature.title}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Research Focus Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Advancing Marine Genomics Research</h2>
              <p className="text-xl mb-8 text-blue-100">
                Our platform integrates cutting-edge bioinformatics tools with comprehensive shellfish datasets 
                to accelerate discoveries in marine biology, aquaculture, and conservation genetics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">Multi-species comparative genomics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">Population genetics and adaptation studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">Breeding optimization and trait improvement</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Research Highlights</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Genetic Diversity Analysis</h4>
                  <p className="text-blue-100 text-sm">Comprehensive population structure studies across 45+ shellfish species</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Climate Adaptation</h4>
                  <p className="text-blue-100 text-sm">Identifying genetic markers for temperature and pH tolerance</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Aquaculture Optimization</h4>
                  <p className="text-blue-100 text-sm">Genomic selection tools for improved growth and disease resistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-0 shadow-xl">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Research?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers worldwide using ShellfishDB to advance marine genomics and aquaculture science.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                <Link to="/tools">
                  Get Started
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Contact Research Team
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
