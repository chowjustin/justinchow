import Header from "@/app/containers/Header";
import ProjectsCard from "@/app/components/ProjectsCard";

export default function Projects() {
  return (
    <main>
      <Header />
      <section className="w-3/5 max-lg:w-3/4 mx-auto flex flex-col items-center gap-24 mb-24">
        <div className="flex max-md:flex-col items-center gap-24 max-lg:gap-12 max-lg:mt-36 mt-48">
          <ProjectsCard
            path="/images/schlogo.png"
            title="Schematics ITS"
            desc="  Schematics is an annual event organized by ITS Informatics
          Department students since 2013. Schematics consists of 4 sub-events
          (Schematics NLC, Schematics NPC, Schematics BST, and Schematics
            REEVA) each of which has its own characteristics and complements
            each other. This makes Schematics one of the biggest events in ITS
            that has the widest and most comprehensive target all over
            Indonesia."
            href="https://schematics-its.com"
          />
          <ProjectsCard
            path="/images/schlogo.png"
            title="Schematics ITS"
            desc="  Schematics is an annual event organized by ITS Informatics
          Department students since 2013. Schematics consists of 4 sub-events
        (Schematics NLC, Schematics NPC, Schematics BST, and Schematics
            REEVA) each of which has its own characteristics and complements
            each other. This makes Schematics one of the biggest events in ITS
            that has the widest and most comprehensive target all over
            Indonesia."
            href="https://schematics-its.com"
          />
        </div>
        <div className="flex  max-md:flex-col items-center gap-24 max-lg:gap-12">
          <ProjectsCard
            path="/images/schlogo.png"
            title="Schematics ITS"
            desc="  Schematics is an annual event organized by ITS Informatics
          Department students since 2013. Schematics consists of 4 sub-events
          (Schematics NLC, Schematics NPC, Schematics BST, and Schematics
            REEVA) each of which has its own characteristics and complements
            each other. This makes Schematics one of the biggest events in ITS
            that has the widest and most comprehensive target all over
            Indonesia."
            href="https://schematics-its.com"
          />
          <ProjectsCard
            path="/images/schlogo.png"
            title="Schematics ITS"
            desc="  Schematics is an annual event organized by ITS Informatics
          Department students since 2013. Schematics consists of 4 sub-events
          (Schematics NLC, Schematics NPC, Schematics BST, and Schematics
            REEVA) each of which has its own characteristics and complements
            each other. This makes Schematics one of the biggest events in ITS
            that has the widest and most comprehensive target all over
            Indonesia."
            href="https://schematics-its.com"
          />
        </div>
      </section>
    </main>
  );
}
