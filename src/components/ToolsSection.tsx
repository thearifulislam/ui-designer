import {
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSketch,
  SiAdobeaftereffects,
  SiAdobeindesign,
  SiInvision,
  SiStorybook,
  SiPhotopea,
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
    description: "Primary design tool for interface design and prototyping",
  },
  {
    name: "Adobe XD",
    icon: SiAdobexd,
    description: "Used for user experience design and interactive prototypes",
  },
  {
    name: "Photoshop",
    icon: SiAdobephotoshop,
    description: "Image editing and manipulation for design assets",
  },
  {
    name: "Illustrator",
    icon: SiAdobeillustrator,
    description: "Vector graphics and illustration for brand elements",
  },
  {
    name: "Photopea",
    icon: SiPhotopea,
    description: "Used for editing and manipulating images and graphics",
  },
  {
    name: "Adobe Indesign ",
    icon: SiAdobeindesign,
    description:
      "Used for typography, layout, and page layout for print and digital media",
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Exploring the <span className="text-green">Tools</span> Behind My
          Designs
        </h2>

        <div
          className="
          grid 
          grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 
          gap-8 
          place-items-center     /* Vertically & horizontally center in cell */
          justify-center         /* Center the whole grid row content */
          mx-auto
        "
        >
          <TooltipProvider>
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-white h-20 w-20 rounded-2xl shadow-sm flex items-center justify-center mb-3 hover:shadow-md transition-all duration-300">
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
