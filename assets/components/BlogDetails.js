export default async function blogDetails(div, id) {
    await fetch(`https://658b1777ba789a9622386cc7.mockapi.io/farm/v1/blogs?id=${id}`)
        .then((res) => res.json())
        .then((data) =>{
            if(data[0].id){
                data.map((blog) =>(
                    div.innerHTML = `<div class="d-flex gap-3 align-items-center fw-semibold">
                        <p class="m-0">ORGANIC FOOD</p> 
                        <span> | </span> 
                        <p class="m-0 text-muted">${blog.postAt}</p>
                    </div>
                    <div class="title my-4">
                        <h2 class="font-poppins fs-1">${blog.title}</h2>
                    </div>
                    <div class="post-img my-5">
                        <img src="${blog.img}" width="100%" height="500px" alt="">
                    </div>
                    <div class="body">
                    ${blog.body}
                    </div>
                </div>`
                )); 
            }else{
                window.location.replace('http://127.0.0.1:5500/blog.html')
            }
        })
}
