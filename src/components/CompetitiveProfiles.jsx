import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const CompetitiveProfiles = () => {
  const [leetCodeStats, setLeetCodeStats] = useState(null);
  const [codeforcesStats, setCodeforcesStats] = useState(null);

  useEffect(() => {
    // LeetCode Stats
    fetch("https://leetcode-stats-api.herokuapp.com/hack107")
      .then((res) => res.json())
      .then((data) => setLeetCodeStats(data))
      .catch((err) => console.error("LeetCode error:", err));

    // Codeforces Stats
    fetch("https://codeforces.com/api/user.info?handles=Arbaj123")
      .then((res) => res.json())
      .then((data) => setCodeforcesStats(data.result[0]))
      .catch((err) => console.error("Codeforces error:", err));
  }, []);

  const profiles = [
    {
      platform: "LeetCode",
      image: "https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/05/10175228/images-11.png",
      link: "https://leetcode.com/hack107/",
      description: leetCodeStats
        ? `Solved: ${leetCodeStats.totalSolved} (Easy: ${leetCodeStats.easySolved}, Medium: ${leetCodeStats.mediumSolved}, Hard: ${leetCodeStats.hardSolved})`
        : "Loading...",
    },
    {
      platform: "Codeforces",
      image: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcer3l19eex0wy900b101.jpg",
      link: "https://codeforces.com/profile/Arbaj123",
      description: codeforcesStats
        ? `Rating: ${codeforcesStats.rating}, Max: ${codeforcesStats.maxRating}`
        : "Loading...",
    },
    {
      platform: "CodeChef",
      image: "https://i.pinimg.com/736x/ef/3c/3f/ef3c3fd973ce6890b32d27be7a050b62.jpg",
      link: "https://www.codechef.com/users/arbaj105",
      description: "Rating: 1450 ★★",
    },
  ];

  return (
    <section id="competitive" className="py-20 px-4 relative bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto pb-12">
        <h2 className="text-3xl sm:text-[40px] text-center font-bold px-4 py-2 rounded-md mb-10">
          My Competitive Programming Profiles
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="!py-10"
          loop
        >
          {profiles.map((profile, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col md:flex-row max-w-[800px] mx-auto items-center rounded-3xl p-12 shadow-[0_0px_40px_rgba(59,130,246,0.6)] bg-[#111]">
                <img
                  src={profile.image}
                  alt={profile.platform}
                  className="w-[90px] h-[90px] md:w-[160px] md:h-[160px] rounded-full object-cover border-2 border-[#1788ae]"
                />
                <div className="ml-0 md:ml-6 text-center md:text-left pt-6 md:pt-0">
                  <h3 className="text-[#459bd5] font-bold text-2xl mb-1">
                    {profile.platform}
                  </h3>
                  <p className="text-base md:text-lg mb-2  text-white dark:text-white">{profile.description}</p>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm mt-2 inline-block text-blue-400 underline hover:text-white"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompetitiveProfiles;
