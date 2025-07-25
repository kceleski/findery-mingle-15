import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, ShieldAlert, AlertTriangle, ShieldCheck } from 'lucide-react';

interface QualityScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const QualityScore: React.FC<QualityScoreProps> = ({ 
  score, 
  size = 'md',
  showLabel = true 
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 4.5) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 4.0) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (score >= 3.5) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 4.5) return <ShieldCheck className="w-3 h-3" />;
    if (score >= 4.0) return <Shield className="w-3 h-3" />;
    if (score >= 3.5) return <ShieldAlert className="w-3 h-3" />;
    return <AlertTriangle className="w-3 h-3" />;
  };

  const getScoreLabel = (score: number) => {
    if (score >= 4.5) return 'Excellent';
    if (score >= 4.0) return 'Very Good';
    if (score >= 3.5) return 'Good';
    return 'Needs Improvement';
  };

  return (
    <Badge 
      variant="outline" 
      className={`${getScoreColor(score)} flex items-center gap-1 ${
        size === 'sm' ? 'text-xs px-1.5 py-0.5' : 
        size === 'lg' ? 'text-sm px-3 py-1' : 
        'text-xs px-2 py-1'
      }`}
    >
      {getScoreIcon(score)}
      <span className="font-medium">{score.toFixed(1)}</span>
      {showLabel && <span className="hidden sm:inline">- {getScoreLabel(score)}</span>}
    </Badge>
  );
};

interface AlertBadgeProps {
  alerts: Array<{
    type: 'safety' | 'license' | 'compliance' | 'financial' | 'staffing';
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    date: string;
  }>;
}

export const AlertBadge: React.FC<AlertBadgeProps> = ({ alerts }) => {
  if (alerts.length === 0) return null;

  const criticalAlerts = alerts.filter(alert => alert.severity === 'critical');
  const highAlerts = alerts.filter(alert => alert.severity === 'high');

  if (criticalAlerts.length > 0) {
    return (
      <Badge variant="destructive" className="flex items-center gap-1">
        <AlertTriangle className="w-3 h-3" />
        Critical Issues ({criticalAlerts.length})
      </Badge>
    );
  }

  if (highAlerts.length > 0) {
    return (
      <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200 flex items-center gap-1">
        <ShieldAlert className="w-3 h-3" />
        Issues ({highAlerts.length})
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 flex items-center gap-1">
      <ShieldAlert className="w-3 h-3" />
      Minor Issues ({alerts.length})
    </Badge>
  );
};