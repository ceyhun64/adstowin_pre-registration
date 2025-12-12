// components/home/featureCard.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  theme: "advertiser" | "earner";
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  features,
  ctaText,
  theme,
  icon,
}) => {
  const isAdvertiser = theme === "advertiser";
  const themeClass = isAdvertiser
    ? "bg-gradient-to-br from-indigo-900 to-purple-900 border-indigo-700 text-white"
    : "bg-gradient-to-br from-emerald-700 to-green-800 border-emerald-600 text-white";
  const ctaVariant = isAdvertiser ? "secondary" : "default";

  return (
    <Card className={`shadow-2xl h-full flex flex-col ${themeClass}`}>
      <CardContent className="p-8 flex-grow flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            {icon}
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          </div>
          <p className="text-lg opacity-90">{subtitle}</p>
          <ul className="space-y-2 list-none p-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <Button
            variant={ctaVariant}
            className="w-full font-semibold hover:opacity-90 transition-opacity"
          >
            {ctaText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
