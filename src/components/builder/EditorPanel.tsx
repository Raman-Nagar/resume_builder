"use client";

import { EditorNav, type EditorSection } from "./EditorNav";
import { PersonalSection } from "./sections/PersonalSection";
import { SummarySection } from "./sections/SummarySection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { EducationSection } from "./sections/EducationSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { LanguagesSection } from "./sections/LanguagesSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { VolunteerSection } from "./sections/VolunteerSection";
import { InterestsSection } from "./sections/InterestsSection";
import { CustomSectionsPanel } from "./sections/CustomSectionsPanel";
import { SectionsPanel } from "./sections/SectionsPanel";
import { DesignSection } from "./sections/DesignSection";
import { useResumeData } from "@/store/ResumeContext";

interface Props {
  activeSection: EditorSection;
  onSectionChange: (section: EditorSection) => void;
}

const SECTION_MAP: Record<EditorSection, React.ComponentType> = {
  personal:       PersonalSection,
  summary:        SummarySection,
  experience:     ExperienceSection,
  education:      EducationSection,
  skills:         SkillsSection,
  projects:       ProjectsSection,
  certifications: CertificationsSection,
  languages:      LanguagesSection,
  achievements:   AchievementsSection,
  volunteer:      VolunteerSection,
  interests:      InterestsSection,
  custom:         CustomSectionsPanel,
  sections:       SectionsPanel,
  design:         DesignSection,
};

export function EditorPanel({ activeSection, onSectionChange }: Props) {
  const resume = useResumeData();
  const ActiveComponent = SECTION_MAP[activeSection];

  return (
    <div className="rb-editor-panel">
      <EditorNav
        activeSection={activeSection}
        onSelect={onSectionChange}
        resume={resume}
      />
      <div className="rb-editor-content" aria-label="Section editor">
        <ActiveComponent />
      </div>
    </div>
  );
}
