import { Code2, Smartphone, Globe, Palette, Database, Layout } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building modern, responsive web interfaces using React and Tailwind CSS. Clean code, fast load times, and great user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using Flutter and Dart. From UI to API integration, offline support, and push notifications.",
  },
  {
    icon: Globe,
    title: "Landing Page Development",
    description:
      "Clean, conversion-focused landing pages built with HTML, CSS, JavaScript, or React — responsive and ready to deploy.",
  },
  {
    icon: Database,
    title: "REST API Integration",
    description:
      "Connecting frontends to backends seamlessly. Experience with FastAPI, Node.js, and consuming third-party APIs.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creating visual assets, social media graphics, and UI mockups using Photoshop and Canva. Clean, modern, and on-brand designs.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces with a focus on usability, accessibility, and clear data visualization.",
  },
];

export const Testimonials = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Services that{" "}
            <span className="font-serif italic font-normal text-white">
              deliver results.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From design to deployment — I cover frontend and mobile
            development, graphic design, and everything in between.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/50 border border-transparent transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};