export interface TeamMember {
    id: number;
    name: string;
    role: string;
    description: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  }
  
export  interface TeamCardProps {
    member: TeamMember;
  }