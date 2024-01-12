export default async function Profile(div, author) {
    console.log(name);
    await fetch(`https://658b1777ba789a9622386cc7.mockapi.io/farm/v1/blogs?author=${author}`)
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            if(data[0].id){
                data.map((blog) =>(
                    div.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card border-0 w-100 " style="width: 18rem;">
                        <a href="/blog-details.html?id=${blog.id}" class="text-decoration-none">
                            <div class="card-img overflow-hidden">
                                <img src="${blog.img}" class="card-img-top" alt="...">
                            </div>
                        </a>
                        <div class="card-body ">
                            <a href="/blog-details.html?id=${blog.id}" class="text-decoration-none text-center">
                                <h5 class="card-title text-dark">${blog.title}</h5>
                                <p class="text-muted fw-semibold">${blog.postAt}</p>
                            </a> 
                        </div>
                    </div>
                </div>`
                )); 
            }else{
                window.location.replace('http://127.0.0.1:5500/blog.html')
            }
        })
}
