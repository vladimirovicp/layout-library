addEventListener("load", function()
{
    document.getElementById("nz").addEventListener("click", nz);
    document.getElementById("vp").addEventListener("click", vp);

    let i=1;

    function nz()
    {
        document.getElementById("vp").style.visibility="visible";

        if(i<5)
        {
            document.getElementById("i"+i).style.transition="left 2s";
            document.getElementById("i"+i).style.left="0";

            let n=i+1;
            document.getElementById("i"+n).style.transition="left 2s";
            document.getElementById("i"+n).style.left="47.5rem";

            n=i+2;
            document.getElementById("i"+n).style.transition="left 2s";
            document.getElementById("i"+n).style.left="47.5rem";

            //i++;
            i = i + 2;

            if(i==5)
                document.getElementById("nz").style.visibility="hidden";
        }
    }

    function vp()
    {
        document.getElementById("nz").style.visibility="visible";

        if(i>1)
        {
            document.getElementById("i"+i).style.transition="left 2s";
            document.getElementById("i"+i).style.left="95rem";

            let n=i-1;
            document.getElementById("i"+n).style.transition="left 2s";
            document.getElementById("i"+n).style.left="47.5rem";

            n=i-2;
            document.getElementById("i"+n).style.transition="left 2s";
            document.getElementById("i"+n).style.left="47.5rem";

            //i--
            i = i - 2;

            if(i==1)
                document.getElementById("vp").style.visibility="hidden";
        }
    }
});
