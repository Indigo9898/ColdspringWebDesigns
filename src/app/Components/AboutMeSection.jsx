import Image from "next/image";

const AboutMeSection = () => {
  return (
    <div className="grid grid-cols-1 pl-8 pr-8 lg:grid-cols-2 mb-32 text-lg">
      <div className="flex justify-center items-center w-full mr-16">
        <Image src={"/saving.svg"} width={2000} height={2000} alt="logo" />
      </div>
      <div>
        <p className="text-main-green mb-2">COLDSPRING WEB DESIGN</p>
        <p className="font-bold text-4xl mb-8">
          Giving Small Businesses The Big Business Treatment
        </p>
        <p className="text-gray mb-8">
          At the helm of Coldspring Web Designs, I&apos;m Austen Dyer, a passionate
          web developer based in Houston, Texas. My mission is simple yet
          profound: giving small businesses the big business treatment they
          deserve in the digital realm. With a solid foundation in computer
          science from Sam Houston State University, I blend analytical thinking
          with creative flair to craft tailored web solutions. My commitment
          lies in empowering small businesses with impactful online presences
          that rival those of larger corporations.
        </p>
        <p className="text-gray">
          What I found was that a lot of small businesses don&apos;t have the funds
          to spend thousands of dollars upfront on a new website. And the ones
          that did, got taken advantage of and have a terrible website that
          looks like it was built by someone in a dungeon and haven&apos;t seen
          design trends for the last 10 years. They were in a frustrating spot -
          they either can&apos;t afford a good website, and if they can they don&apos;t
          know who to trust to make something great. So I tweaked my business
          model to fit their needs. That&apos;s how I came up with my $0 down and
          $150 a month model. It&apos;s more managable for a small business to handle
          and won&apos;t hurt their bank accounts.
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection;
