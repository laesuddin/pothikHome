import blog from '../../assets/blog.jpg'
import './blog.css'

const Blog = () => {
  return (
    <section className="my-24 px-24">
      <div className="text-centers mb-8">
        <h1 className="title text-[#2ED89B] text-center text-4xl font-semibold uppercase">Blog Post</h1>
        <p className="text-[#2D5527] text-center mt-2 uppercase">
        Read about our adventures
        </p>
      </div>

      <div>
        <img src={blog} alt="blogphoto" className='blog'/>
      </div>
    </section>
  )
}

export default Blog