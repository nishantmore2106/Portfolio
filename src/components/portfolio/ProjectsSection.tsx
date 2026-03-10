import React from "react";

const projects = [
  {
    title: "Elevate Studio",
    tag: "AI LANDING PAGE",
    description: "Premium design studio landing page.",
    image: "/Elevate.png",
    link: "https://id-preview--125e7b6a-9371-4626-bd0e-7fb8aa9dec80.lovable.app/",
  },
  {
    title: "InsightIQ",
    tag: "DASHBOARD",
    description: "Analytics platform.",
    image: "/insgihtIQ.png",
    link: "https://id-preview--a4bd5a3d-239e-4598-9010-e676decef9a9.lovable.app/dashboard",
  },
  {
    title: "FlowSync AI",
    tag: "AI TOOL",
    description: "Workflow automation system.",
    image: "/Flowsync.png",
    link: "https://id-preview--7b2d079a-40b1-4903-9522-7f7ac5769d3d.lovable.app/",
  },
  {
    title: "Loom AI",
    tag: "AI PLATFORM",
    description: "Documentation platform.",
    image: "/LOOM.AI.png",
    link: "https://id-preview--15a96c45-aed9-4ed3-b2c9-dcfe251de89c.lovable.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-32"
      style={{
        height: `${projects.length * 100}vh`, // BIG scroll area
      }}
    >
      <div className="relative h-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky"
            style={{
              top: "120px", // below header
              height: "80vh",
              zIndex: index + 1, // VERY IMPORTANT
            }}
          >
            <div
              className="relative mx-auto rounded-3xl overflow-hidden"
              style={{
                width: "85%",
                height: "100%",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 p-12 flex flex-col justify-between items-start">

                <span
                  className="text-xs font-bold uppercase px-4 py-2 rounded-full"
                  style={{ backgroundColor: "#D0FF71", color: "#0f0f0f" }}
                >
                  {project.tag}
                </span>

                <div>
                  <p className="text-white/70 mb-4">
                    {project.description}
                  </p>

                  <h3 className="text-white text-5xl font-black">
                    {project.title}
                  </h3>
                </div>

                <button
                  onClick={() => window.open(project.link, "_blank")}
                  style={{
                    backgroundColor: "#D0FF71",
                    color: "#0f0f0f",
                    padding: "10px 20px",
                    borderRadius: "999px",
                  }}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
