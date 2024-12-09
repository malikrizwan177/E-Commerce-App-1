import { assets } from "../assets/frontend_assets/assets"
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img loading="lazy" src={assets.about_img} alt="about_img" className="w-full md:max-w-[450px]"/>
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sapiente necessitatibus ratione tempora atque modi reiciendis, dignissimos esse illum sit officia repellendus soluta, ipsam placeat blanditiis molestias laudantium provident tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque natus, accusantium?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus necessitatibus aperiam soluta rerum dolorem doloribus hic maiores impedit odit nostrum eos voluptas ea incidunt veniam, earum quis iusto perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt in velit facere ipsam minima molestias doloribus! Similique veritatis sunt expedita maiores!</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quaerat recusandae, velit impedit amet minima fugit repellat eos excepturi laboriosam dolorum ipsa quasi perspiciatis officiis quis enim fugiat ducimus eum!</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aliquam, hic fuga nesciunt cum quia facilis aspernatur sit molestias quidem non perspiciatis</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aliquam, hic fuga nesciunt cum quia facilis aspernatur sit molestias quidem non perspiciatis</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Excpetional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aliquam, hic fuga nesciunt cum quia facilis aspernatur sit molestias quidem non perspiciatis</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About