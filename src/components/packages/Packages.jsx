import img1 from '../../assets/img_1.png'
import img2 from '../../assets/img_2.png'
import img3 from '../../assets/img_3.png'
import './packages.css'

const Packages = () => {
  return (
  <section className="my-24 px-24 bg-[#F5FFFC]">
    <div className="text-centers mb-8">
      <h1
        className="title text-[#2ED89B] text-center text-4xl font-semibold uppercase"
      >
        Our Most Popular Tours
      </h1>
      <p className="text-[#2D5527] text-center mt-2 uppercase">
        See our most popular tour packages this year
      </p>
    </div>
    <div className="flex gap-x-8">
      <div className="w-1/3 shadow-lg">
          <div className="mb-4">
            <img
              className="w-full"
              src={img1}
              alt="SYLHET"
            />
          </div>
          <div>
            <div className="flex justify-between mx-3">
              <h2 className="text-[#2ED89B] text-2xl font-semibold">SYLHET</h2>
              <p><strong className="text-[#19A361] text-2xl">1500tk</strong></p>
            </div>
            <div className="my-4 flex text-[#2D5527] gap-x-4 mx-1">
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-user text-xl"></i>
                <p className="flex flex-col text-xs ml-2">Single</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-user-group text-xl"></i>
                <li className="flex flex-col text-xs ml-2">Couple</li>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-users text-xl"></i>
                <li className="flex flex-col text-xs ml-2">Family</li>
              </div>
            </div>
            <p className="w-10/12 text-[#6F6F6F] text-xs mx-3">
              Lorem ipsum dolor sit amet This is Photoshop’s version of Lorem
              Ipsn gravida. Ing business like this takes much more effort than
              doing your own.
            </p>
            <div className="my-4 mx-3">
              <p className="text-[#2D5527]">
                <i className="fa-solid fa-calendar-check"></i><b>&nbsp; 2D 1N</b>
              </p>
            </div>
          </div>
          <button className="w-full bg-[#FFCE0C] text-slate-100 py-2 mt-6">
            <a className="text-xl" href="#">Book Your Tour</a>
          </button>
        </div>


        <div className="w-1/3 shadow-lg">
          <div className="mb-4">
            <img
              className="w-full"
              src={img2}
              alt="SYLHET"
            />
          </div>
          <div>
            <div className="flex justify-between mx-3">
              <h2 className="text-[#2ED89B] text-2xl font-semibold">SYLHET</h2>
              <p><strong className="text-[#19A361] text-2xl">1500tk</strong></p>
            </div>
            <div className="my-4 flex text-[#2D5527] gap-x-4 mx-1">
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-user text-xl"></i>
                <p className="flex flex-col text-xs ml-2">Single</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-user-group text-xl"></i>
                <li className="flex flex-col text-xs ml-2">Couple</li>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-users text-xl"></i>
                <li className="flex flex-col text-xs ml-2">Family</li>
              </div>
            </div>
            <p className="w-10/12 text-[#6F6F6F] text-xs mx-3">
              Lorem ipsum dolor sit amet This is Photoshop’s version of Lorem
              Ipsn gravida. Ing business like this takes much more effort than
              doing your own.
            </p>
            <div className="my-4 mx-3">
              <p className="text-[#2D5527]">
                <i className="fa-solid fa-calendar-check"></i><b>&nbsp; 2D 1N</b>
              </p>
            </div>
          </div>
          <button className="w-full bg-[#FFCE0C] text-slate-100 py-2 mt-[21.10px]">
            <a className="text-xl" href="#">Book Your Tour</a>
          </button>
        </div>

        <div className="w-1/3 shadow-lg">
          <div className="mb-4">
            <img
              className="w-full"
              src={img3}
              alt="SYLHET"
            />
          </div>
          <div>
            <div className="flex justify-between mx-3">
              <h2 className="text-[#2ED89B] text-2xl font-semibold">SYLHET</h2>
              <p><strong className="text-[#19A361] text-2xl">1500tk</strong></p>
            </div>
            <div className="my-4 flex text-[#2D5527] gap-x-4 mx-1">
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-user text-xl"></i>
                <p className="flex flex-col text-xs ml-2">Single</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-user-group text-xl"></i>
                <li className="flex flex-col text-xs ml-2">Couple</li>
              </div>
              <div className="flex flex-col justify-center items-center">
                <i className="fa-solid fa-users text-xl"></i>
                <li className="flex flex-col text-xs ml-2">Family</li>
              </div>
            </div>
            <p className="w-10/12 text-[#6F6F6F] text-xs mx-3">
              Lorem ipsum dolor sit amet This is Photoshop’s version of Lorem
              Ipsn gravida. Ing business like this takes much more effort than
              doing your own.
            </p>
            <div className="my-4 mx-3">
              <p className="text-[#2D5527]">
                <i className="fa-solid fa-calendar-check"></i><b>&nbsp; 2D 1N</b>
              </p>
            </div>
          </div>
          <button className="w-full bg-[#FFCE0C] text-slate-100 py-2 mt-6">
            <a className="text-xl" href="#">Book Your Tour</a>
          </button>
        </div>
      </div>

      <div className="mt-12 flex justify-center items-center">
        <a className="bg-[#FFCE0C] text-slate-100 px-6 py-2 rounded" href="#">More</a>
      </div>
  </section>
  )
} 

export default Packages