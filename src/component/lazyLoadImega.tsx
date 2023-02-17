import React, { useRef, useState } from 'react'
type PropsLazy = {
    dataImage: string[]
}


function LazyLoadImege({ dataImage }: PropsLazy) {
    const div = useRef(null)

    const getImage = () => {
        const tag = document.querySelectorAll(".lzy");
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const parent =entry.target.getAttribute("data-src");
                if(entry.isIntersecting){
                    entry.target.setAttribute('src', parent)
                }
                observer.unobserve(entry.target)
            })
        },{
            rootMargin: "30px",
            threshold: 0
        })
        tag.forEach(res => {
            observer.observe(res)
        })
    }

    React.useEffect(() => {
        getImage()
    }, [])
    return (

        <div
            style={{
                height: "100%",
                overflow: "scroll",
            }}
            ref={div}
        >
            {
                dataImage.map((item, index) => {
                    return (
                        <div>
                            <img
                                height={360}
                                className='lzy'
                                key={index}
                                id={`index-${index}`}
                                alt='..'
                                loading={"lazy"}
                                data-src={item}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default LazyLoadImege