import React from 'react';
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const FeaturedToy = () => {
    return (
        <div className='my-6 mb-4'data-aos="zoom-in">
            <div className="divider"></div>
            <p className='text-center text-4xl font-semibold text-black mb-5'>Some of Featured Photo's</p>
            <Marquee
            speed={30}
            gradient={true}
            gradientWidth={45}
            pauseOnClick={true}
            pauseOnHover={false}
            play={true}
            >
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src='https://img.freepik.com/free-vector/pet-dog-front-doghome_1308-72259.jpg?w=740&t=st=1684847151~exp=1684847751~hmac=1d2e6e604324d78b29f332445b83924a10b12fb5ba27776e8c6a080b6ef84f02'  className="rounded-lg  h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src='https://img.freepik.com/free-photo/closeup-shot-adorable-small-golden-retriever-pup-lying-purple-carpet-with-blue-toy_181624-32890.jpg?w=740&t=st=1684847191~exp=1684847791~hmac=51e74b7b45e12c0b5223fecbf9e5f0c3a72cec12ce5e761b74302f582d1c329f' className="rounded-lg h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src='https://img.freepik.com/free-photo/teddy-bears-couple-with-red-heart-gift-white_155003-17148.jpg?w=740&t=st=1684845606~exp=1684846206~hmac=06d70f917e2cf474120678693091a7dde2206a83b85cd213c05cbbc8694ce85a' className="rounded-lg h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src="https://img.freepik.com/free-photo/front-view-cute-little-baby-boy-cupcake-teddybear_23-2148415544.jpg?w=740&t=st=1684845930~exp=1684846530~hmac=ea4c12fa40b3fa8eba815fb4338d98ecf637780e3a73dc31c3b760bd5cf9f5ce" className="rounded-lg h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src='https://img.freepik.com/free-vector/horse-with-saddle-cartoon-character-white-background_1308-53287.jpg?w=740&t=st=1684846637~exp=1684847237~hmac=12ccf706d6409e566ebc42b1b6de745f657edbe8f506afd3178b6b138a973603' className="rounded-lg h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src="https://img.freepik.com/free-photo/fun-horse_183364-80091.jpg?w=740&t=st=1684846640~exp=1684847240~hmac=fe6e1c4e17633eafed3e08af89efaf16d32755751433e89d98a201dbcd003fd4" className="rounded-lg h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bd-indigo-100  shadow-xl m-4 bg-quaternary">
                    <figure className="p-5">
                        <img src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686881.jpg?w=360&t=st=1684845913~exp=1684846513~hmac=a8354a6cdfb0cdd2388708eb9ab92098e7ed4efd82a1e01b8d21a4c4e87aba96" className="rounded-lg h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src="https://img.freepik.com/free-photo/adorable-white-little-puppy_23-2148985895.jpg?w=740&t=st=1684847098~exp=1684847698~hmac=ec96d94df2b1968ee77fa577b8db064f39138c0f8fc6be36c68880bc636dffe9" className="rounded-xl h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src="https://img.freepik.com/free-photo/studio-shot-welsh-corgi-pembroke-playing_155003-35333.jpg?w=740&t=st=1684847120~exp=1684847720~hmac=66093b6a3fc0dbafdfe4095cac2a1a8b0a9adeb284e2618c47f8af9f94d74322" className="rounded-lg h-[400px]" />
                    </figure>
                </div>
                <div className="card w-96 bg-indigo-100 m-4 shadow-xl bg-quaternary">
                    <figure className="p-5">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-pet-elements-your-cute-dog_23-2147537188.jpg?w=740&t=st=1684847591~exp=1684848191~hmac=b06339aa25340a3b757d7c85b5ea5fbb42d3e687289cae58883a92644d02a992" className="rounded-xl h-[400px]" />
                    </figure>
                </div>
            </Marquee>
            <div className='divider'></div>
        </div>
    );
};

export default FeaturedToy;