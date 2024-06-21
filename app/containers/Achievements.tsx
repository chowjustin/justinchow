import AchievementsBlock from "@/app/components/AchievementsBlock";

const Achievements = () => {
  return (
    <div className="p-10 lg:px-24 lg:mx-10">
      <h1
        className="text-white dark:text-gray-400 text-[50px] lg:text-[75px] max-md:text-4xl font-bold max-lg:text-center"
        data-aos="fade-up"
      >
        Achievements
      </h1>
      <br />
      <AchievementsBlock
        title="
        [National] Senior Schematics NPC 2023, Finalist"
        date="Oct 2023"
        issuer="Issued by Departemen Teknik Informatika Institut Teknologi Sepuluh
        Nopember"
        desc=" Schematics National Programming Contest (Schematics NPC) is a
        national-level programming competition organized by the Department of
        Informatics at the Institut Teknologi Sepuluh Nopember (ITS). This
        competition assesses logical thinking abilities and the capability to
        analyze algorithms and programming in solving given problems.
        Participants in Schematics NPC will be challenged to solve a problem by
        creating a computer program."
      />
      <AchievementsBlock
        title="
        [National] Gold Medalist in Mathematics at OSPAN National Competition"
        date="Sep 2022"
        issuer="Issued by Pusat Prestasi dan Pendidikan Indonesia "
        desc=" Olimpiade Siswa Prestasi Akademik Nasional (OSPAN) is a national competition between more than 2500 students all over Indonesia. I won the gold medal in Mathematics which cover topics such as geometry, algebra, number theory and combinatory."
      />
      <AchievementsBlock
        title="
        
[National] Silver Medalist in Mathematics at NOSeC National Competition"
        date="Sep 2022"
        issuer="Issued by Pusat Prestasi dan Pendidikan Indonesia "
        desc=" National Outstanding Student Competition (NOSeC) is a national competition between more than 2000 students all over Indonesia. I won the silver medal in Mathematics which cover topics such as geometry, algebra, number theory and combinatory."
      />
    </div>
  );
};

export default Achievements;
