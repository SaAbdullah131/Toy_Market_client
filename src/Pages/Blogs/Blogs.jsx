import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-indigo-200'>
            <h3 className='text-bold text-3xl  text-center underline mb-4'>Answering Question</h3>
            <div tabIndex={0} className="collapse collapse-plus border border-violet-300 bg-base-100 rounded-box text-center mb-2 ">
                <div className="collapse-title text-xl font-medium ">
                    What is an access token and refresh token ? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  text-center mb-2">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL Database?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  text-center mb-2">
                <div className="collapse-title text-xl font-medium">
                    What is Express js? What is Nest Js?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  text-center mb-2">
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;