import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="my-12 mx-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">The Birth of Gracieux Moda</h3>
        <p>
          In a world where childhood is cherished and imagination knows no
          bounds, Gracieux Moda was born. Our journey began with a simple yet
          profound dream: to create a magical world where children can explore,
          learn, and grow through play.
        </p>

        <h3 className="text-2xl font-semibold">A Passion for Play</h3>
        <p>
          At Gracieux Moda, we believe that play is the cornerstone of
          childhood. It&apos;s where creativity flourishes, friendships are
          forged, and lifelong memories are made. Our passion for play drives us
          to design toys that not only entertain but also inspire and educate.
        </p>

        <h3 className="text-2xl font-semibold">Quality and Safety First</h3>
        <p>
          We understand that parents want the best for their children.
          That&apos;s why we are committed to the highest standards of quality
          and safety. Each Gracieux Moda toy is crafted with care, using
          non-toxic materials and rigorous testing to ensure they are safe for
          even the tiniest hands.
        </p>

        <h3 className="text-2xl font-semibold">Inspired by Imagination</h3>
        <p>
          Our designs are inspired by the boundless imagination of children.
          From whimsical characters to enchanting playsets, each toy is a
          gateway to a world of wonder. We take pride in creating toys that
          spark curiosity and encourage children to dream big.
        </p>

        <h3 className="text-2xl font-semibold">A Touch of Elegance</h3>
        <p>
          The name Gracieux Moda reflects our dedication to elegance and style.
          We believe that toys can be both beautiful and functional. Our
          collections are designed to appeal to both children and parents, with
          a timeless aesthetic that complements any home.
        </p>

        <h3 className="text-2xl font-semibold">Building a Brighter Future</h3>
        <p>
          At Gracieux Moda, we are not just selling toys; we are building a
          brighter future. We are committed to sustainability and social
          responsibility. Our eco-friendly practices ensure that we are doing
          our part to protect the planet for future generations.
        </p>

        <h3 className="text-2xl font-semibold">Join Our Journey</h3>
        <p>
          We invite you to join us on this magical journey. Discover the joy,
          wonder, and elegance of Gracieux Moda. Together, let&apos;s create a
          world where every child can experience the magic of play.
        </p>

        <p>
          Gracieux Moda is more than a brand; it&apos;s a promise. A promise to
          deliver joy, inspire imagination, and create memories that will last a
          lifetime. Thank you for being a part of our story.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet the Team</h2>
        <div className="space-y-12">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src="/team/sakshi.jpg" // replace with the correct path to the image
                alt="Sakshi Tiwari Gurehiya"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold">Sakshi Tiwari Gurehiya</h4>
            <p className="text-gray-500">Founder &amp; CEO</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src="/team/viswas.jpg" // replace with the correct path to the image
                alt="Viswas Gurehiya"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold">Viswas Gurehiya</h4>
            <p className="text-gray-500">Founder &amp; Investor</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src="/team/harsh.jpg" // replace with the correct path to the image
                alt="Harsh Gurehiya"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold">Harsh Gurehiya</h4>
            <p className="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
