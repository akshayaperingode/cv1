function submittext()

{
    var dep = parseInt( document.getElementById("departmentpay").value)
    var ser = parseInt(document.getElementById("servicecharge").value)
    var totalx = ser+dep
    document.getElementById("total").value=totalx
}

function submitallx()
{
   var all
   var all1 =document.getElementById("customername").value
   var all2 =document.getElementById("customermob").value
   var all3 =document.getElementById("customeremail").value
   var allx=all1+all2+all3
   document.getElementById("xxx3").value=allx
   

}

function me() { 

    var a = document.getElementById("xx").value;
    var b = document.getElementById("xxx").value;
    if(a=="Rajitha")
    {
    if(b=="Raji@100")
    {
    
    window.location.href = "https://forms.gle/fe9iQRLZzzEN7k7d9";
    }    
    }
else if(a=="Deepa" )
{ 
    if(b=="Deep@100")
    {
    window.location.href = "https://forms.gle/gFvjz4Be1fBkNdgEA";
    }
}else if (a=="Sandya" && b=="Sand@100")
{
    window.location.href = "https://forms.gle/ssa1pFBsJ43jKaLT6"; 
}
else if(a=="Sreeja" && b=="Sree@100")
{
    window.location.href = "https://forms.gle/vkbP7x8zyXkzoXYR9"  
}
else if(a=="Deepack" && b== "Deep@100")
{
    window.location.href = "https://forms.gle/jYhQvgWgeySfQ3ou7"  
}
else if(a=="Krish" && b=="Kris@100")
{
    window.location.href = "https://forms.gle/mx2DG1rBBSFkHpKJ6"  
}
else
    {
        document.write("Username Or Password Is Wrong");
    }

} 