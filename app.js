const regBtnClick = () => {
    window.location.href="form.html"
}

//get data
document.addEventListener("DOMContentLoaded",function(){
    const m =document.getElementById("formData");
    m.addEventListener("submit",function(e){
        e.preventDefault();
        const formData =new FormData(m)
        const data = Object.fromEntries(formData.entries())
        console.log(data);
        const jsonTypeDetails = JSON.stringify(data);
        console.log(jsonTypeDetails)
         m.reset();

        });
})
