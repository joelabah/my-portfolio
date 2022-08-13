function openNav() {
  document.getElementById("mySidebar").style.width = "50%";
    document.querySelector('.body').style.backgroundColor = "rgba(40, 44, 53, 0.95)";
  }


 
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector('.body').style.backgroundColor = "rgba(40, 44, 53, 1)";
    // location.reload();
    // return false;
  }

window.onscroll = function() {
  myFunction()
}

let header = document.getElementById('myHeader')
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



