export default async function Profile(div, author) { 
    await fetch(`http://localhost:3000/blog?author=${author}`)
        .then((res) => res.json())
        .then((data) =>{ 
            if(data.id){
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
                div.innerHTML = `<h1 class="text-center">There is no blog to show</h1>
                                <a href="/create_blog_post.html" class="text-center">Create a Blog here</a>`
            }
        })
}
