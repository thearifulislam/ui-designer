import {
  SiFigma,
  SiSketch,
  SiFramer,
  SiAdobexd,
  SiWebflow,
  SiInvision,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tools = [
  {
    name: "Figma",
    icon: SiFigma,
    description: "UI Design & Prototyping",
  },
  {
    name: "Adobe XD",
    icon: SiAdobexd,
    description: "UI/UX Design",
  },
  {
    name: "Sketch",
    icon: SiSketch,
    description: "Interface Design",
  },
  {
    name: "Framer",
    icon: SiFramer,
    description: "Interactive Design",
  },
  {
    name: "Webflow",
    icon: SiWebflow,
    description: "Web Design",
  },
  {
    name: "InVision",
    icon: SiInvision,
    description: "Prototyping",
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Tools I <span className="text-[var(--color-secondary)]">Use</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center justify-center mx-auto">
          <TooltipProvider>
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-white h-20 w-20 rounded-xl shadow-sm flex items-center justify-center mb-3 hover:shadow-md transition-all duration-300">
                        <Icon className="h-10 w-10" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">{tool.description}</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
