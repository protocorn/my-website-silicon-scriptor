import SkillCard from "@/components/SkillCard";
import Link from 'next/link';

export default function AboutPage() {
  return(
    <div className="lg:flex h-flex mt-20">
      {/* Left Division */}
      <div className="lg:w-30 w-30 p-8 lg:bg-gray-200 lg:dark:bg-gray-800 rounded-2xl">
        {/* Profile Image */}
        <div className="relative mb-4">
          <img
            src="/side_profile.jpg" // Replace with your image URL
            alt="Profile"
            className="w-36 h-36 md:w-48 md:h-48 rounded-2xl mx-auto border-4 border-white shadow-lg relative z-10"
            style={{ marginTop: '-6rem' }}
          />
        </div>

        <div className="text-center">
  <p className="text-3xl font-bold mt-5">Sahil Chordia</p>
  <div className="text-center w-flex lg:bg-gray-50 lg:dark:bg-gray-700 rounded-md m-2 mt-6">
  <p className="text-md mb-4 pl-3 pr-3 pt-2 pb-2">Aspiring Data Scientist</p>
  </div>
  <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-md p-5">
  <div className="mb-6 border-b border-gray-500 pb-6">
    {/* Section 1 */}
    <div className="flex items-center">
        <div className="bg-black p-2 bg-gray-200 dark:bg-gray-800 rounded-md items-center w-10 h-10">
        <img
          src="/phone.webp" // Replace with your icon URL
          alt="Icon 1"
          className="w-6 h-6"
        />
      </div>
      <div className="ml-4">
      <p className="text-gray-500 text-left">Phone</p>
        <h3 className="text-lg">+91 9619982412</h3>
      </div>
    </div>
  </div>

  <div className="mb-6 border-b border-gray-500 pb-6">
    {/* Section 2 */}
    <div className="flex">
    <div className="bg-black p-2 rounded-md items-center w-10 h-10 bg-gray-200 dark:bg-gray-800">
        <img
          src="/location.png" // Replace with your icon URL
          alt="Icon 1"
          className="w-6 h-6"
        />
      </div>
      <div className="ml-4">
      <p className="text-gray-500 text-left">Location</p>
        <h3 className="text-lg">Thane, India</h3>
      </div>
    </div>
  </div>

  <div className="mb-6 border-b border-gray-500 pb-6">
    {/* Section 3 */}
    <div className="flex">
    <div className="bg-black p-2 rounded-md items-center w-10 h-10 bg-gray-200 dark:bg-gray-800">
        <img
          src="/email2.png" // Replace with your icon URL
          alt="Icon 1"
          className="w-6 h-6"
        />
      </div>
      <div className="ml-4">
      <p className="text-gray-500 text-left">Email</p>
        <h3 className="text-lg">siliconscriptor@gmail.com</h3>
        <h3 className="text-lg">chordiasahil24@gmail.com</h3>
      </div>
    </div>
  </div>

  <div className="mb-3">
    {/* Section 4 */}
    <div className="flex">
    <div className="bg-black p-2 rounded-md items-center w-10 h-10 bg-gray-200 dark:bg-gray-800">
        <img
          src="/birthday.jpg" // Replace with your icon URL
          alt="Icon 1"
          className="w-6 h-6"
        />
      </div>
      <div className="ml-4">
       <p className="text-gray-500 text-left">Birthday</p>
        <h3 className="text-lg">Dec 24, 2002</h3>
      </div>
    </div>
  </div>
</div>

<Link href="https://drive.google.com/drive/folders/1j6fkgcMJyogP0T6Yb-RJgHXxy34qIF74?usp=sharing" passHref>
  <button className="mt-5 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
  >
    View Resume
  </button>
  </Link>
</div>
      </div>

      {/* Right Division */}
      <div className="lg:flex-1 w-full p-8">
        {/* About Me Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <hr className="border-t-2 border-gray-300 w-16 mb-4" />
          <p>
          Hello! I&apos;m Sahil Chordia, a final-year computer engineering student at A.P Shah Institute of Technology. Currently immersed in the world of technology, my academic journey has been a fascinating exploration of the digital landscape.
<br></br>
<br></br>
My passion for technology goes beyond the classroom, as I find immense joy in staying updated with the latest advancements. Always eager to learn and embrace emerging technologies, I consider myself a perpetual student in the ever-evolving tech realm.
<br></br>
<br></br>
Blogging has become my medium to share this enthusiasm and knowledge with others. Through my articles, I aim to keep fellow tech enthusiasts informed and inspired about the dynamic world of technology.
<br></br>
          </p>
        </div>

        {/* My Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <hr className="border-t-2 border-gray-300 w-16 mb-4" />
          {/* Add your skills grid here */}
          <div className="mb-8">
  <div className="grid grid-cols-2 gap-4">
    <SkillCard
      icon="/ml_icon.png" // Replace with your skill icon URL
      name="Machine Learning"
      description="Advanced"
    />
    <SkillCard
      icon="/web_icon.png" // Replace with your skill icon URL
      name="Web Development"
      description="Advanced"
    />
     <SkillCard
      icon="/android_icon.png" // Replace with your skill icon URL
      name="Android Development"
      description="Advanced"
    />
    <SkillCard
      icon="/nlp_icon.png" // Replace with your skill icon URL
      name="Natural Language Processing"
      description="Intermediate."
    />
     <SkillCard
      icon="/database.png" // Replace with your skill icon URL
      name="Database Management"
      description="Intermediate"
    />
        <SkillCard
      icon="/ar_icon.png" // Replace with your skill icon URL
      name="Augmented Reality"
      description="Beginner"
    />
    {/* Add more SkillCard components for each skill */}
    </div>
  </div>
        </div>
      </div>
    </div>
  )
}
