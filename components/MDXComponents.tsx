import React, { ReactNode } from "react";

interface SimmerCardProps {
  title: string;
  progress: number;
  children: ReactNode;
}

export const SimmerCard: React.FC<SimmerCardProps> = ({
  title,
  progress,
  children,
}) => (
  <div className="simmer-card">
    <div className="simmer-header">
      <span className="simmer-title">
        {"// Project Simmering: "}
        {title}
      </span>
      <span className="simmer-percent">{progress}%</span>
    </div>
    <div className="simmer-bar-bg">
      <div className="simmer-bar-fill" style={{ width: `${progress}%` }} />
    </div>
    <div className="simmer-content">{children}</div>
  </div>
);

interface CardProps {
  label: string;
  highlight?: boolean;
  children: ReactNode;
}

export const ComparisonGrid: React.FC<{ children: ReactNode }> = ({
  children,
}) => <div className="comparison-grid">{children}</div>;

export const Card: React.FC<CardProps> = ({ label, highlight, children }) => (
  <div className={`comp-card ${highlight ? "highlight" : ""}`}>
    <span className="comp-label">{label}</span>
    <div className="comp-text">{children}</div>
  </div>
);
