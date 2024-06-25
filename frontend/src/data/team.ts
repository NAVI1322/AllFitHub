export interface TeamMember {
    id: number;
    ProfilePicture?:string;
    name: string;
    role: string;
    description:string,
    twitter?: string;
    github?:string;
    linkedin?: string;
  }
  
export  interface TeamCardProps {
    member: TeamMember;
  }