
import React from 'react';
import { Calculator, TrendingUp, GitBranch, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Tools = () => {
  const toolCategories = [
    {
      title: "Phenotype-based Analysis",
      description: "Statistical analysis tools for phenotypic data",
      icon: BarChart2,
      tools: [
        {
          name: "Summary Statistics",
          description: "Comprehensive statistical summaries of phenotypic traits",
          action: "Launch Tool"
        }
      ]
    },
    {
      title: "Genotype-based Analysis", 
      description: "Tools for processing and analyzing genetic data",
      icon: Calculator,
      tools: [
        {
          name: "Variant Filtering",
          description: "Pre- and post-variant filtering of high-throughput sequencing data",
          action: "Launch Tool"
        },
        {
          name: "Population Genetics",
          description: "Analysis of genetic diversity and population structure",
          action: "Launch Tool"
        }
      ]
    },
    {
      title: "Pedigree & Phenotype",
      description: "Family-based analysis and breeding optimization",
      icon: GitBranch,
      tools: [
        {
          name: "Heterosis Analysis",
          description: "Calculate heterosis using hp=Q/L formula",
          action: "Launch Tool"
        },
        {
          name: "Bayesian Hierarchical Model",
          description: "Advanced statistical modeling for complex traits",
          action: "Launch Tool"
        }
      ]
    },
    {
      title: "Genotype-Phenotype Association",
      description: "Tools to identify genetic basis of traits",
      icon: TrendingUp,
      tools: [
        {
          name: "QTL Mapping",
          description: "Quantitative trait loci identification and mapping",
          action: "Launch Tool"
        },
        {
          name: "GWAS",
          description: "Genome-wide association studies",
          action: "Launch Tool"
        },
        {
          name: "Genomic Selection",
          description: "Genomic prediction and selection tools",
          action: "Launch Tool"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Analysis Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive bioinformatics tools for shellfish genomics and phenomics research
          </p>
        </div>

        <div className="grid gap-8">
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{category.title}</CardTitle>
                      <CardDescription className="text-gray-600">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                        <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                        >
                          {tool.action}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tools;
