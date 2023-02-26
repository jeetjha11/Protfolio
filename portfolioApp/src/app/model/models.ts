export interface Education
{
    institute:string;
    course:string;
    duration:string;
    score:string;
}

export interface Certifications
{
    name:string;
    place:string;
    duration:string;
    description:string[];
}

export interface Skills
{
    name:string;
    level:string;
    rating:number;
}

export interface Projects
{
    title:string;
    technologies:string;
    descriptions:string[];
}