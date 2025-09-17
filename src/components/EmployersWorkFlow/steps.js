import { Search, ClipboardList, Users, Presentation, Handshake , PhoneCall, BookOpen, Briefcase} from "lucide-react";

export const steps = [
  { sub: "Step 1", title: "Understanding Needs", color: "bg-gradient-to-tr from-blue-500 to-blue-600", icon: Search },
  { sub: "Step 2", title: "Hiring Strategy", color: "bg-gradient-to-tr from-purple-500 to-purple-600", icon: ClipboardList },
  { sub: "Step 3", title: "Finding Candidates", color: "bg-gradient-to-tr from-pink-500 to-pink-600", icon: Users },
  { sub: "Step 4", title: "Presenting Talent", color: "bg-gradient-to-tr from-blue-500 to-indigo-600", icon: Presentation },
  { sub: "Step 5", title: "Seamless Onboarding", color: "bg-gradient-to-tr from-purple-500 to-indigo-600", icon: Handshake },
];


export const jobSeekerSteps = [
  {
    sub: "Step 1",
    title: "Speak with a Recruiter",
    description:
      "Schedule a call with one of our highly qualified recruiters to discuss your career goals.",
    icon: PhoneCall,
    color: "bg-blue-500",
  },
  {
    sub: "Step 2",
    title: "Get Matched",
    description:
      "Your recruiter will match you with reputable companies and help you refine your resume.",
    icon: Search,
    color: "bg-purple-500",
  },
  {
    sub: "Step 3",
    title: "Prepare",
    description:
      "Get ready for your interview by learning about the company and positioning yourself as a rockstar.",
    icon: BookOpen,
    color: "bg-pink-500",
  },
  {
    sub: "Step 4",
    title: "Interview",
    description:
      "Showcase your skills and master the interview to move forward in the hiring process.",
    icon: Users,
    color: "bg-red-500",
  },
  {
    sub: "Step 5",
    title: "Get Hired",
    description:
      "Choose from the best opportunities and start your new career.",
    icon: Briefcase,
    color: "bg-green-500",
  },
];
